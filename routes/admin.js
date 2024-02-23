
const express = require('express');
const adminController = require('../controllers/tracker');

const router = express.Router();

router.get('/',adminController.getExpensePage)

router.post('/AddExpense', adminController.postAddExpense);
router.get('/addSuccess', adminController.getAddSuccess);

router.get('/expenses', adminController.getExpenses);
   


module.exports = router;