const express = require('express');
const database = require('../config/database.config');

const authUtil = require('../middleware/auth').checkToken;

const router = express.Router();



router.post('/:id', authUtil, async (req, res) => {
    try {
        const id = req.params.id;

        const co = await database.getConnection();
        const query = 'SELECT * FROM board_content WHERE id = ?';
        const values = [id];

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


router.post('/:id/update', async (req, res) => {
    try {
        const id = req.params.id;
        const { title, nickname, content, address1, address2, address3 } = req.body;
        const board_date = new Date();

        const co = await database.getConnection();
        const query = `UPDATE board_content SET (title=?, content=?, address1=?, address2=?, address3=?, board_date=?)
        WHERE id=? AND nickname = ?`;
        const values = [title, content, address1, address2, address3, board_date, id, nickname];

        await co.execute(query, values);
        co.release();

        return res.status(200).json({
            message: '성공'
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
})


module.exports = router;