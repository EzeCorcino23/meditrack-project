import { useState } from "react";
import SvgIcon from "../dashboard/SvgIcon";
import { sc } from "../dashboard/styles";

export default function RolesSection() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ doctor:"", reception:"" });

  return (
    <div>
      <h2 style={sc.sectionTitle}>Roles y Permisos</h2>
      <p style={sc.sectionSub}>Vinculación de recepcionistas a su doctor correspondiente</p>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12, marginBottom:20 }}>
        {[
          { role:"Administrador", color:"#2563EB", desc:"Gestión total del sistema",       perms:["Usuarios","Auditoría","Reportes","Configuración","Asistente IA"] },
          { role:"Doctor",        color:"#059669", desc:"Gestión clínica de pacientes",     perms:["Pacientes","Expedientes","Consultas","Alertas","Medicamentos","Laboratorio"] },
          { role:"Recepción",     color:"#0891B2", desc:"Gestión de citas y turnos",        perms:["Pacientes","Citas/Turnos","Notificaciones","Alertas"] },
        ].map((r, i) => (
          <div key={i} style={{ ...sc.chartCard, borderTop:`3px solid ${r.color}` }}>
            <p style={{ fontSize:14, fontWeight:800, color:r.color, marginBottom:4 }}>{r.role}</p>
            <p style={{ fontSize:11, color:"#6B7280", marginBottom:12 }}>{r.desc}</p>
            {r.perms.map(p => (
              <div key={p} style={{ display:"flex", alignItems:"center", gap:6, marginBottom:5 }}>
                <div style={{ width:6, height:6, borderRadius:"50%", background:r.color }} />
                <span style={{ fontSize:12, color:"#374151" }}>{p}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={sc.tableCard}>
        <div style={sc.tableHeader}>
          <span style={sc.chartTitle}>Vinculación Doctor — Recepción</span>
          <button style={sc.primaryBtn} onClick={() => setShowModal(true)}>
            <SvgIcon name="plus" size={14} color="#fff" /> Vincular
          </button>
        </div>
        <table style={sc.table}>
          <thead><tr>{["Doctor","Recepcionista","Estado","Acciones"].map(h => <th key={h} style={sc.th}>{h}</th>)}</tr></thead>
          <tbody>
            {[1,2].map(i => (
              <tr key={i} style={sc.tr}>
                {[80,75,50,68].map((w,j) => <td key={j} style={sc.td}><div style={{ height:13, borderRadius:6, background:"rgba(30,58,138,0.07)", width:w }} /></td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div style={ms.backdrop}>
          <div style={{ ...ms.modal, width:420 }}>
            <h3 style={ms.title}>Vincular Doctor y Recepción</h3>
            <p style={ms.sub}>Selecciona el doctor y la recepcionista a vincular.</p>
            <div style={ms.field}><label style={ms.label}>Doctor *</label><input style={ms.input} placeholder="Nombre del doctor" value={form.doctor} onChange={e => setForm(f => ({ ...f, doctor:e.target.value }))} /></div>
            <div style={ms.field}><label style={ms.label}>Recepcionista *</label><input style={ms.input} placeholder="Nombre de la recepcionista" value={form.reception} onChange={e => setForm(f => ({ ...f, reception:e.target.value }))} /></div>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={() => setShowModal(false)} style={ms.cancelBtn}>Cancelar</button>
              <button style={ms.saveBtn}>Vincular</button>
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