const database = require('../db/database.config');

async function isSession(email){
    let co;

    try{
        co = await database.getConnection();
        const query = `SELECT * FROM sessions WHERE JSON_UNQUOTE(JSON_EXTRACT(data, '$.user')) = ?;`;
        const values = [email];

        const [result] = await co.execute(query, values);
        co.release();
        console.log(result)
        return result.length>=0
    }catch(error){
        return error
    }
}

module.exports = isSession