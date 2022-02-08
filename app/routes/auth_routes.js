const { verifySignUp } = require('../middleware')
const controller = require('../controllers/auth_controller')

const express = require('express')
const router = express.Router()

// module.exports = function(app) {
//   app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     )
//     next()
//   })

// }

router.post('/signup', verifySignUp.checkDuplicateUsernameOrEmail, controller.signup)
router.post('/signin', controller.signin)
router.post('/change-password', controller.changepassword)

module.exports = router
