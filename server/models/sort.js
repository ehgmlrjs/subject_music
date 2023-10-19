const database = require('../config/database.config');

async function sort(nickname) {
    let co;
    try {
        co = await database.getConnection()

        query = 'DELETE FROM mypage WHERE `Index` NOT IN (SELECT `Index` FROM (SELECT `Index` FROM mypage WHERE nickname = ? ORDER BY song_date DESC LIMIT 5) AS subquery);';
        values = [nickname];

        const [result] = await co.execute(query,values);
        co.release();
        return result;

    } catch (error) {
        return error;
    }
}

module.exports = sort;