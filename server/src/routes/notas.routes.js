const express = require("express")

const router = express.Router()

let notas = []

router.post("/notas", (req, res) => {

  const nota = {
    id: notas.length + 1,
    descripcion: req.body.descripcion
  }

  notas.push(nota)

  res.json(nota)
})

router.get("/notas", (req, res) => {
  res.json(notas)
})

module.exports = router