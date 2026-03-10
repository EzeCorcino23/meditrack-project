const express = require("express")
const usersRoutes = require("./routes/users.routes")

const app = express()

app.use(express.json())

app.use("/api", usersRoutes)

const PORT = 3000

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT)
})