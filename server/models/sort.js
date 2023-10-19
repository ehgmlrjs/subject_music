const database = require('../config/database.config');

async function sort(Index,nickname,song_date) {
    let co;
    try {
        co = await database.getConnection()

        query = 'DELETE FROM mypage WHERE `Index`,nickname NOT IN (SELECT `Index`,nickname FROM mypage ORDER BY song_date DESC LIMIT 5)';
        values = [];

        const [result] = await co.execute(query,values);
        co.release();
        return result;

    } catch (error) {
        return error;
    }
}

module.exports = sort()