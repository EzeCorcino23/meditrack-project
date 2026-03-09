import { useState } from "react";
import SvgIcon from "../dashboard/SvgIcon";
import { sc } from "../dashboard/styles";

export default function LabResultsSection() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ patient:"", examType:"", date:"" });

  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:24 }}>
        <div><h2 style={sc.sectionTitle}>Resultados de Laboratorio</h2><p style={sc.sectionSub}>Adjuntar y consultar exámenes clínicos</p></div>
        <button style={sc.primaryBtn} onClick={() => setShowModal(true)}><SvgIcon name="plus" size={14} color="#fff" /> Agregar Resultado</button>
      </div>
      <div style={sc.tableCard}>
        <table style={sc.table}>
          <thead><tr>{["Paciente","Tipo de Examen","Fecha","Archivo","Acciones"].map(h => <th key={h} style={sc.th}>{h}</th>)}</tr></thead>
          <tbody>{[1,2,3,4].map(i => <tr key={i} style={sc.tr}>{[100,120,80,80,68].map((w,j) => <td key={j} style={sc.td}><div style={{ height:13, borderRadius:6, background:"rgba(30,58,138,0.07)", width:w }} /></td>)}</tr>)}</tbody>
        </table>
      </div>
      {showModal && (
        <div style={ms.backdrop}><div style={{ ...ms.modal, width:420 }}>
          <h3 style={ms.title}>Agregar Resultado de Laboratorio</h3>
          <div style={ms.field}><label style={ms.label}>Paciente *</label><input style={ms.input} placeholder="Nombre del paciente" value={form.patient} onChange={e => setForm(f => ({ ...f, patient:e.target.value }))} /></div>
          <div style={ms.field}><label style={ms.label}>Tipo de examen *</label><input style={ms.input} placeholder="Ej. Hemograma, Glucosa" value={form.examType} onChange={e => setForm(f => ({ ...f, examType:e.target.value }))} /></div>
          <div style={ms.field}><label style={ms.label}>Fecha *</label><input style={ms.input} type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date:e.target.value }))} /></div>
          <div style={ms.field}><label style={ms.label}>Adjuntar archivo</label><input style={{ ...ms.input, padding:"7px 13px" }} type="file" accept=".pdf,.jpg,.png" /></div>
          <div style={{ display:"flex", gap:10 }}><button onClick={() => setShowModal(false)} style={ms.cancelBtn}>Cancelar</button><button style={ms.saveBtn}>Guardar</button></div>
        </div></div>
      )}
    </div>
  );
}

const ms = {
  backdrop:  { position:"fixed", inset:0, zIndex:400, background:"rgba(0,0,0,0.35)", backdropFilter:"blur(6px)" },
  modal:     { position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", background:"rgba(255,255,255,0.95)", backdropFilter:"blur(24px)", border:"1px solid rgba(255,255,255,0.6)", borderRadius:20, padding:"36px 40px", width:500, boxShadow:"0 20px 60px rgba(0,0,0,0.2)", fontFamily:"'Plus Jakarta Sans',sans-serif", maxHeight:"90vh", overflowY:"auto" },
  title:     { fontSize:20, fontWeight:800, background:"linear-gradient(135deg,#065F46,#059669)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", marginBottom:6 },
  field:     { marginBottom:14 },
  label:     { display:"block", fontSize:11, fontWeight:700, color:"#1e3a8a", marginBottom:5 },
  input:     { width:"100%", padding:"10px 13px", border:"1.5px solid rgba(200,210,255,0.7)", borderRadius:9, fontSize:13, color:"#111827", background:"rgba(255,255,255,0.8)", outline:"none", boxSizing:"border-box", fontFamily:"'Plus Jakarta Sans',sans-serif" },
  cancelBtn: { flex:1, padding:"11px", borderRadius:9, border:"1.5px solid rgba(30,58,138,0.2)", background:"rgba(239,246,255,0.7)", color:"#1E3A8A", fontWeight:600, fontSize:13, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif" },
  saveBtn:   { flex:1, padding:"11px", borderRadius:9, border:"none", background:"linear-gradient(135deg,#065F46,#059669)", color:"#fff", fontWeight:700, fontSize:13, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif", boxShadow:"0 4px 14px rgba(5,150,105,0.3)" },
};