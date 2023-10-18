const express = require('express');
const jwt = require('../models/jwt');
const { signup, isCheck } = require('../models/join');
const { loginCheck } = require('../models/logincheck');
const { signupCheck } = require('../controllers/joincheck');

const authUtil = require('../middleware/auth').checkToken;

const router = express.Router();


router.post('/signup', async (req, res, next) => {
  try {
    const { email, password, nickName } = req.body;

    const { emailCk, nickCk, passwordCk } = await signupCheck(email, password, nickName)

    const { emcheck, nicheck } = await isCheck(email, password, nickName);

    // email, password, nickName 유효성검사
    if (!emailCk) {
      return res.status(203).json({
        message: "잘못된 이메일 형식입니다."
      })
    }
    if (!nickCk) {
      return res.status(204).json({
        message: "잘못된 닉네임 형식입니다."
      })
    }
    if (!passwordCk) {
      return res.status(205).json({
        message: "잘못된 비밀번호 형식입니다."
      })
    }

    // email, nickName 중복검사
    if (emcheck) {
      return res.status(201).json({
        message: "이미 존재하는 이메일입니다."
      });
    }
    if (nicheck) {
      return res.status(202).json({
        message: "이미 존재하는 닉네임입니다."
      });
    }

    await signup(email, password, nickName);

    return res.status(200).json({
      message: "Completed",
      nickname: nickName
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Internal server error'
    });
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const isValidLogin = await loginCheck(email, password); // 유효성 검사 false: 유효하지 않은 정보
    
    // 사용자가 이미 인증되었는지 확인합니다 (세션이 존재하는 경우)
    if (!isValidLogin.length > 0) {
      // 로그인 유효성 검사
      return res.status(201).json({
        message: '유효하지 않은 로그인 자격 증명입니다.'
      });
    } else {
      const nick = isValidLogin[0].nickname;
      const jwtToken = await jwt.sign({email,nick});
      return res.status(200).json({
        message: '로그인 성공',
        user: email, // 이메일, 닉네임 또는 사용자 식별자를 사용할 수 있습니다.
        nick: nick,
        token: jwtToken.token
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Internal server error'
    });
  }
})

router.post('/logout',authUtil, (req, res) => {

  try {
    return res.status(200).json({
      message: '로그아웃 성공'
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: '로그아웃 중 오류가 발생했습니다.'
    });
  }
});


module.exports = router;