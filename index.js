// CREATED BY HYPERZ, JORDAN, FAXES, AND JEKELTOR (PHP)
// CREATED BY HYPERZ, JORDAN, FAXES, AND JEKELTOR (PHP)
// CREATED BY HYPERZ, JORDAN, FAXES, AND JEKELTOR (PHP)

// Imports
const express = require('express')
const app = express()
const chalk = require('chalk')
const fetch = require('node-fetch')
const nodelogger = require('hyperz-nodelogger')
const logger = new nodelogger()
const config = require('./config.js')
const backend = require('./backend.js')
const port = config.main.port

app.locals.jsonValue = config

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/images'))

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('index.ejs', { backend: backend, jsonValue: config, fetch: fetch })
})

// Log the application being started
logger.hypelogger(`StatusPage`, '500', 'blue', `\n${chalk.blue('Created By:')}\n\nHyperz#0001\nJordan#2130\nFAXES#8655\nJekeltor#0001\n`, 'disabled', 'blue', 'single', true)

// Port Listening
setTimeout(async() => {
    app.listen(port, () => console.info(`App listening on port ${port}`))
}, 1000);

// CREATED BY HYPERZ, JORDAN, FAXES, AND JEKELTOR (PHP)
// CREATED BY HYPERZ, JORDAN, FAXES, AND JEKELTOR (PHP)
// CREATED BY HYPERZ, JORDAN, FAXES, AND JEKELTOR (PHP)
// Im horny lol - Jordan.#2319
// buy me redbull lol - https://cash.app/$j2139 | https://paypal.me/jordan2139