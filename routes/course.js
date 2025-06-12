const { Router } = require("express")

const courseRouter = Router();

courseRouter.post('/coruse/purchase',(req,res) => {})

courseRouter.get('/coruse/preview',(req,res) => {})

module.exports = {
    courseRouter: courseRouter
}