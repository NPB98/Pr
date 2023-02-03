const Expense=require('../models/expenses');

exports.getExpenses=(req,res,next)=>{
    Expense.findAll()
    .then(expenses => {
      //console.log(users);
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
    console.log(amount);
    Expense.create({
     amount:amount,
     description:description,
     category:category
  })
  .then((response)=>{
      res.status(201).json(response);
  })
  .catch((err)=> console.log(err));
 };
