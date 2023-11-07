const express = require('express')
const app = express()
const port = 1104
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

// routes / URL /endpoint utama kita method Get
app.use(bodyParser.json())

app.get('/',(req,res) => {
    const dataPegawai = "SELECT * FROM PEGAWAI"
    db.query(dataPegawai,(err,result) => {
        // hasil dari data mysql
        response(200,result,"datanya disini",res)
    });
})
app.get('/findpegawai',(req,res) => {
    const pegawai = `SELECT nama FROM pegawai WHERE umur = ${req.query.umur} `
    db.query(pegawai,(err,result) => {
        response(200,result,"ini orangnya",res)
    })
    console.log('find nip : ', req.query.umur)

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
