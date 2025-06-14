const { Router } = require("express");
const { userMiddleware } = require("../middleware/user");
const { purchaseModel, courseModel } = require("../db");

const courseRouter = Router();

courseRouter.post('/purchase',userMiddleware, async (req,res) => {
    const userId = req.userId;
    const courseId = req.body.courseId;
    const purchase = await purchaseModel.create({
        courseId,
        userId
    })
    res.json({
        message: "Purchase Successful",
        purchaseId: purchase._id
    })
})

courseRouter.get('/preview',async (req,res) => {
    const courses = await courseModel.find({});
    console.log(courses)

    res.json({
        courses
    })
})

module.exports = {
    courseRouter: courseRouter
}