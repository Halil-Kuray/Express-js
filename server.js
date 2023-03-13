const express = require('express')
const app =express()

//app.use(logger) // logger fonksiyonu - herkes icin kullanilsin istersek fonk en ustte olmalidir.

app.set('view engine', 'ejs') //cok onemli degil, bir sonraki kod daha makul bir alternatif

app.use(express.static('public')) // public teki index.html su adreste : http://localhost:3000/
//app.use(express.static('public')) // public teki bir klasorde bir dosya bulunsa => su adreste : http://localhost:3000/klasor/dosya/html


app.get('/', logger, (req, res) => { // Sadece belirli bir yerde kullanilsin istersek bu sekilde kullaniriz
    console.log('here')                     // ilk parametre okunur (adres), daha sonra logger fonksiyonu okunur
    //res.status(404).send('some message')          // logger fonsiyonunda next() vasitasiyla  req res li callbackin okunmasina gecilir.
    //res.status(200).json({ message: 'hahaha' })
    //res.download("server.js") // the file which path is given can be download.
    //res.render('index', { text : 'This text rendered in views/index.ejs'})
})


const userRouter = require('./routes/users')

app.use('/', userRouter) 
// user rootlarinda ortak olan kisimlari kesip burdaki fonksiyona ekleyebiliriz
//app.use('/users', userRouter) gibi


function logger( req, res, next) {
    console.log(req.originalUrl) // kullanicinin linkini goruruz - 
    next()
}




app.listen(3000)


//console.log(app)