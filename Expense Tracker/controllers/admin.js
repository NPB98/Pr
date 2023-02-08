const Expense=require('../models/expenses');
const User=require('../models/user');

exports.getExpenses=(req,res,next)=>{
    //Expense.findAll({where:{userId:req.user.id}})
    req.user.getExpenses().then(expenses => {
      console.log(expenses);
       res.status(200).json(expenses);
    })
    .catch(err => console.log(err));
 };
 exports.deleteExpense = (req,res,next)=>{
   console.log(req);
    const id = req.params.expenseId;
    //console.log(id)
    Expense.findByPk(id)
    .then(expense => {
      //console.log(user);
      return expense.destroy();
    })
    .then(response => {
        res.status(202).json('Successfully Deleted');
    })
    .catch((err)=>{
        console.log(err)
    })
 };

 exports.addExpense = (req,res,next)=>{
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category;
    console.log(req.user.id);
    Expense.create({
     amount:amount,
     description:description,
     category:category,
     userId:req.user.id
  })
  .then((response)=>{
    const totalExpense=Number(req.user.totalExpenses)+Number(amount);
    console.log(totalExpense);
    User.update({
      totalExpenses: totalExpense,
    },{where:{id:req.user.id}})
    .then(()=>{
      res.status(201).json({expense:response})
    })
    .catch((err)=>{
      return res.status(500).json({success:false,error:err})
    })
  })
  .catch((err)=> {
    return res.status(500).json({success:false,error:err})
  });
 };
