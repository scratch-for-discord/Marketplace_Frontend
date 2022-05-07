const express = require('express')
const packages = require('./packages.json')
const app = express()
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('homepage/index', {
        packageArray: packages.extensions
    })
})
// app.get('/:extensions', (req, res) => {
    
// })
app.listen(3000, () => console.log('app is ready!'))