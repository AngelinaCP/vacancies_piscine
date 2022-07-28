const express = require('express');
const {sequelize} = require('./models')
const {DataTypes} = require("sequelize");
const Vacancy = require('./models/Vacancy')(sequelize, DataTypes);
const app = express();

app.use(express.json())

app.post('/vacancies', async(req, res) => {
    const {title, description, english_lvl, grade, tags} = req.body
    try {
        const vacancy = await Vacancy.create({title, description, english_lvl, grade, tags})
        return res.json(vacancy)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
})

app.put('/vacancies/:id', async (req, res) => {
    const id = req.params.id
    const { items_changed } = req.body
    try {
        const order = await Vacancy.findOne({
            where: {id} })
        order.items = items_changed
        await order.save()

        return res.json(order)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Something went wrong' })
    }
})
app.get('/vacancies', async(req, res) => {
    try {
        const vacancies = await Vacancy.findAll({})
        return res.json(vacancies)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
})

app.get('/vacancies/:id', async(req, res) => {
    const id = req.params.id
    try {
        const vacancies = await Vacancy.findOne({
            where: {id}
        })
        return res.json(vacancies)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
})

app.listen({port:3000}, async () => {
    await sequelize.authenticate();
});


//npx sequelize db:create
//npx sequelize model:generate --name vacancy --attributes title:string,description:string,english_lvl:string,grade:string,tags:string,user_id:integer