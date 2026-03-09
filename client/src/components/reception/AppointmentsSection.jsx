import { useState } from "react";
import SvgIcon from "../dashboard/SvgIcon";
import { sc } from "../dashboard/styles";

export default function AppointmentsSection() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ patient:"", date:"", time:"", reason:"" });

  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:24 }}>
        <div><h2 style={sc.sectionTitle}>Citas / Turnos</h2><p style={sc.sectionSub}>Agenda, edita y cancela citas del doctor asignado</p></div>
        <button style={{ ...sc.primaryBtn, background:"linear-gradient(135deg,#0C4A6E,#0891B2)" }} onClick={() => setShowModal(true)}>
          <SvgIcon name="plus" size={14} color="#fff" /> Nueva Cita
        </button>
      </div>
      <div style={sc.tableCard}>
        <div style={sc.tableHeader}>
          <div style={{ ...sc.searchBox, width:260 }}><SvgIcon name="search" size={13} color="#6B7280" /><input placeholder="Buscar cita..." style={sc.searchInput} /></div>
          <button style={sc.outlineBtn}><SvgIcon name="filter" size={13} color="#1E40AF" /> Filtrar</button>
        </div>
        <table style={sc.table}>
          <thead><tr>{["Paciente","Fecha","Hora","Motivo","Tipo","Estado","Acciones"].map(h => <th key={h} style={sc.th}>{h}</th>)}</tr></thead>
          <tbody>{[1,2,3,4].map(i => <tr key={i} style={sc.tr}>{[120,80,60,100,60,60,80].map((w,j) => <td key={j} style={sc.td}><div style={{ height:13, borderRadius:6, background:"rgba(30,58,138,0.07)", width:w }} /></td>)}</tr>)}</tbody>
        </table>
      </div>
      {showModal && (
        <div style={ms.backdrop}><div style={{ ...ms.modal, width:420 }}>
          <h3 style={ms.title}>Nueva Cita</h3>
          <div style={ms.field}><label style={ms.label}>Paciente *</label><input style={ms.input} placeholder="Nombre del paciente" value={form.patient} onChange={e => setForm(f => ({ ...f, patient:e.target.value }))} /></div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <div style={ms.field}><label style={ms.label}>Fecha *</label><input style={ms.input} type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date:e.target.value }))} /></div>
            <div style={ms.field}><label style={ms.label}>Hora *</label><input style={ms.input} type="time" value={form.time} onChange={e => setForm(f => ({ ...f, time:e.target.value }))} /></div>
          </div>
          <div style={ms.field}><label style={ms.label}>Motivo</label><input style={ms.input} placeholder="Motivo de la cita" value={form.reason} onChange={e => setForm(f => ({ ...f, reason:e.target.value }))} /></div>
          <div style={{ display:"flex", gap:10 }}><button onClick={() => setShowModal(false)} style={ms.cancelBtn}>Cancelar</button><button style={ms.saveBtn}>Agendar Cita</button></div>
        </div></div>
      )}
    </div>
  );
}

const ms = {
  backdrop:  { position:"fixed", inset:0, zIndex:400, background:"rgba(0,0,0,0.35)", backdropFilter:"blur(6px)" },
  modal:     { position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", background:"rgba(255,255,255,0.95)", backdropFilter:"blur(24px)", border:"1px solid rgba(255,255,255,0.6)", borderRadius:20, padding:"36px 40px", width:480, boxShadow:"0 20px 60px rgba(0,0,0,0.2)", fontFamily:"'Plus Jakarta Sans',sans-serif" },
  title:     { fontSize:20, fontWeight:800, background:"linear-gradient(135deg,#0C4A6E,#0891B2)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", marginBottom:6 },
  field:     { marginBottom:14 },
  label:     { display:"block", fontSize:11, fontWeight:700, color:"#1e3a8a", marginBottom:5 },
  input:     { width:"100%", padding:"10px 13px", border:"1.5px solid rgba(200,210,255,0.7)", borderRadius:9, fontSize:13, color:"#111827", background:"rgba(255,255,255,0.8)", outline:"none", boxSizing:"border-box", fontFamily:"'Plus Jakarta Sans',sans-serif" },
  cancelBtn: { flex:1, padding:"11px", borderRadius:9, border:"1.5px solid rgba(30,58,138,0.2)", background:"rgba(239,246,255,0.7)", color:"#1E3A8A", fontWeight:600, fontSize:13, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif" },
  saveBtn:   { flex:1, padding:"11px", borderRadius:9, border:"none", background:"linear-gradient(135deg,#0C4A6E,#0891B2)", color:"#fff", fontWeight:700, fontSize:13, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif", boxShadow:"0 4px 14px rgba(8,145,178,0.3)" },
};