const express = require('express');
const router = express.Router();
const database = require('../db/database.config');

const transKo = require('../models/transKo');


router.get('/:name', async (req, res, next) => {
    let co;
    try {
        const type = transKo(req.params.name);
        console.log(type)
        co = await database.getConnection();
        const query = `SELECT * FROM new_song WHERE genre like ? UNION SELECT * FROM steady_song WHERE genre like ?`;
        const values = [`%${type}%`,`%${type}%`];

        const [result] = await co.execute(query, values);
        co.release();
        res.send(result)
        return result;

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
})

module.exports = router;