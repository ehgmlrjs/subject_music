const jwt = require('../models/jwt');
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;


const authUtil = {
    checkToken: async (req, res, next) => {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(201).json({ message: 'token x' })
        }
        const user = await jwt.verify(token);
        if (user === TOKEN_EXPIRED) {
            return res.status(202).json({ message: '유효기간 만료' })
        } else if (user === TOKEN_INVALID) {
            return res.status(203).json({ message: '유효하지 않은 토큰' });
        } next();
    }
}

module.exports = authUtil;


