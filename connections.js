const Sequelize=require("sequelize");
const mysql=require("mysql2")
const dconfig=require('./config')
const dotenv=require("dotenv").config()

const sequelize=new Sequelize(dconfig.database,dconfig.username,dconfig.password,{
    host:dconfig.host,
    dialect:'mysql'
});


const getconnection=async()=>
{ 
    try
    {
        await sequelize.authenticate();
        console.log("connected to db.");
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports={sequelize,getconnection}