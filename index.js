const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/ls', async function(req, res) {
    const { exec } = require('child_process');
    exec('ls', (err, stdout, stderr) => {
        if (err) {
            res.send(err)
        } else {
            res.send(stdout)
        }
    });
})
app.get('/pm2-monit', async function(req, res) {
    const { exec } = require('child_process');
    exec('pm2 monit', (err, stdout, stderr) => {
        if (err) {
            res.send(err)
        } else {
            res.send(stdout)
        }
    });
})
app.get('/pm2', async function(req, res) {
    const { exec } = require('child_process');
    exec('pm2 list', (err, stdout, stderr) => {
        if (err) {
            res.send(err)
        } else {
            res.send(stdout)
        }
    });
})
app.listen(port, () => console.log(`Example app listening on port port!`))