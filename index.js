const express = require("express");
const app = express();
const { userRouter } = require("./routes/user") 
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

app.use('/api/v1/user',userRouter);
app.use('/api/v1/coruse',courseRouter);
app.use('/api/v1/admin',adminRouter);


app.listen(3000);