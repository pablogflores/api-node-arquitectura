const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes/idex');


const app = express();

mongoose.Promise = global.Promise;
mongoose.connect( 
    'mongodb+srv://pablo:pepe03@cluster0.mhmjv.mongodb.net/api-store?retryWrites=true&w=majority',
    {
        useCreateIndex: true,
        useUnifiedTopology: true
    }
 )
 .then(dn => console.log('DB Conectada'))
 .catch(error => console.log(error));

 //Habilitar body Parser
 
 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());
// Habilitar cors
app.use(cors());


app.use('/', routes());


app.listen(process.env.PORT || 5000);