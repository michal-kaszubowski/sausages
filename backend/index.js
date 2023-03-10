const express = require('express');
const app = express();
const cors = require('cors');

const sausages = require('./routes/sausages');
const manufacturers = require('./routes/manufacturers');
const spices = require('./routes/spices')

app.use(cors());
app.use(express.json());

app.use('/sausages', sausages);
app.use('/manufacturers', manufacturers);
app.use('/spices', spices);

require('dotenv').config();
const dbConnData = {
    host: process.env.MONGO_HOST || '127.0.0.1',
    port: process.env.MONGO_PORT || 27017,
    database: process.env.MONGO_DATABASE || 'frontend'
};

const mongoose = require('mongoose');

mongoose.connect(`mongodb://${dbConnData.host}:${dbConnData.port}/${dbConnData.database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(response => {
    console.log(`Connected to MongoDB. Database name: "${response.connections[0].name}"`)
    const port = process.env.PORT || 5000
    app.listen(port, () => {
        console.log(`API server listening at http://localhost:${port}`);
    });
}).catch(error => console.error('Error connecting to MongoDB', error));
