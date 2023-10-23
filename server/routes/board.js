const express = require('express');
const database = require('../config/database.config');

const authUtil = require('../middleware/auth').checkToken;

const router = express.Router();

router.post('/', async (req, res) => {
    let co;
    try {
        const li = ['id DESC', 'id', '`like` DESC']
        const type = 0

        co = await database.getConnection();
        const query = `SELECT * FROM board_content ORDER BY ${li[type]}`;

        const [result] = await co.execute(query);
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
        const { title, nickname, content, address1, address2, address3 } = req.body;
        const board_date = new Date();
        co = await database.getConnection();
        const query = 'INSERT INTO board_content (title, nickname, content, address1, address2, address3,board_date) values (?,?,?,?,?,?,?)';
        const values = [title, nickname, content, address1, address2, address3, board_date];

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

router.post('/delete', authUtil, async (req, res) => {
    let co;
    try {
        const { id } = req.body;

        co = await database.getConnection();
        const query = 'DELETE FROM board_content WHERE id = ?';
        const values = [id];

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

router.post('/search', authUtil, async (req, res) => {
    try {
        const { search } = req.body;

        const co = await database.getConnection();
        const query = 'SELECT * FROM board_content WHERE title LIKE ? OR content LIKE ?';
        const values = [`%${search}%`, `%${search}%`];

        const [result] = await co.execute(query, values);
        co.release();
        return res.send(result)
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
})


module.exports = router;
