const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const cors = require('cors');

const User = require('./models/user');

const userRoute = require('./routes/login');
const Expense = require('./models/expenses');

const expenseRoute = require('./routes/expense');


app.use(cors());

app.use(bodyParser.json());

app.use('/',userRoute);
app.use('/',expenseRoute);

User.hasMany(Expense);
Expense.belongsTo(User);

sequelize.sync()
.then(result => app.listen(4000))
.catch(err => console.log(err));