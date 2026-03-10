const express = require("express")

const router = express.Router()

let consultas = []

router.post("/consultas", (req, res) => {

  const consulta = {
    id: consultas.length + 1,
    pacienteId: req.body.pacienteId,
    motivo: req.body.motivo,
    fecha: req.body.fecha
  }

  consultas.push(consulta)

  res.json(consulta)
})

router.get("/consultas", (req, res) => {
  res.json(consultas)
})

router.delete("/consultas/:id", (req, res) => {

  consultas = consultas.filter(c => c.id != req.params.id)

  res.json({mensaje:"Consulta eliminada"})
})

module.exports = router