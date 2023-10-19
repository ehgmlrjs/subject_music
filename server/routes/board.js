const express = require('express');
const database = require('../config/database.config');

const router = express.Router();

router.post('/', async (req, res) => {
    let co;
    try {
        // type = [board_date,id,like]
        // const type = req.body;
        const type = board_date;
        co = await database.getConnection();
        query = 'SELECT * FROM board_content ORDER BY ?';
        values = [type];

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


router.post('/update', async (req,res) => {
    let co;
    try{
        const {title, nickname, content, address1, address2, address3} = req.body;
        const board_date = new Date();
        co = await database.getConnection();
        query = 'INSERT INTO board_content (title, nickname, content, address1, address2, address3,board_date) values (?,?,?,?,?,?,?)';
        values = [title, nickname, content, address1, address2, address3, board_date];

        const [result] = await co.execute(query,values);
        co.release();
        
        return res.status(200).json({
            message : '성공'
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
})

module.exports = router;
