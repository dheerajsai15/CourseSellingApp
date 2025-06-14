const { Router } = require("express")
const adminRouter = Router();
const { adminModel, courseModel } = require("../db")
const jwt = require("jsonwebtoken")
const { JWT_ADMIN_PASSWORD } = require("../config")
const { adminMiddleware } = require("../middleware/admin")

adminRouter.post('/signup',async (req,res) => {
    const { email,password,firstName,lastName } = req.body;

    await adminModel.create({
        email,
        password,
        firstName,
        lastName
    });

    res.json({
        message: "Signup succeded!"
    })
})

adminRouter.post('/signin',async (req,res) => {
    const { email, password } = req.body;

    const admin = await adminModel.findOne({
        email: email,
        password: password
    })
    if(admin){
        const token = jwt.sign({
            id: admin._id
        },JWT_ADMIN_PASSWORD);
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

adminRouter.post('/course',adminMiddleware,async (req,res) => {
    const adminId = req.userId;
    const { title, description, price, imageURL } = req.body;

    const course = await courseModel.create({
        title,
        description,
        price,
        imageURL,
        creatorId: adminId
    })

    res.json({
        message: "Course created successfully!",
        courseId: course._id
    })
})

adminRouter.put('/course',adminMiddleware,(req,res) => {})

adminRouter.get('/course/bulk',adminMiddleware,(req,res) => {})

module.exports = {
    adminRouter: adminRouter
}