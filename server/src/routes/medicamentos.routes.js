const express = require("express")

const router = express.Router()

let medicamentos = []

router.post("/medicamentos", (req, res) => {

  const medicamento = {
    id: medicamentos.length + 1,
    nombre: req.body.nombre,
    dosis: req.body.dosis
  }

  medicamentos.push(medicamento)

  res.json(medicamento)
})

router.get("/medicamentos", (req, res) => {
  res.json(medicamentos)
})

module.exports = router