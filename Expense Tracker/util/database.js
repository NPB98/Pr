const Sequelize=require('sequelize');
const sequelize=new Sequelize('expense','root','nishibiswasroy',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;