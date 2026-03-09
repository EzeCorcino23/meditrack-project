import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FirstLoginModal({ role, onLater, onDone }) {
  const [newPassword, setNewPassword]     = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSuccess, setShowSuccess]     = useState(false);
  const [error, setError]                 = useState("");
  const navigate = useNavigate();

  const isAdmin = role === "admin";

  const handleChange = () => {
    if (!newPassword || !confirmPassword) {
      setError("Por favor completa todos los campos.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    if (newPassword.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    setError("");
    // Aquí se conectará al backend para cambiar la contraseña
    // y enviar notificación al correo registrado
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onDone();
    }, 2000);
  };

  const handleGoToProfile = () => {
    onDone();
    // El usuario irá a Mi Perfil desde su panel
  };

  return (
    <>
      <style>{`
        @keyframes popIn { from{opacity:0;transform:translate(-50%,-50%) scale(0.88);} to{opacity:1;transform:translate(-50%,-50%) scale(1);} }
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>

      <div style={s.backdrop}>
        <div style={s.modal}>
          {/* Icono */}
          <div style={s.iconWrap}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>

          <h3 style={s.title}>
            {isAdmin ? "Cambia tus credenciales" : "Cambia tu contraseña"}
          </h3>
          <p style={s.subtitle}>
            {isAdmin
              ? "Por seguridad, actualiza tu usuario y contraseña de acceso al sistema."
              : "Por seguridad, te recomendamos cambiar tu contraseña antes de continuar."}
          </p>

          {showSuccess ? (
            <div style={s.successBox}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span style={{ fontSize:14, color:"#059669", fontWeight:600 }}>
                ¡Contraseña actualizada! Se enviará confirmación a tu correo.
              </span>
            </div>
          ) : (
            <>
              {isAdmin && (
                <div style={s.field}>
                  <label style={s.label}>Nuevo usuario (correo)</label>
                  <input type="email" placeholder="nuevo@correo.com" style={s.input} />
                </div>
              )}

              <div style={s.field}>
                <label style={s.label}>Nueva contraseña</label>
                <input
                  type="password"
                  placeholder="Mínimo 6 caracteres"
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                  style={s.input}
                />
              </div>

              <div style={s.field}>
                <label style={s.label}>Confirmar contraseña</label>
                <input
                  type="password"
                  placeholder="Repite la contraseña"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  style={s.input}
                />
              </div>

              {error && <p style={s.error}>{error}</p>}

              <p style={s.note}>
                📧 Las nuevas credenciales se enviarán a tu correo registrado.
              </p>

              <div style={s.btnRow}>
                <button onClick={onLater} style={s.laterBtn}>Más tarde</button>
                <button onClick={handleChange} style={s.changeBtn}>Cambiar</button>
              </div>

              {!isAdmin && (
                <button onClick={handleGoToProfile} style={s.profileBtn}>
                  Ir a Mi Perfil
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

const s = {
  backdrop:   { position:"fixed", inset:0, zIndex:400, background:"rgba(0,0,0,0.4)", backdropFilter:"blur(6px)" },
  modal:      { position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", background:"rgba(255,255,255,0.95)", backdropFilter:"blur(24px)", border:"1px solid rgba(255,255,255,0.6)", borderRadius:20, padding:"40px 44px", width:420, textAlign:"center", boxShadow:"0 20px 60px rgba(0,0,0,0.2)", animation:"popIn 0.3s cubic-bezier(.22,.68,0,1.2) forwards", fontFamily:"'Plus Jakarta Sans',sans-serif" },
  iconWrap:   { width:60, height:60, borderRadius:"50%", background:"rgba(239,246,255,0.9)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px", border:"1.5px solid rgba(191,219,254,0.6)" },
  title:      { fontSize:20, fontWeight:800, background:"linear-gradient(135deg,#1E3A8A,#2563EB)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", marginBottom:8 },
  subtitle:   { fontSize:13, color:"#6B7280", lineHeight:1.6, marginBottom:20, fontWeight:400 },
  field:      { textAlign:"left", marginBottom:14 },
  label:      { display:"block", fontSize:11, fontWeight:700, color:"#1e3a8a", marginBottom:5 },
  input:      { width:"100%", padding:"10px 13px", border:"1.5px solid rgba(200,210,255,0.7)", borderRadius:9, fontSize:13, color:"#111827", background:"rgba(255,255,255,0.8)", outline:"none", boxSizing:"border-box", fontFamily:"'Plus Jakarta Sans',sans-serif" },
  error:      { fontSize:12, color:"#DC2626", marginBottom:10, textAlign:"left" },
  note:       { fontSize:11, color:"#6B7280", marginBottom:18, textAlign:"left" },
  btnRow:     { display:"flex", gap:10, marginBottom:10 },
  laterBtn:   { flex:1, padding:"11px", borderRadius:9, border:"1.5px solid rgba(30,58,138,0.2)", background:"rgba(239,246,255,0.7)", color:"#1E3A8A", fontWeight:600, fontSize:13, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif" },
  changeBtn:  { flex:1, padding:"11px", borderRadius:9, border:"none", background:"linear-gradient(135deg,#1E3A8A,#2563EB)", color:"#fff", fontWeight:700, fontSize:13, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif", boxShadow:"0 4px 14px rgba(37,99,235,0.35)" },
  profileBtn: { width:"100%", padding:"9px", borderRadius:9, border:"1.5px solid rgba(37,99,235,0.3)", background:"transparent", color:"#2563EB", fontWeight:600, fontSize:12, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif" },
  successBox: { display:"flex", alignItems:"center", gap:10, padding:"14px 16px", background:"rgba(236,253,245,0.9)", border:"1.5px solid rgba(167,243,208,0.6)", borderRadius:10, justifyContent:"center", marginTop:10 },
};