const database = require('../config/database.config');

async function mypageCheck(Index, nickname) {
    let co;
    try {
        co = await database.getConnection();
        const query = 'SELECT * FROM mypage WHERE `Index` = ? AND nickname = ?';
        const values = [Index, nickname, comment];

        const [result] = await co.execute(query, values);
        co.release();

        return result.length > 0 ? true : false
    } catch (error) {
        return error;
    }
}

module.exports = mypageCheck;