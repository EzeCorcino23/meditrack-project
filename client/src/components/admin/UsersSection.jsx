import { useState } from "react";
import SvgIcon from "../dashboard/SvgIcon";
import { sc } from "../dashboard/styles";

export default function UsersSection() {
  const [showModal, setShowModal]           = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail]         = useState("");
  const [form, setForm] = useState({ name:"", email:"", password:"", role:"doctor", assignedDoctor:"" });

  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:24 }}>
        <div>
          <h2 style={sc.sectionTitle}>Gestión de Usuarios</h2>
          <p style={sc.sectionSub}>Crear, editar y administrar cuentas del sistema</p>
        </div>
        <div style={{ display:"flex", gap:8 }}>
          <button style={sc.outlineBtn} onClick={() => setShowResetModal(true)}>
            <SvgIcon name="edit" size={13} color="#1E40AF" /> Restaurar Contraseña
          </button>
          <button style={sc.primaryBtn} onClick={() => setShowModal(true)}>
            <SvgIcon name="plus" size={14} color="#fff" /> Nuevo Usuario
          </button>
        </div>
      </div>

      <div style={sc.tableCard}>
        <div style={sc.tableHeader}>
          <div style={{ ...sc.searchBox, width:260 }}>
            <SvgIcon name="search" size={13} color="#6B7280" />
            <input placeholder="Buscar usuario..." style={sc.searchInput} />
          </div>
          <button style={sc.outlineBtn}>
            <SvgIcon name="filter" size={13} color="#1E40AF" /> Filtrar por rol
          </button>
        </div>
        <table style={sc.table}>
          <thead>
            <tr>{["Nombre","Rol","Correo","Doctor Asignado","Estado","Acciones"].map(h => <th key={h} style={sc.th}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {[1,2,3,4].map(i => (
              <tr key={i} style={sc.tr}>
                <td style={sc.td}><div style={{ height:13, borderRadius:6, background:"rgba(30,58,138,0.07)", width:"75%" }} /></td>
                <td style={sc.td}><div style={{ height:13, borderRadius:6, background:"rgba(30,58,138,0.07)", width:60 }} /></td>
                <td style={sc.td}><div style={{ height:13, borderRadius:6, background:"rgba(30,58,138,0.07)", width:"80%" }} /></td>
                <td style={sc.td}><div style={{ height:13, borderRadius:6, background:"rgba(30,58,138,0.07)", width:"60%" }} /></td>
                <td style={sc.td}><div style={{ height:13, borderRadius:6, background:"rgba(30,58,138,0.07)", width:50 }} /></td>
                <td style={sc.td}>
                  <div style={{ display:"flex", gap:6 }}>
                    <button style={{ ...sc.outlineBtn, padding:"4px 10px", fontSize:11 }}>
                      <SvgIcon name="edit" size={11} color="#1E40AF" /> Editar
                    </button>
                    <button style={{ ...sc.outlineBtn, padding:"4px 10px", fontSize:11, color:"#DC2626", borderColor:"rgba(220,38,38,0.3)" }}>
                      <SvgIcon name="trash" size={11} color="#DC2626" /> Desactivar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal nuevo usuario */}
      {showModal && (
        <div style={ms.backdrop}>
          <div style={ms.modal}>
            <h3 style={ms.title}>Nuevo Usuario</h3>
            <p style={ms.sub}>Completa los datos para crear la cuenta.</p>
            <div style={ms.field}>
              <label style={ms.label}>Nombre completo *</label>
              <input style={ms.input} placeholder="Ej. Dr. Carlos Méndez" value={form.name} onChange={e => setForm(f => ({ ...f, name:e.target.value }))} />
            </div>
            <div style={ms.field}>
              <label style={ms.label}>Correo electrónico *</label>
              <input style={ms.input} type="email" placeholder="correo@clinica.com" value={form.email} onChange={e => setForm(f => ({ ...f, email:e.target.value }))} />
            </div>
            <div style={ms.field}>
              <label style={ms.label}>Contraseña temporal *</label>
              <input style={ms.input} type="password" placeholder="Mínimo 6 caracteres" value={form.password} onChange={e => setForm(f => ({ ...f, password:e.target.value }))} />
            </div>
            <div style={ms.field}>
              <label style={ms.label}>Rol *</label>
              <select style={ms.input} value={form.role} onChange={e => setForm(f => ({ ...f, role:e.target.value }))}>
                <option value="doctor">Doctor</option>
                <option value="reception">Recepción</option>
              </select>
            </div>
            {form.role === "reception" && (
              <div style={ms.field}>
                <label style={ms.label}>Doctor asignado *</label>
                <input style={ms.input} placeholder="Nombre del doctor" value={form.assignedDoctor} onChange={e => setForm(f => ({ ...f, assignedDoctor:e.target.value }))} />
              </div>
            )}
            <p style={{ fontSize:11, color:"#6B7280", marginBottom:16 }}>📧 Las credenciales se enviarán al correo registrado.</p>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={() => setShowModal(false)} style={ms.cancelBtn}>Cancelar</button>
              <button style={ms.saveBtn}>Crear Usuario</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal restaurar contraseña */}
      {showResetModal && (
        <div style={ms.backdrop}>
          <div style={{ ...ms.modal, width:400 }}>
            <h3 style={ms.title}>Restaurar Contraseña</h3>
            <p style={ms.sub}>Ingresa el correo del usuario para restaurar su contraseña.</p>
            <div style={ms.field}>
              <label style={ms.label}>Correo del usuario *</label>
              <input style={ms.input} type="email" placeholder="correo@clinica.com" value={resetEmail} onChange={e => setResetEmail(e.target.value)} />
            </div>
            <p style={{ fontSize:11, color:"#6B7280", marginBottom:16 }}>📧 Se enviará una nueva contraseña temporal al correo indicado.</p>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={() => setShowResetModal(false)} style={ms.cancelBtn}>Cancelar</button>
              <button style={ms.saveBtn}>Enviar nueva contraseña</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const ms = {
  backdrop:  { position:"fixed", inset:0, zIndex:400, background:"rgba(0,0,0,0.35)", backdropFilter:"blur(6px)" },
  modal:     { position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", background:"rgba(255,255,255,0.95)", backdropFilter:"blur(24px)", border:"1px solid rgba(255,255,255,0.6)", borderRadius:20, padding:"36px 40px", width:480, boxShadow:"0 20px 60px rgba(0,0,0,0.2)", fontFamily:"'Plus Jakarta Sans',sans-serif" },
  title:     { fontSize:20, fontWeight:800, background:"linear-gradient(135deg,#1E3A8A,#2563EB)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", marginBottom:6 },
  sub:       { fontSize:12, color:"#6B7280", marginBottom:18 },
  field:     { marginBottom:14 },
  label:     { display:"block", fontSize:11, fontWeight:700, color:"#1e3a8a", marginBottom:5 },
  input:     { width:"100%", padding:"10px 13px", border:"1.5px solid rgba(200,210,255,0.7)", borderRadius:9, fontSize:13, color:"#111827", background:"rgba(255,255,255,0.8)", outline:"none", boxSizing:"border-box", fontFamily:"'Plus Jakarta Sans',sans-serif" },
  cancelBtn: { flex:1, padding:"11px", borderRadius:9, border:"1.5px solid rgba(30,58,138,0.2)", background:"rgba(239,246,255,0.7)", color:"#1E3A8A", fontWeight:600, fontSize:13, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif" },
  saveBtn:   { flex:1, padding:"11px", borderRadius:9, border:"none", background:"linear-gradient(135deg,#1E3A8A,#2563EB)", color:"#fff", fontWeight:700, fontSize:13, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif", boxShadow:"0 4px 14px rgba(37,99,235,0.3)" },
};