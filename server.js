const express = require('express')
const packages = require('./packages.json')
const app = express()
const http = require('http')
const server = http.createServer(app)
const io = require('socket.io')(server)
app.use(express.static(`${__dirname}/public`))
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('homepage/index', {
        packageArray: packages.extensions
    })
})
io.on('connection', (socket) => {
    socket.on('downloaded-dashboard', () => {
        console.log('download dashboard')
    })
})
// app.get('/:extensions', (req, res) => {
    
// })
server.listen(3000, () => console.log('app is ready!'))