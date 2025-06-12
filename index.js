const express = require("express");
const app = express();

app.post('/user/signup', (req,res) => {})

app.post('/user/signin',(req,res) => {})

app.get('/user/purchases',(req,res) => {})

app.post('/coruse/purchase',(req,res) => {})

app.get('/coruses',(req,res) => {})


app.listen(3000);