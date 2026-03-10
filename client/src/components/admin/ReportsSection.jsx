import SvgIcon from "../dashboard/SvgIcon";
import { sc } from "../dashboard/styles";

export default function ReportsSection() {
  const types = [
    { title:"Actividad de Usuarios",  icon:"users",    color:"#2563EB" },
    { title:"Accesos al Sistema",     icon:"audit",    color:"#7C3AED" },
    { title:"Usuarios por Rol",       icon:"patients", color:"#059669" },
    { title:"Estadísticas Generales", icon:"activity", color:"#D97706" },
  ];

  return (
    <div>
      <h2 style={sc.sectionTitle}>Reportes del Sistema</h2>
      <p style={sc.sectionSub}>Genera reportes administrativos exportables en PDF</p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:12 }}>
        {types.map((r, i) => (
          <div key={i} style={sc.reportCard}>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:10 }}>
              <div style={{ width:44, height:44, borderRadius:11, background:r.color+"20", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <SvgIcon name={r.icon} size={20} color={r.color} />
              </div>
              <div>
                <h4 style={{ margin:0, fontSize:14, fontWeight:700, color:"#1e3a8a" }}>{r.title}</h4>
                <p style={{ margin:0, fontSize:11, color:"#9CA3AF" }}>Disponible al conectar backend</p>
              </div>
            </div>
            <button style={{ ...sc.primaryBtn, fontSize:12, padding:"8px 14px", background:`linear-gradient(135deg,${r.color},${r.color}cc)` }}>
              <SvgIcon name="reports" size={12} color="#fff" /> Generar PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}