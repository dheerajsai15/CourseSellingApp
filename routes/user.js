const { Router } = require("express")

const userRouter = Router();

userRouter.post('/signup', (req,res) => {})

userRouter.post('/signin',(req,res) => {
    res.json({
        message: "Signup endpoint"
    })
})

userRouter.get('/purchases',(req,res) => {})

module.exports = {
    userRouter: userRouter
}