const mysql = require('mysql');


const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "jayakusuma",
})





// db.connect(function(err)  {
//     if(err){
//         console.log(err.code);
//         console.log(err.fatal);
//     }
// })

// $query = "SELECT * FROM pegawai"

// db.query($query, function(err, rows,fields) {
//     if(err) {
//         console.log("erorrrr lagi bang!");
//         return;
//     }

//     console.log("sudah berhasil",rows)
// })

// db.end(function(){
//     console.log("Sudah berhenti bang!");
// })
module.exports = db

