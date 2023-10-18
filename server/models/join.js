const database = require('../config/database.config');

async function signup(email, password, nickName) {
    let co;

    try{
        co = await database.getConnection();
        const query = `INSERT INTO laproject.user (nickName, email, password) VALUES (?, ?, ?)`;
        const values = [nickName, email, password];

        const [result] = await co.execute(query, values);
        co.release();
        return result;        
    }catch(error){
        return error
    }
}

async function emailCheck (email){
    let co;

    try {
        co = await database.getConnection();
        const query = `SELECT email FROM laproject.user WHERE email=?`;
        const values = [email];

        const [result] = await co.execute(query,values);
        co.release();
        if (result.length>0) {
            return true
        }else {
            return false
        }
    } catch (error) {
        return error;
    }
}

async function nicknameCheck (nickName){
    let co;

    try {
        co = await database.getConnection();
        const query = `SELECT nickName FROM laproject.user WHERE nickName=?`;
        const values = [nickName];

        const [result] = await co.execute(query,values);
        co.release();
        if (result.length>0) {
            return true
        }else {
            return false
        }
    } catch (error) {
        return error;
    }
}

async function isCheck(email, password, nickName) {
    const emcheck = await emailCheck(email);
    const nicheck = await nicknameCheck(nickName);
    return {emcheck, nicheck};
  }

module.exports = {
    signup,
    isCheck
}