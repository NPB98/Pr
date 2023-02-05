const User=require('../models/user');
const Expense=require('../models/expenses');
const sequelize = require('../util/database');
 exports.getLeaderboard=async(req,res)=>{
    try{
        const users = await User.findAll();
        const expenses = await Expense.findAll();
        const userTotalExpense=[];
        expenses.forEach((expense)=>{
            if(userTotalExpense[expense.userId]){
                userTotalExpense[expense.userId]+=Number(expense.amount);
            }
            else{
                userTotalExpense[expense.userId]=Number(expense.amount);
            }
    })
    let leaderboardDetails=[];
    users.forEach((user)=>{
        leaderboardDetails.push({name:user.name, total_cost:userTotalExpense[user.id]||0});
       })
      leaderboardDetails.sort((a,b)=> b.total_cost-a.total_cost)
       res.status(200).json(leaderboardDetails);
    }
    catch(err){
        res.status(500).json(err);
    }
 }
 