const mysql = require('mysql');
const Connection = require('mysql/lib/Connection');

const Connectiontime = mysql.createConnection ({
    host : 'localhost',
    user : 'root',
    password : null,
    database : 'jayakusuma'
})

Connectiontime.connect(function(err)  {
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
})

$query = "SELECT * FROM PEGAWAI"

Connectiontime.query($query, function(err, rows,fields) {
    if(err) {
        console.log("erorrrr lagi bang!");
        return;
    }

    console.log("sudah berhasil",rows)
})

Connectiontime.end(function(){
    console.log("Sudah berhenti bang!");
})

module.export = Connection