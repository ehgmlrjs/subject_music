const express = require('express');
const database = require('../config/database.config');
const mypageCheck = require('../models/mypageCheck');
const sort = require('../models/sort');

const router = express.Router();

const authUtil = require('../middleware/auth').checkToken;

router.post('/', authUtil, async (req, res) => {
    let co;

    try {
        const {nickname} = req.body;

        co = await database.getConnection();
        const query = 'SELECT DISTINCT * FROM song WHERE `Index` in (SELECT `Index` FROM mypage WHERE nickname = ? ORDER BY song_date DESC)';
        const values = [nickname];

        const [result] = await co.execute(query, values);
        co.release();
        return res.send(result);
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
        const song_date = new Date();

        co = await database.getConnection();
        if (!await mypageCheck(Index, nickname)) {
            const query = 'INSERT INTO mypage VALUES (?,?,?)';
            const values = [Index, nickname, song_date]

            await co.execute(query, values);
            co.release();
        } else {
            const query = 'UPDATE mypage SET song_date = ? WHERE `Index` = ? AND nickname = ?';
            const values = [song_date, Index, nickname];

            await co.execute(query, values);
            co.release();
        }

        sort(nickname);


    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
})



module.exports = router;