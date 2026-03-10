const express = require("express")

const router = express.Router()

let condiciones = []

router.post("/condiciones", (req, res) => {

  const condicion = {
    id: condiciones.length + 1,
    nombre: req.body.nombre
  }

  condiciones.push(condicion)

  res.json(condicion)
})

router.get("/condiciones", (req, res) => {
  res.json(condiciones)
})

module.exports = router