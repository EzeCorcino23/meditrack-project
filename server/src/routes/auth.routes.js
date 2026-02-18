const express = require("express");

const router = express.Router();

// LOGIN REAL (backend)
router.post("/login", (req, res) => {

    const { email, password } = req.body;

    if(email === "admin@meditrack.com" && password === "123456"){
        return res.json({
            token: "real-backend-token"
        });
    }

    res.status(401).json({
        message: "Credenciales incorrectas"
    });

});

module.exports = router;
