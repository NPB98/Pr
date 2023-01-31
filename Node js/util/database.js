const Sequelize=require('sequelize');
const sequelize=new Sequelize('node-complete','root','nishibiswasroy',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;