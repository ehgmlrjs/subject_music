const express = require('express');
const database = require('../config/database.config');
const mypageCheck = require('../models/mypageCheck');

const router = express.Router();

const authUtil = require('../middleware/auth').checkToken;

router.post('/', authUtil, async (req, res) => {
    let co;

    try {
        const nickname = req.body;

        co = await database.getConnection();
        const query = 'SELECT * FROM mypage WHERE nickname = ?';
        const values = [nickname];

        const [result] = await co.execute(query, values);
        co.release();
        res.send(result)
        return result;
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
})

router.post('/update', authUtil, async (req, res) => {
    let co;

    try {
        const { Index, nickname } = req.body;
        const Date = new Date();

        co = await database.getConnection();
        if (mypageCheck(Index, nickname)) {
            const query = 'INSERT INTO mypage (?,?,?)';
            const values = [Index, nickname, Date]

            const [result] = await co.execute(query, values);
            co.release();
            res.send(result)
            return result;
        } else {
            const query = 'UPDATE mypage SET time = ? WHERE `Index` = ? AND nickname = ?';
            const values = [Date, Index, nickname];

            const [result] = await co.execute(query, values);
            co.release();
            res.send(result)
            return result;
        }


    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
})



module.exports = router;