const database = require('../config/database.config');

async function loginCheck(email, password) {
    let co;
    try {
        co = await database.getConnection();
        const query = `SELECT nickname FROM laproject.user WHERE email = ? AND password = ?`;
        const values = [email, password];
        
        const [result] = await co.execute(query, values);
        co.release();

        return result
    } catch (error) {
        return error;
    }
}

module.exports = {
    loginCheck
}