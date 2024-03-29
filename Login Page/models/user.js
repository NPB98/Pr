const Sequelize=require('sequelize');
const sequelize=require('../util/database');
const User=sequelize.define('users',{
    id: {
        type:  Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name:Sequelize.STRING,
      email:{
        type: Sequelize.STRING,
        unique:true,
        allowNull:false
      },
     password:{
      type: Sequelize.STRING,
      allowNull:false
     }
});

module.exports = User;
