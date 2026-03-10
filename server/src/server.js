require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const usersRoutes = require("./routes/users.routes");
const pacientesRoutes = require("./routes/pacientes.routes");
const consultasRoutes = require("./routes/consultas.routes");
const medicamentosRoutes = require("./routes/medicamentos.routes");
const signosRoutes = require("./routes/signos.routes");
const condicionesRoutes = require("./routes/condiciones.routes");
const notasRoutes = require("./routes/notas.routes");
const laboratorioRoutes = require("./routes/laboratorio.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "MediTrack API running ✅" });
});

app.use("/api/auth", authRoutes);
app.use("/api", usersRoutes);
app.use("/api", pacientesRoutes);
app.use("/api", consultasRoutes);
app.use("/api", medicamentosRoutes);
app.use("/api", signosRoutes);
app.use("/api", condicionesRoutes);
app.use("/api", notasRoutes);
app.use("/api", laboratorioRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`✅ MediTrack API running on http://localhost:${PORT}`);
});