const express = require('express')
const routes = express.Router()
const {setAnswer, listRows}= require('../src/controller/google-sheets')


routes.get('/', (req, res)=>{
    res.render('home', {})
})


routes.post('/add', (req, res)=>{
    const questaoUm = req.body.questaoUm
    setAnswer(questaoUm)
    res.render('add')
})


routes.post('/charts', async(req, res)=>{
    const total = await listRows()
    console.log(total)
    res.render('charts', {
        total:total
    })
})

module.exports = routes;