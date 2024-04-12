
const mongoose = require('mongoose')
require('dotenv').config();

const app = require('./app')
const port = 3000


mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(con => {
    console.log('db connection successful')
}).catch(err => console.error('db connection failed', err));


app.listen(port, () => {
    console.log(`Running on port ${port}`)
})
