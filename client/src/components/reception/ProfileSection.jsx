import { useState } from "react";
import { sc } from "../dashboard/styles";


export default function ProfileSection() {
  const [form, setForm] = useState({
    name: localStorage.getItem("userName") || "",
    email:"", phone:"",
    currentPassword:"", newPassword:"", confirmPassword:""
  });

  return (
    <div>
      <h2 style={sc.sectionTitle}>Mi Perfil</h2>
      <p style={sc.sectionSub}>Datos personales y cambio de contraseña</p>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"14px 16px", marginBottom:20 }}>
        {[
          { label:"Nombre completo", key:"name",  placeholder:"Laura Gómez"           },
          { label:"Correo",          key:"email", placeholder:"recepcion@clinica.com", type:"email" },
          { label:"Teléfono",        key:"phone", placeholder:"809-000-0000"           },
        ].map(f => (
          <div key={f.key}>
            <label style={{ display:"block", fontSize:11, fontWeight:700, color:"#1e3a8a", marginBottom:5 }}>{f.label}</label>
            <input type={f.type||"text"} style={inp} placeholder={f.placeholder} value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]:e.target.value }))} />
          </div>
        ))}
      </div>
      <div style={{ ...sc.tableCard, marginBottom:20 }}>
        <p style={{ ...sc.chartTitle, marginBottom:14 }}>Cambiar contraseña</p>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12 }}>
          {[
            { label:"Contraseña actual",    key:"currentPassword" },
            { label:"Nueva contraseña",     key:"newPassword"     },
            { label:"Confirmar contraseña", key:"confirmPassword" },
          ].map(f => (
            <div key={f.key}>
              <label style={{ display:"block", fontSize:11, fontWeight:700, color:"#1e3a8a", marginBottom:5 }}>{f.label}</label>
              <input type="password" style={inp} value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]:e.target.value }))} />
            </div>
          ))}
        </div>
        <p style={{ fontSize:11, color:"#6B7280", marginTop:10 }}>📧 Los cambios se notificarán al correo registrado.</p>
      </div>
      <div style={{ display:"flex", gap:10 }}>
        <button style={{ ...sc.primaryBtn, background:"linear-gradient(135deg,#0C4A6E,#0891B2)" }}>Guardar cambios</button>
        <button style={sc.outlineBtn}>Cancelar</button>
      </div>
    </div>
  );
}

const inp = { width:"100%", padding:"10px 13px", border:"1.5px solid rgba(200,210,255,0.7)", borderRadius:9, fontSize:13, color:"#111827", background:"rgba(255,255,255,0.8)", outline:"none", boxSizing:"border-box", fontFamily:"'Plus Jakarta Sans',sans-serif" };