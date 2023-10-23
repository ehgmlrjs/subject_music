const express = require('express');
const router = express.Router();
const database = require('../config/database.config');

const transKo = require('../models/transKo');

router.get('/:name', async (req, res, next) => {
    let co;
    try {
        const di = { 'pop': 'global_today', 'hot': 'top100' }
        const type = transKo(req.params.name);
        if (type in di) {
            co = await database.getConnection();
            const query = `SELECT * FROM ${di[type]}`;

            const [result] = await co.execute(query);
            co.release();
            return res.send(result);
        } else {
            co = await database.getConnection();
            const query = `SELECT * FROM new_song WHERE genre like ? UNION SELECT * FROM steady_song WHERE genre like ?`;
            const values = [`%${type}%`, `%${type}%`];

            const [result] = await co.execute(query, values);
            co.release();
            return res.send(result);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
})

module.exports = router;