const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
require('dotenv').config()
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
const port = process.env.PORT

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))
app.post('/command', async function(req, res) {
    const { exec } = require('child_process');
    const command = req.body.command;
    exec(command, (err, stdout, stderr) => {
        if (err) {
            res.send(err)
        } else {
            res.send(stdout)
        }
    });
})
app.listen(port, () => console.log(`Example app listening on port port!`))