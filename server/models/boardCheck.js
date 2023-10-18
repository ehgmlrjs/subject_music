const database = require('../config/database.config');

async function boardCheck(Index, nickname, comment) {
    let co;
    try {
        co = await database.getConnection();
        const query = 'SELECT * FROM laproject.board WHERE `Index` = ? AND nickname = ? AND comment = ?';
        const values = [Index, nickname, comment];

        const [result] = await co.execute(query, values);
        co.release();

        return result.length > 0 ? true : false
    } catch (error) {
        return error;
    }
}

module.exports = boardCheck;