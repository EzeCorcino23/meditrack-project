const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const DEMO_USER = {
  id: 1,
  email: "admin@meditrack.com",
  password: "123456",
  role: "admin",
};

router.post("/login", (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ message: "Email y password son requeridos" });
  }

  if (email !== DEMO_USER.email || password !== DEMO_USER.password) {
    return res.status(401).json({ message: "Credenciales incorrectas" });
  }

  const token = jwt.sign(
    { sub: DEMO_USER.id, email: DEMO_USER.email, role: DEMO_USER.role },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );

  return res.json({ token });
});

module.exports = router;
