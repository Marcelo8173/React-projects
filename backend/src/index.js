const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes');


mongoose.connect('mongodb://marcelo:Marcelo123@cluster0-shard-00-00-euuor.mongodb.net:27017,cluster0-shard-00-01-euuor.mongodb.net:27017,cluster0-shard-00-02-euuor.mongodb.net:27017/week10?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})


app.use(cors())
app.use(express.json());
app.use(routes)




app.listen(3333)