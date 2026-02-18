import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/fondo_sistema_clinico.png";
import api from "../api/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  // AUTENTICACIÓN REAL
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      setShowError(true);
    }
  };

  

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-35px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.88); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        .login-input:focus {
          border-color: #1E40AF !important;
          background: rgba(255,255,255,0.85) !important;
          box-shadow: 0 0 0 3px rgba(30,64,175,0.1) !important;
        }
        .login-btn:hover { opacity: 0.9; transform: translateY(-1px); }
        .login-btn:active { transform: translateY(0); }
        .modal-btn:hover { opacity: 0.9; }
      `}</style>

      <div style={s.wrapper}>
        <div style={s.bg} />
        <div style={s.overlay} />

        {showError && (
          <div style={s.modalBackdrop}>
            <div style={s.modal}>
              <div style={s.modalIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#DC2626" strokeWidth="2"/>
                  <line x1="12" y1="8" x2="12" y2="12" stroke="#DC2626" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="16" r="1" fill="#DC2626"/>
                </svg>
              </div>
              <h3 style={s.modalTitle}>Credenciales incorrectas</h3>
              <p style={s.modalMsg}>Intente nuevamente con su usuario y contraseña correctos.</p>
              <button className="modal-btn" style={s.modalBtn} onClick={() => setShowError(false)}>
                Intentar nuevamente
              </button>
            </div>
          </div>
        )}

        <div style={s.card}>
          <h2 style={s.title}>Bienvenido</h2>
          <p style={s.subtitle}>Ingresa tus credenciales para continuar</p>

          <form onSubmit={handleSubmit}>
            <div style={s.field}>
              <label style={s.label}>Usuario</label>
              <div style={s.inputWrap}>
                <svg style={s.inputIcon} width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#9CA3AF" strokeWidth="1.8"/>
                  <polyline points="22,6 12,13 2,6" stroke="#9CA3AF" strokeWidth="1.8"/>
                </svg>
                <input className="login-input" type="email" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} style={s.input} />
              </div>
            </div>

            <div style={s.field}>
              <label style={s.label}>Contraseña</label>
              <div style={s.inputWrap}>
                <svg style={s.inputIcon} width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="#9CA3AF" strokeWidth="1.8"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#9CA3AF" strokeWidth="1.8"/>
                </svg>
                <input className="login-input" type="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} style={s.input} />
              </div>
            </div>

            <p style={s.forgot}>¿Olvidaste tu contraseña?</p>

            <button className="login-btn" type="submit" style={s.btn}>
              Ingresar al sistema
            </button>

            <div style={s.dividerRow}>
              <div style={s.dividerLine} />
              <span style={s.dividerText}>Perfiles de acceso</span>
              <div style={s.dividerLine} />
            </div>

            <div style={s.roles}>
              <span style={{ ...s.badge, background: "rgba(239,246,255,0.7)", color: "#1E40AF", borderColor: "#BFDBFE" }}>Administrador</span>
              <span style={{ ...s.badge, background: "rgba(238,242,255,0.7)", color: "#3730A3", borderColor: "#C7D2FE" }}>Doctor</span>
              <span style={{ ...s.badge, background: "rgba(240,249,255,0.7)", color: "#0369A1", borderColor: "#BAE6FD" }}>Enfermería</span>
            </div>
          </form>

          <p style={s.footer}>© 2026 MediTrack · Todos los derechos reservados</p>
        </div>
      </div>
    </>
  );
}

const s = {
  wrapper: { position: "relative", width: "100vw", height: "100vh", display: "flex", alignItems: "center", fontFamily: "'Open Sans', 'Segoe UI', sans-serif", overflow: "hidden" },
  bg: { position: "absolute", inset: 0, backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 },
  overlay: { position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(8,15,40,0.72) 0%, rgba(20,45,100,0.35) 100%)", zIndex: 1 },
  modalBackdrop: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.35)", backdropFilter: "blur(6px)", zIndex: 100 },
  modal: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "rgba(255,255,255,0.82)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.6)", borderRadius: "18px", padding: "42px 44px", width: "400px", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.2)", animation: "popIn 0.3s cubic-bezier(.22,.68,0,1.2) forwards" },
  modalIcon: { width: "60px", height: "60px", borderRadius: "50%", background: "rgba(254,242,242,0.8)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", border: "1.5px solid rgba(252,165,165,0.5)" },
  modalTitle: { fontSize: "22px", fontWeight: "700", background: "linear-gradient(135deg, #1E3A8A, #1D4ED8, #2563EB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", margin: "0 0 10px", fontFamily: "'Open Sans', sans-serif" },
  modalMsg: { fontSize: "15px", color: "#1e3a8a", lineHeight: 1.7, margin: "0 0 26px", fontFamily: "'Open Sans', sans-serif", fontWeight: "500" },
  modalBtn: { width: "100%", padding: "13px", background: "linear-gradient(135deg, #1E3A8A, #2563EB)", color: "#fff", border: "none", borderRadius: "9px", fontSize: "15px", fontWeight: "600", cursor: "pointer", fontFamily: "'Open Sans', sans-serif", boxShadow: "0 4px 14px rgba(30,64,175,0.4)", transition: "opacity 0.2s" },
  card: { position: "relative", zIndex: 2, marginLeft: "7vw", background: "rgba(255,255,255,0.82)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.6)", borderRadius: "20px", padding: "48px 52px", width: "500px", boxShadow: "0 25px 70px rgba(0,0,0,0.2)", animation: "slideIn 0.5s ease forwards" },
  title: { fontSize: "36px", fontWeight: "700", margin: "0 0 8px", background: "linear-gradient(135deg, #1E3A8A, #1D4ED8, #2563EB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", letterSpacing: "-0.5px" },
  subtitle: { fontSize: "16px", color: "#1e3a8a", margin: "0 0 28px", fontWeight: "500" },
  field: { marginBottom: "16px" },
  label: { display: "block", fontSize: "12px", fontWeight: "600", color: "#1e3a8a", marginBottom: "6px" },
  inputWrap: { position: "relative", display: "flex", alignItems: "center" },
  inputIcon: { position: "absolute", left: "12px", pointerEvents: "none" },
  input: { width: "100%", padding: "11px 14px 11px 38px", border: "1.5px solid rgba(200,210,255,0.6)", borderRadius: "9px", fontSize: "14px", color: "#111827", background: "rgba(255,255,255,0.7)", outline: "none", transition: "border-color 0.2s, box-shadow 0.2s, background 0.2s", boxSizing: "border-box", fontFamily: "'Open Sans', sans-serif", fontWeight: "400" },
  forgot: { textAlign: "right", fontSize: "12px", color: "#1D4ED8", cursor: "pointer", margin: "0 0 10px", fontWeight: "600" },
  btn: { width: "100%", padding: "12px", marginTop: "2px", background: "linear-gradient(135deg, #1E3A8A, #2563EB)", color: "#fff", border: "none", borderRadius: "9px", fontSize: "14px", fontWeight: "600", cursor: "pointer", fontFamily: "'Open Sans', sans-serif", transition: "opacity 0.2s, transform 0.15s", boxShadow: "0 4px 14px rgba(30,64,175,0.4)" },
  dividerRow: { display: "flex", alignItems: "center", gap: "10px", margin: "18px 0 13px" },
  dividerLine: { flex: 1, height: "1px", background: "rgba(30,58,138,0.15)" },
  dividerText: { fontSize: "11px", color: "rgba(30,58,138,0.7)", fontWeight: "500", whiteSpace: "nowrap" },
  roles: { display: "flex", gap: "7px", justifyContent: "center" },
  badge: { padding: "4px 11px", borderRadius: "20px", fontSize: "11px", fontWeight: "500", border: "1px solid" },
  footer: { marginTop: "24px", fontSize: "11px", color: "rgba(30,58,138,0.6)", textAlign: "center", fontWeight: "400" },
};