import SvgIcon from "../dashboard/SvgIcon";
import { sc } from "../dashboard/styles";

export default function ReportsSection() {
  const types = [
    { title:"Expediente del Paciente", icon:"records",  color:"#059669" },
    { title:"Historial de Consultas",  icon:"calendar", color:"#2563EB" },
    { title:"Medicamentos Recetados",  icon:"pill",     color:"#7C3AED" },
    { title:"Resultados de Exámenes",  icon:"lab",      color:"#0891B2" },
  ];

  return (
    <div>
      <h2 style={sc.sectionTitle}>Reportes y PDF</h2>
      <p style={sc.sectionSub}>Genera documentos clínicos exportables en PDF</p>
      <div style={sc.reportGrid}>
        {types.map((r, i) => (
          <div key={i} style={sc.reportCard}>
            <div style={{ width:50, height:50, borderRadius:12, background:r.color+"20", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <SvgIcon name={r.icon} size={24} color={r.color} />
            </div>
            <h4 style={{ margin:"12px 0 4px", fontSize:14, fontWeight:700, color:"#1e3a8a" }}>{r.title}</h4>
            <p style={{ margin:"0 0 14px", fontSize:12, color:"#9CA3AF" }}>Disponible al conectar backend</p>
            <button style={{ ...sc.primaryBtn, fontSize:12, padding:"8px 14px", background:`linear-gradient(135deg,${r.color},${r.color}cc)` }}>
              <SvgIcon name="reports" size={12} color="#fff" /> Generar PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}