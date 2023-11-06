const { Connectiontime } = require('./connection')
const express = require('express')
const app = express()
const port = 1104
const bodyParser = require('body-parser')


app.use(bodyParser.json())

app.get('/',(req,res) => {
    res.send(Connectiontime)
})
app.get('/hello',(req,res) => {
    console.log({ infoParam : req.query.umur});
    res.send('hello gaesss')
})
// req = dari luar ke dalam (dri postman ke server)
// res = dari dalam ke luar (apa2 dri sistem)
app.post ('/login',(req,res) => {
    console.log({ requestFromOutside : req.body });
    res.send ("Login Berhasil")
})
app.put ('/login',(req,res) => {
    console.log({ requestFromOutside : req.body });
    res.send ("username telah berubah")
})
app.delete ('/login',(req,res) => {
    console.log({ requestFromOutside : req.body });
    res.send ("username tidak ada")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

