const express = require('express');
const database = require('../config/database.config');

const authUtil = require('../middleware/auth').checkToken;

const router = express.Router();

router.post('/:id', authUtil, async (req, res) => {
    try {
        const id = req.params.id;

        const co = await database.getConnection();
        const query = `SELECT * FROM board_chat WHERE id = ?`;
        const values = [id];

        const [result] = await co.execute(query, values);
        co.release();

        return res.send(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
})

router.post('/:id/update', authUtil, async (req, res) => {
    try {
        const id = req.params.id;
        const { nickname, content, star } = req.body;
        const chat_date = new Date();

        const co = await database.getConnection();
        const query = `INSERT INTO board_chat VALUES (?, ?, ?, ?, ?)`;
        const values = [id, nickname, content, chat_date, star];

        await co.execute(query, values);
        co.release();
        return res.status(200).json({
            message: '성공'
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
})

router.post('/:id/delete', authUtil, async (req, res) => {
    try {
        const id = req.params.id;
        const { nickname, content } = req.body;

        const co = await database.getConnection();
        const query = `DELETE FROM board_chat WHERE id=? AND nickname=? AND content=?`;
        const values = [id, nickname, content];

        await co.execute(query, values);
        co.release();
        return res.status(200).json({
            message: '성공'
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
})

module.exports = router;