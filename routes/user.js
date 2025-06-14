const { Router } = require("express")
const { userModel, purchaseModel, courseModel } = require("../db")
const jwt = require("jsonwebtoken")
const { JWT_USER_PASSWORD } = require("../config")
const { userMiddleware } = require("../middleware/user")

const userRouter = Router();

userRouter.post('/signup',async (req,res) => {
    const { email,password,firstName,lastName } = req.body;

    await userModel.create({
        email,
        password,
        firstName,
        lastName
    });

    res.json({
        message: "Signup succeded!"
    })
})

userRouter.post('/signin',async (req,res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({
        email: email,
        password: password
    })
    if(user){
        const token = jwt.sign({
            id: user._id
        },JWT_USER_PASSWORD);
        res.json({
            message: "Signin Successful",
            token
        })
    }
    else{
        res.status(403).json({
            message: "Invalid Username or password"
        })
    }
})

userRouter.get('/purchases', userMiddleware,async (req,res) => {
    const userId = req.userId;
    const purchases = await purchaseModel.find({
        userId
    })
    const courses = await courseModel.find({
        _id: purchases.map(x => x.courseId)
    })

    res.json({
        purchases,
        courses
    })
})

module.exports = {
    userRouter: userRouter
}