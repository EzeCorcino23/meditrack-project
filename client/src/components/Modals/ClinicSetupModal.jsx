import { useState } from "react";

export default function ClinicSetupModal({ onDone }) {
  const [form, setForm] = useState({
    name: "", address: "", phone: "", email: "", specialty: ""
  });
  const [error, setError] = useState("");

  const handleChange = (field, value) => setForm(f => ({ ...f, [field]: value }));

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.email) {
      setError("Por favor completa los campos obligatorios (*).");
      return;
    }
    setError("");
    // Aquí se conectará al backend para guardar los datos de la clínica
    onDone();
  };

  return (
    <>
      <style>{`
        @keyframes popIn { from{opacity:0;transform:translate(-50%,-50%) scale(0.88);} to{opacity:1;transform:translate(-50%,-50%) scale(1);} }
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .clinic-input:focus { border-color:#2563EB !important; box-shadow:0 0 0 3px rgba(37,99,235,0.1) !important; outline:none; }
      `}</style>

      <div style={s.backdrop}>
        <div style={s.modal}>
          <div style={s.iconWrap}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>

          <h3 style={s.title}>Bienvenido a MediTrack</h3>
          <p style={s.subtitle}>Completa los datos de tu clínica para comenzar a usar el sistema.</p>

          <div style={s.grid}>
            <div style={s.field}>
              <label style={s.label}>Nombre de la clínica *</label>
              <input className="clinic-input" style={s.input} placeholder="Ej. Clínica San José" value={form.name} onChange={e => handleChange("name", e.target.value)} />
            </div>
            <div style={s.field}>
              <label style={s.label}>Especialidad</label>
              <input className="clinic-input" style={s.input} placeholder="Ej. Medicina General" value={form.specialty} onChange={e => handleChange("specialty", e.target.value)} />
            </div>
            <div style={{ ...s.field, gridColumn:"1/-1" }}>
              <label style={s.label}>Dirección</label>
              <input className="clinic-input" style={s.input} placeholder="Calle, ciudad" value={form.address} onChange={e => handleChange("address", e.target.value)} />
            </div>
            <div style={s.field}>
              <label style={s.label}>Teléfono *</label>
              <input className="clinic-input" style={s.input} placeholder="809-000-0000" value={form.phone} onChange={e => handleChange("phone", e.target.value)} />
            </div>
            <div style={s.field}>
              <label style={s.label}>Correo electrónico *</label>
              <input className="clinic-input" style={s.input} type="email" placeholder="clinica@correo.com" value={form.email} onChange={e => handleChange("email", e.target.value)} />
            </div>
          </div>

          {error && <p style={s.error}>{error}</p>}

          <button onClick={handleSubmit} style={s.btn}>
            Guardar y continuar
          </button>

          <p style={s.note}>Podrás editar estos datos en cualquier momento desde Configuración.</p>
        </div>
      </div>
    </>
  );
}

const s = {
  backdrop: { position:"fixed", inset:0, zIndex:400, background:"rgba(0,0,0,0.4)", backdropFilter:"blur(6px)" },
  modal:    { position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", background:"rgba(255,255,255,0.95)", backdropFilter:"blur(24px)", border:"1px solid rgba(255,255,255,0.6)", borderRadius:20, padding:"40px 44px", width:500, boxShadow:"0 20px 60px rgba(0,0,0,0.2)", animation:"popIn 0.3s cubic-bezier(.22,.68,0,1.2) forwards", fontFamily:"'Plus Jakarta Sans',sans-serif" },
  iconWrap: { width:60, height:60, borderRadius:"50%", background:"rgba(239,246,255,0.9)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px", border:"1.5px solid rgba(191,219,254,0.6)" },
  title:    { fontSize:22, fontWeight:800, background:"linear-gradient(135deg,#1E3A8A,#2563EB)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", marginBottom:8, textAlign:"center" },
  subtitle: { fontSize:13, color:"#6B7280", lineHeight:1.6, marginBottom:22, fontWeight:400, textAlign:"center" },
  grid:     { display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px 14px", marginBottom:16 },
  field:    { display:"flex", flexDirection:"column" },
  label:    { fontSize:11, fontWeight:700, color:"#1e3a8a", marginBottom:5 },
  input:    { padding:"10px 13px", border:"1.5px solid rgba(200,210,255,0.7)", borderRadius:9, fontSize:13, color:"#111827", background:"rgba(255,255,255,0.8)", boxSizing:"border-box", fontFamily:"'Plus Jakarta Sans',sans-serif", transition:"border-color 0.2s, box-shadow 0.2s" },
  error:    { fontSize:12, color:"#DC2626", marginBottom:12 },
  btn:      { width:"100%", padding:"12px", borderRadius:9, border:"none", background:"linear-gradient(135deg,#1E3A8A,#2563EB)", color:"#fff", fontWeight:700, fontSize:14, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif", boxShadow:"0 4px 14px rgba(37,99,235,0.35)", marginBottom:10 },
  note:     { fontSize:11, color:"#9CA3AF", textAlign:"center" },
};