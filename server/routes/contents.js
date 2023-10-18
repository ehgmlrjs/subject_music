const express = require('express');
const router = express.Router();
const database = require('../config/database.config');
const boardCheck = require('../models/boardCheck');

const authUtil = require('../middleware/auth').checkToken;

router.get('/:index', async (req, res) => {
    let co;
    try {
        const index = req.params.index;
        co = await database.getConnection();
        const query = 'SELECT DISTINCT * FROM song WHERE `Index` = ?';
        const values = [index];

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

router.post('/:index/board', async (req, res) => {
    let co;

    try {
        const index = req.params.index;
        console.log(index)
        co = await database.getConnection();
        const query = 'SELECT * FROM laproject.board WHERE `Index`=?';
        const values = [index];

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

router.post('/:index/boardUpdate', authUtil, async (req, res) => {
    let co;

    try {
        const { nickname, comment } = req.body;
        const index = req.params.index;
        if (!await boardCheck(index, nickname, comment)) {
            co = await database.getConnection();
            const query = 'INSERT INTO laproject.board (`Index`,nickname, comment)  VALUES (?, ?, ?)';
            const values = [index, nickname, comment];

            await co.execute(query, values);
            co.release();
            return res.status(200).json({
                message: '등록'
            })
        } else {
            return res.status(201).json({
                message: '이미 등록된 댓글'
            })
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
})

router.post('/:index/boardDelete', authUtil, async (req, res) => {
    let co;
    try {
        const { nickname, comment } = req.body;
        const index = req.params.index;
        co = await database.getConnection();
        const query = 'DELETE FROM laproject.board WHERE `INDEX`=? AND nickname=? AND comment=?';
        const values = [index, nickname, comment];

        await co.execute(query, values);
        co.release();
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
})

module.exports = router;