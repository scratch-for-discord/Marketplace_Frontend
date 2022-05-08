const express = require('express')
const packages = require('./packages.json')
const Database = require('easy-json-database')
const db = new Database('./siteSettings.json')
// const mongoose = require('mongoose')
// const Download = require('./modals/download.js')
const app = express()
const http = require('http')
const server = http.createServer(app)
const io = require('socket.io')(server)
const { v4: uuidV4 } = require('uuid')
const bodyParser = require('body-parser')
const urlEncodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static(`${__dirname}/public`))
app.set('view engine', 'ejs')
app.get('/create', (req, res) => {
    res.render('login/create')
})
app.get('/', (req, res) => {
    res.render('homepage/index', {
        packageArray: packages.extensions
    })
})
app.get('/login', (req, res) => {
    res.render('login/login')
})
app.post('/login', urlEncodedParser, (req, res) => {
    const isValidUUID = db.has(req.body.uuid)
    if(isValidUUID) {
        console.log('Valid UUID')
    } else {
        console.log('Invalid UUID')
    }
})
app.post('/create', urlEncodedParser, async (req, res) => {
    const newUuid = uuidV4()
    await db.set(`${newUuid}-username`, req.body.username)
    await db.push(`uuids`, newUuid)
    res.redirect('/')
    io.emit('loggedIn', {
        username: req.body.username,
        uuid: newUuid
    })
})
// app.get('/download/:download', (req, res) => {
    
// })
io.on('connection', (socket) => {
    socket.on('downloaded-dashboard', () => {
        console.log('download dashboard')
    })
    socket.on('createUuid', () => {
        socket.emit('uuidCreated', uuidV4())
    })
})
// app.get('/:extensions', (req, res) => {
    
// })
server.listen(3000, () => console.log('app is ready!'))