//Crear proyecto API 
//npm init -y

//Crear estructura del proyecto

//Sirve para crear un servidor (API)
const express = require("express");
//El intercambio de recursos de origen cruzado o CORS
//(Cross-origin resource sharing, en sus siglas en inglés)
const cors = require("cors");

// objeto global de la app
var app =express();

app.use(cors());

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use("/v1",require("./routes"));


app.use(function(req, res, next) {
    var err = new Error('Not found');
    err.status = 404;
    next(err);
  })
  
  var server = app.listen(3000, function() {
    console.log('Escuchando en el puerto: ' + 3000);
  })

