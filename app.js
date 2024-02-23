const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const User = require('./models/expense');


const sequelize = require('./util/database');
const adminRoutes = require('./routes/admin');
const { JSON } = require('sequelize');
const Expense = require('./models/expense');


const port = 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public', 'js')));



app.use(adminRoutes);


app.get('/expense/add-expenses', async (req, res) => {
    try {
        const expenses = await Expense.findAll();
        res.status(200).json({ allExpenses: expenses });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});

app.delete('/expense/delete-expense/:id', async (req, res) => {

    try {
        const expenseId = req.params.id;
        await Expense.destroy({ where: { id: expenseId } });
        res.sendStatus(200);
    } catch (error) {
        console.log(error)
        res.sendStatus(500).json(err);
    }
})




sequelize
    .sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server Runnung On Port ${port}`);
        })
    })
    .catch(err => console.log(err));

