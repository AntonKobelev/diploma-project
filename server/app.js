const express = require('express')
const config = require('config')
const chalk = require('chalk')
const mongoose = require('mongoose')
const initDataBase = require('./startUp/initDataBase')
const router = require('./routes')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/', router)


const PORT = config.get('port')

async function start() {
    try {
        mongoose.connection.once('open', () => {
            initDataBase()
        })

        // connect to MongoDB
        await mongoose.connect(config.get('mongoUri'))
        console.log(chalk.green('Server has been connected to MongoDB!'))
        // listen port
        app.listen(PORT, (() => console.log(chalk.green(`Server has been started on port ${PORT} !`))))
    } catch (e) {
        console.log(chalk.red('Server is unavailable'))
        process.exit(1)
    }
}
start()
