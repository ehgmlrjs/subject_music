const express = require('express');
const {signup, isCheck} = require('../models/join');
const {signupCheck} = require('../controllers/joincheck');

const router = express.Router();

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


  module.exports = router;