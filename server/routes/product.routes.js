const express = require('express')
const Product = require('../models/Product')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).send({list: products})
    } catch (e) {
        res.status(500).json({message: 'Server error occurred'})
    }
})

module.exports = router