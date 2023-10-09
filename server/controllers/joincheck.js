function emailCheck(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isValidEmail = emailRegex.test(email);

    if(!isValidEmail) return false

    return true
}

function passwordCheck(password){
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 

    const isValidPassword = passwordRegex.test(password);

    if(!isValidPassword) return false

    return true
}

function nickNameCheck(nickName) {
    const nickNameRegex = /^[a-zA-Z0-9_]{3,}$/; 
    const isValidNickName = nickNameRegex.test(nickName);

    if(!isValidNickName) return false

    return true
}

async function signupCheck(email, password, nickName){
    const emailCk = await emailCheck(email)
    const nickCk = await nickNameCheck(nickName)
    const passwordCk = await passwordCheck(password)

    return {emailCk, nickCk, passwordCk};
}

module.exports = {
    signupCheck
}