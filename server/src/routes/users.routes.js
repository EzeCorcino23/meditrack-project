const express = require("express")

const router = express.Router()

let usuarios = []

// crear usuario
router.post("/usuarios", (req, res) => {

  const usuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
    email: req.body.email,
    password: req.body.password,
    rol: req.body.rol,
    activo: true
  }

  usuarios.push(usuario)

  res.json(usuario)
})

// listar usuarios
router.get("/usuarios", (req, res) => {
  res.json(usuarios)
})

// activar usuario
router.put("/usuarios/:id/activar", (req, res) => {

  const user = usuarios.find(u => u.id == req.params.id)

  if (!user) {
    return res.status(404).json({mensaje:"Usuario no encontrado"})
  }

  user.activo = true

  res.json(user)
})

// desactivar usuario
router.put("/usuarios/:id/desactivar", (req, res) => {

  const user = usuarios.find(u => u.id == req.params.id)

  if (!user) {
    return res.status(404).json({mensaje:"Usuario no encontrado"})
  }

  user.activo = false

  res.json(user)
})

module.exports = router