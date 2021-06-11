const Usuario = require('../models/Usuario')
function crear(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var usuario = new Usuario(req.body)
  res.status(201).send(usuario)
}
function obtenerMascota(req, res) {
  // Simulando dos usuarios y respondiendolos
  //var usuario1 = new Usuario(1, 'Juan', 'Vega', 'juan@vega.com')
  //var usuario2 = new Usuario(2, 'Monserrat', 'Vega', 'mon@vega.com')
  res.send([usuario1, usuario2])
}
function modificarMascota(req, res) {
  // simulando un usuario previamente existente que el usuario utili
  var usuario1 = new Usuario(req.params.id, 'Juan', 'Vega', 'juan@vega.com')
  var modificaciones = req.body
  usuario1 = { ...usuario1, ...modificaciones }
  res.send(usuario1)
}
function eliminarMascota(req, res) {
  res.status(200).send(`Usuario ${req.params.id} eliminado`);
}
module.exports = {
  crear,
  obtenerMascota,
  modificarMascota,
  eliminarMascota
}