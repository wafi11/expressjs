
const express = require('express')
const app = express()
const port = 1104

app.get('/',(req,res) => {
    res.send('hello world')
})
app.post ('/login',(req,res) => {
    if (req.name === "wafi") {
        res.send("approved")
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})