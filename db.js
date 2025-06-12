const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const userSchema = Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String
})

const adminSchema = Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String
})

const courseSchema = Schema({
    title: String,
    description: String,
    price: Number,
    imageURL: String,
    creatorId: ObjectId
})

const purchaseSchema = Schema({
    courseId: ObjectId,
    userId: ObjectId
})

const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin",adminSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema);