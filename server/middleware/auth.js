const jwt = require('../models/jwt');
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;


const authUtil = {
    checkToken: async (req, res, next) => {
        const token = req.headers.authorization;

        if (token==='null') {
            return res.status(201).json({ message: '로그인을 해 주세요' })
        }
        try {
            const data = await jwt.decoded(token);
            const { email, nickname } = data;
            const user = await jwt.verify(token);

            if (user === TOKEN_EXPIRED) {
                const new_token = await jwt.sign({ email, nickname });
                return res.status(202).json({
                    message: '유효기간 만료',
                    token: new_token.token
                })
            } else if (user === TOKEN_INVALID) {
                return res.status(203).json({ message: '유효하지 않은 토큰' });
            } next();
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: '서버오류' })
        }

    }
}

module.exports = authUtil;


