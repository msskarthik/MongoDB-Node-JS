const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv/config')

app.use(cors());
app.use(bodyParser.json());
const postsRoute = require('./routes/posts');
const cartRoute = require('./routes/cart')

app.use('/posts', postsRoute)
app.use('/cart',cartRoute)

app.get('/',(req,res) => {
    res.send("running")
})

mongoose.connect(process.env.URI, () => console.log('connected to DB'))

app.listen(3000);