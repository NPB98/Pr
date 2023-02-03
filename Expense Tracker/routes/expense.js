const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/Expenses',adminController.getExpenses);

router.get('/deleteExpense/:expenseId',adminController.deleteExpense);

router.post('/addExpenses',adminController.addExpense);

module.exports = router;    
