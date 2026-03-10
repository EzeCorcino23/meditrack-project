const express = require("express")

const router = express.Router()

let pacientes = []

// crear paciente
router.post("/pacientes", (req, res) => {

  const paciente = {
    id: pacientes.length + 1,
    nombre: req.body.nombre,
    edad: req.body.edad,
    genero: req.body.genero
  }

  pacientes.push(paciente)

  res.json(paciente)
})

// listar pacientes
router.get("/pacientes", (req, res) => {
  res.json(pacientes)
})

// actualizar paciente
router.put("/pacientes/:id", (req, res) => {

  const paciente = pacientes.find(p => p.id == req.params.id)

  if (!paciente) {
    return res.status(404).json({mensaje:"Paciente no encontrado"})
  }

  paciente.nombre = req.body.nombre
  paciente.edad = req.body.edad
  paciente.genero = req.body.genero

  res.json(paciente)
})

// eliminar paciente
router.delete("/pacientes/:id", (req, res) => {

  pacientes = pacientes.filter(p => p.id != req.params.id)

  res.json({mensaje:"Paciente eliminado"})
})

module.exports = router