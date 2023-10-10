const database = require('../db/database.config');

async function loginCheck(email, password) {
    let co;
    try {
        co = await database.getConnection();
        const query = `SELECT email, password FROM laproject.user WHERE email = ? AND password = ?`;
        const values = [email, password];
        
        const [result] = await co.execute(query, values);
        co.release();

        if (result.length === 0) {
            return false
        }else {
            return true
        }
    } catch (error) {
        return error;
    }
}

module.exports = {
    loginCheck
}