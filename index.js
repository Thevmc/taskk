const express=require("express");

const app=express();

const dotenv=require("dotenv").config()

const regroute=require("./routes/user");

const {sequelize,getconnection}=require('./connections');

app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use('/',regroute);

const port=process.env.PORT;

app.listen(port,async()=>
{
    console.log(`server started at port:${port}`);
    await getconnection();
})

