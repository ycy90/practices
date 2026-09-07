
 let userInfo = "admin";
   let userPass = 12345; 

function loginCheck(username, password) {
  
  

  if (username === userInfo && password === userPass) {
    return "Login Succesful";
  } else if (username === userInfo && password !== userPass) {
    return "Incorrect password";
  } else if (username !== userInfo && password === userPass) {
    return "Incorrect username";
  } else {
    return "Both username and password incorrect";
  }
} 

userInfo = "yigit";
userPass = 123456

console.log(loginCheck("yigit", 123456));