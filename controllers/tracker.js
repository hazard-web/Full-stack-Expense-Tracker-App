const Expense = require('../models/expense');
const path = require('path');
const express = require('express');
const { JSON } = require('sequelize');




exports.getExpensePage = (req,res,next) => {
    res.sendFile(path.join(__dirname,'..','public', 'views','ExpenseTrackerApp.html'));
     
}

exports.getExpenses = (req, res, next) => {
   
   


   
}


exports.postAddExpense = (req,res,next) => {
     
    let expense = {
        description: req.body.description,
        amount: req.body.amount,
        category:req.body.category
    }

    Expense.create({
        description: expense.description,
        amount: expense.amount,
        category: expense.category

    })
    .then( result => {
        console.log('Created..',result);
       res.redirect('/addSuccess');
    })
    .catch( err => {
        res.send("You already sumbit this expense.");
       // res.sendStatus(500).json(err)
        console.log(err);
    });

   
}

exports.getAddSuccess = ( req, res, next) => {
  res.send('You Successfully Registered')
  
}

exports.postDeleteUer = () => {

};

