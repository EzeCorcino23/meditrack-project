import { useState } from "react";
import SvgIcon from "../dashboard/SvgIcon";
import { sc } from "../dashboard/styles";

export default function PatientsSection() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name:"", age:"", gender:"", phone:"", type:"regular", allergies:"" });

  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:24 }}>
        <div><h2 style={sc.sectionTitle}>Pacientes</h2><p style={sc.sectionSub}>Registro y gestión de pacientes</p></div>
        <button style={sc.primaryBtn} onClick={() => setShowModal(true)}><SvgIcon name="plus" size={14} color="#fff" /> Nuevo Paciente</button>
      </div>
      <div style={sc.tableCard}>
        <div style={sc.tableHeader}>
          <div style={{ ...sc.searchBox, width:260 }}><SvgIcon name="search" size={13} color="#6B7280" /><input placeholder="Buscar paciente..." style={sc.searchInput} /></div>
          <button style={sc.outlineBtn}><SvgIcon name="filter" size={13} color="#1E40AF" /> Filtros</button>
        </div>
        <table style={sc.table}>
          <thead><tr>{["ID","Nombre","Edad","Tipo","Alergias","Estado","Acciones"].map(h => <th key={h} style={sc.th}>{h}</th>)}</tr></thead>
          <tbody>{[1,2,3,4].map(i => <tr key={i} style={sc.tr}>{[40,120,40,70,80,60,80].map((w,j) => <td key={j} style={sc.td}><div style={{ height:13, borderRadius:6, background:"rgba(30,58,138,0.07)", width:w }} /></td>)}</tr>)}</tbody>
        </table>
      </div>

      {showModal && (
        <div style={ms.backdrop}>
          <div style={ms.modal}>
            <h3 style={ms.title}>Nuevo Paciente</h3>
            <p style={ms.sub}>Completa los datos del paciente.</p>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px 14px" }}>
              <div style={ms.field}><label style={ms.label}>Nombre completo *</label><input style={ms.input} placeholder="Juan Pérez" value={form.name} onChange={e => setForm(f => ({ ...f, name:e.target.value }))} /></div>
              <div style={ms.field}><label style={ms.label}>Edad *</label><input style={ms.input} type="number" placeholder="25" value={form.age} onChange={e => setForm(f => ({ ...f, age:e.target.value }))} /></div>
              <div style={ms.field}><label style={ms.label}>Sexo *</label><select style={ms.input} value={form.gender} onChange={e => setForm(f => ({ ...f, gender:e.target.value }))}><option value="">Seleccionar</option><option value="M">Masculino</option><option value="F">Femenino</option></select></div>
              <div style={ms.field}><label style={ms.label}>Teléfono *</label><input style={ms.input} placeholder="809-000-0000" value={form.phone} onChange={e => setForm(f => ({ ...f, phone:e.target.value }))} /></div>
              <div style={ms.field}>
                <label style={ms.label}>Tipo de paciente *</label>
                <select style={ms.input} value={form.type} onChange={e => setForm(f => ({ ...f, type:e.target.value }))}>
                  <option value="vip">VIP (No paga)</option>
                  <option value="standard">Estándar (Con descuento)</option>
                  <option value="regular">Regular (Precio completo)</option>
                </select>
              </div>
              <div style={ms.field}><label style={ms.label}>Alergias</label><input style={ms.input} placeholder="Ej. Penicilina" value={form.allergies} onChange={e => setForm(f => ({ ...f, allergies:e.target.value }))} /></div>
            </div>
            <div style={{ display:"flex", gap:10, marginTop:6 }}>
              <button onClick={() => setShowModal(false)} style={ms.cancelBtn}>Cancelar</button>
              <button style={ms.saveBtn}>Registrar Paciente</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const ms = {
  backdrop:  { position:"fixed", inset:0, zIndex:400, background:"rgba(0,0,0,0.35)", backdropFilter:"blur(6px)" },
  modal:     { position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", background:"rgba(255,255,255,0.95)", backdropFilter:"blur(24px)", border:"1px solid rgba(255,255,255,0.6)", borderRadius:20, padding:"36px 40px", width:500, boxShadow:"0 20px 60px rgba(0,0,0,0.2)", fontFamily:"'Plus Jakarta Sans',sans-serif" },
  title:     { fontSize:20, fontWeight:800, background:"linear-gradient(135deg,#065F46,#059669)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", marginBottom:6 },
  sub:       { fontSize:12, color:"#6B7280", marginBottom:18 },
  field:     { marginBottom:14 },
  label:     { display:"block", fontSize:11, fontWeight:700, color:"#1e3a8a", marginBottom:5 },
  input:     { width:"100%", padding:"10px 13px", border:"1.5px solid rgba(200,210,255,0.7)", borderRadius:9, fontSize:13, color:"#111827", background:"rgba(255,255,255,0.8)", outline:"none", boxSizing:"border-box", fontFamily:"'Plus Jakarta Sans',sans-serif" },
  cancelBtn: { flex:1, padding:"11px", borderRadius:9, border:"1.5px solid rgba(30,58,138,0.2)", background:"rgba(239,246,255,0.7)", color:"#1E3A8A", fontWeight:600, fontSize:13, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif" },
  saveBtn:   { flex:1, padding:"11px", borderRadius:9, border:"none", background:"linear-gradient(135deg,#065F46,#059669)", color:"#fff", fontWeight:700, fontSize:13, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif", boxShadow:"0 4px 14px rgba(5,150,105,0.3)" },
};