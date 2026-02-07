import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const fakeUser = {
  email: "admin@meditrack.com",
  password: "123456",
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (email === fakeUser.email && password === fakeUser.password) {
    localStorage.setItem("token", "fake-token");
    navigate("/dashboard");
  } else {
    alert("Credenciales incorrectas");
  }
};
   // ESTO QUE ESTA ACA ES EL LOGIN CON AUTENCITACION REAL, MIENTRASTANTO USAMOS EL FAKEUSER !!!

  /*const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    localStorage.setItem("token", response.data.token);
    navigate("/dashboard");

  } catch (error) {
    alert("Credenciales incorrectas");
  }
};*/


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ width: 300 }}>
        <Typography variant="h5" mb={2}>
          MediTrack Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{ mt: 2 }}
          >
            Iniciar sesión
          </Button>
        </form>
      </Box>
    </Box>
  );
}
