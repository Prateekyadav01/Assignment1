
const express = require("express")
const router = express.Router()


const {
  login,
  signup,
  sendotp,
//   changePassword,
} = require("../controllers/Auth")




router.post("/login", login)


router.post("/signup", signup)


router.post("/sendotp", sendotp)
// router.post("/resetPassword",resetPassword); 


module.exports = router
