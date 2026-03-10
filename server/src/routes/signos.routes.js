const express = require("express")

const router = express.Router()

let signos = []

router.post("/signos", (req, res) => {

  const signo = {
    id: signos.length + 1,
    presion: req.body.presion,
    temperatura: req.body.temperatura
  }

  signos.push(signo)

  res.json(signo)
})

router.get("/signos", (req, res) => {
  res.json(signos)
})

module.exports = router