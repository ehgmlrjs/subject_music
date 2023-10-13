const express = require('express');
const router = express.Router();
const database = require('../db/database.config');

const transKo = require('../models/transKo');


router.get('/:name', async (req, res, next) => {
    let co;
    try {
        const di = {'pop':'global_today','top':'top100'}
        const type = transKo(req.params.name);
        co = await database.getConnection();
        const query = `SELECT * FROM ${di[type]}`;

        const [result] = await co.execute(query);
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