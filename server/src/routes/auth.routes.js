const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const pool = require("../config/db");
const authMiddleware = require("../middlewares/auth.middlewares");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { correo, password } = req.body;

    if (!correo || !password) {
      return res.status(400).json({
        ok: false,
        message: "Correo y contraseña son obligatorios",
      });
    }

    const [rows] = await pool.query(
      `SELECT id, nombre, correo, password_hash, rol, activo, primer_acceso
       FROM usuarios
       WHERE correo = ?
       LIMIT 1`,
      [correo]
    );

    if (rows.length === 0) {
      return res.status(401).json({
        ok: false,
        message: "Credenciales incorrectas",
      });
    }

    const usuario = rows[0];

    if (!usuario.activo) {
      return res.status(403).json({
        ok: false,
        message: "La cuenta está inactiva",
      });
    }

    const passwordValida = await bcrypt.compare(password, usuario.password_hash);

    if (!passwordValida) {
      return res.status(401).json({
        ok: false,
        message: "Credenciales incorrectas",
      });
    }

    const token = jwt.sign(
      {
        id: usuario.id,
        nombre: usuario.nombre,
        correo: usuario.correo,
        rol: usuario.rol,
      },
      process.env.JWT_SECRET,
      { expiresIn: "8h" }
    );

    return res.status(200).json({
      ok: true,
      message: "Login exitoso",
      token,
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        correo: usuario.correo,
        rol: usuario.rol,
        primer_acceso: usuario.primer_acceso,
      },
    });
  } catch (error) {
    console.error("Error en /auth/login:", error);
    return res.status(500).json({
      ok: false,
      message: "Error interno del servidor",
      error: error.message,
    });
  }
});

router.post("/cambiar-password", authMiddleware, async (req, res) => {
  try {
    const { password_actual, password_nueva } = req.body;
    const userId = req.user.id;

    if (!password_actual || !password_nueva) {
      return res.status(400).json({
        ok: false,
        message: "La contraseña actual y la nueva son obligatorias",
      });
    }

    const [rows] = await pool.query(
      `SELECT id, password_hash
       FROM usuarios
       WHERE id = ?
       LIMIT 1`,
      [userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        ok: false,
        message: "Usuario no encontrado",
      });
    }

    const usuario = rows[0];

    const passwordValida = await bcrypt.compare(
      password_actual,
      usuario.password_hash
    );

    if (!passwordValida) {
      return res.status(401).json({
        ok: false,
        message: "La contraseña actual es incorrecta",
      });
    }

    const nuevoHash = await bcrypt.hash(password_nueva, 10);

    await pool.query(
      `UPDATE usuarios
       SET password_hash = ?, primer_acceso = false
       WHERE id = ?`,
      [nuevoHash, userId]
    );

    return res.status(200).json({
      ok: true,
      message: "Contraseña actualizada correctamente",
    });
  } catch (error) {
    console.error("Error en /auth/cambiar-password:", error);
    return res.status(500).json({
      ok: false,
      message: "Error interno del servidor",
      error: error.message,
    });
  }
});

router.post("/logout", authMiddleware, async (req, res) => {
  try {
    return res.status(200).json({
      ok: true,
      message: "Logout exitoso",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: "Error interno del servidor",
      error: error.message,
    });
  }
});

module.exports = router;