const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const cors = require('cors');

const User = require('./models/user');
const Expense = require('./models/expenses');
const Order=require('./models/order');

const userRoute = require('./routes/login');
const expenseRoute = require('./routes/expense');
const orderRoute=require('./routes/purchase');
const premiumRoute=require('./routes/premium');
const forgotPasswordRoute = require('./routes/forgotPassword');

app.use(cors());

app.use(bodyParser.json());


app.use('/',userRoute);
app.use('/',expenseRoute);
app.use('/',orderRoute);
app.use('/',premiumRoute);
app.use('/',forgotPasswordRoute);

User.hasMany(Expense);
Expense.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

sequelize.sync()
.then(result => app.listen(4000))
.catch(err => console.log(err));