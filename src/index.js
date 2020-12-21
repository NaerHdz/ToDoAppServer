const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3000;

//Conexion a la base de datos
mongoose.connect('mongodb://localhost:27017/tasks', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("Conexion correcta"))
    .catch(err => console.log("Error en la conexion " + err));
//Middlewares
app.use(cors());

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/api', require('./routes/router'));

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});