const express = require('express')
const app = express()
const port = 1104
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

// routes / URL /endpoint utama kita method Get
app.use(bodyParser.json())

app.get('/',(req,res) => {
   response(200, "API  V1 wes ready maszeh!" ,"SUCCES BOLO!",res)
})
app.get('/pegawai',(req,res) => {
    const sql = "SELECT * FROM pegawai"
    db.query(sql ,(err,fields) => {
       if(err) throw err
        response(200,fields,"ini message",res)
    })
})
app.get ('/pegawai/:id',(req,res) => {
    const id = req.params.id
    const sql = `SELECT * FROM pegawai WHERE id = ${id}`
    db.query(sql,(err,fields) => {
        response(200,fields,"ini orangnya",res)
    })
})
app.post('/pegawai',(req,res) => {
    const {nama,alamat,umur,gaji,nomerTelpon} = req.body
    const sql = `INSERT INTO pegawai (nama,alamat,umur,gaji,nomerTelpon) VALUES ('${nama}','${alamat}','${umur}','${gaji}','${nomerTelpon}')`
    db.query(sql,(err,fields) => {
        if(err) response(404,"data invalid","keliru COOKKK",res)
        if (fields?.affectedRows){
            const data ={
                isSucces : fields.affectedRows,
                id : fields.insertId
            }
            response(200,data,"data sudah masuk",res)
        }
})
    
})
app.put('/pegawai/:id',(req,res) => {
    const {nama,alamat,gaji } = req.body
   const sql = `UPDATE pegawai SET nama ='${nama}',alamat= '${alamat}',gaji ='${gaji}' WHERE id = '${req.params.id}' `
   db.query(sql,(err,fields) => {
    if(err) response(404,"data invalid","keliru COOKKK",res)
    if (fields?.affectedRows){
        const data ={
            isSucces : fields.affectedRows,
            id : fields.insertId
        }
        response(200,data,"data sudah masuk",res)
    }
})
})
app.delete('/pegawai/:id',(req,res) => {
    const sql = `DELETE FROM pegawai WHERE id = '${req.params.id}'`
    db.query(sql,(err,fields) => {
        if(err) response(404,"data invalid","keliru COOKKK",res)
        if (fields?.affectedRows){
            const data ={
                isDelected : fields.affectedRows
            }
            response(200,data,"data sudah dihapus",res)
        }
})
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})