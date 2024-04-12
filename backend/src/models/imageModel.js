const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
    image: String
}, { collection: 'Images' })

mongoose.model('Images', ImageSchema)