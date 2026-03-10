const express = require("express")

const router = express.Router()

let laboratorios = []

router.post("/laboratorio", (req, res) => {

  const lab = {
    id: laboratorios.length + 1,
    tipo: req.body.tipo,
    resultado: req.body.resultado
  }

  laboratorios.push(lab)

  res.json(lab)
})

router.get("/laboratorio", (req, res) => {
  res.json(laboratorios)
})

module.exports = router