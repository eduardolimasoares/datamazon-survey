const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './src/views'))
app.use(express.static(path.join(__dirname, './src/public')))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


const port = process.env.PORT || 8080


app.use('/', require('./src/routes'))


app.listen(port, err => {
    if(err){
        console.log('Não foi possivel iniciar o servidor')
    }else{
        console.log('Servidor iniciado')
    }
})