const express = require('express');
const router = express.Router();
const database = require('../config/database.config');

router.get('/:index', async (req, res, next) => {
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

module.exports = router;