const express = require('express');
const session = require('express-session');
const {Sequelize} = require('sequelize')
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const {signup, isCheck} = require('../models/join');
const {loginCheck} = require('../models/logincheck');
const {signupCheck} = require('../controllers/joincheck');

const router = express.Router();


const sequelize = new Sequelize('laproject', 'root', 'mysql', {
  host: 'localhost',
  dialect: 'mysql',
});

const sessionStore = new SequelizeStore({
  db: sequelize,
});

// 세션 미들웨어 추가
router.use(session({
  secret: '1023ldde',
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: {
    // 세션 쿠키 속성을 구성
    maxAge: 360000, // 세션이 1시간 후에 만료
    secure: false, // HTTPS만 사용하는 경우 true로 설정
    httpOnly: true, // 클라이언트 측 JavaScript 액세스 방지
  },
}));

sessionStore.sync();

router.post('/signup',  async (req, res, next) => {
    try {
      const { email, password, nickName } = req.body;

      const {emailCk, nickCk, passwordCk} = await signupCheck(email, password, nickName)
      
      const { emcheck, nicheck } = await isCheck(email, password, nickName);
        
      // email, password, nickName 유효성검사
      if(!emailCk) {
        return res.status(203).json({
            message: "잘못된 이메일 형식입니다."
        })
      }

      if(!nickCk) {
        return res.status(204).json({
            message: "잘못된 닉네임 형식입니다."
        })
      }

      if(!passwordCk) {
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
    try{
      const {email, password} = req.body;

      // 사용자가 이미 인증되었는지 확인합니다 (세션이 존재하는 경우)
      if(req.session.user) {
        return res.status(400).json({
          message: '이미 로그인되어 있습니다.'
        });
      }

      // 로그인 유효성 검사
      const isValidLogin = await loginCheck(email, password); // 유효성 검사 false: 유효하지 않은 정보

      if (!isValidLogin) { 
        return res.status(401).json({
          message: '유효하지 않은 로그인 자격 증명입니다.'
        });
      }

      // 성공적인 로그인 후 세션에 사용자 정보를 저장
      req.session.user = email;

      console.log(req.session)

      return res.status(200).json({
        message: '로그인 성공',
        user: email // 이메일, 닉네임 또는 사용자 식별자를 사용할 수 있습니다.
      });
    } catch(error) {
      console.error(error);
    }
  })

  router.post('/logout', (req, res) => {
    // 세션에서 사용자 정보를 삭제합니다.
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          message: '로그아웃 중 오류가 발생했습니다.'
        });
      }
      return res.status(200).json({
        message: '로그아웃 성공'
      });
    });
  });

  module.exports = router;