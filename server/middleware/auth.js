const jwt = require('../models/jwt');
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;


const authUtil = {
    checkToken: async (req, res, next) => {
        const token = req.headers.authorization;
        if (!token) {
            return res.json({
                message: '토큰x'
            })
        }
        const user = await jwt.verify(token);
        if (user === TOKEN_EXPIRED){
            console.log('유효기간 만료')
            return res.send('유효기간 만료')
        }else if (user === TOKEN_INVALID){
            console.log('유효하지 않은 토큰')
            return res.send('유효하지 않은 토큰');
        }else {
            console.log('x')
            return res.send('x')
        }next();
    }
}

module.exports = authUtil;


