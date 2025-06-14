const dotenv = require("dotenv")
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user") 
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

app.use(express.json());

app.use('/api/v1/user',userRouter);
app.use('/api/v1/coruse',courseRouter);
app.use('/api/v1/admin',adminRouter);

async function main(){
    console.log(process.env.DB_STRING)
    await mongoose.connect(process.env.DB_STRING);
    app.listen(3000);
    console.log("Listening on port 3000......")
}

main();