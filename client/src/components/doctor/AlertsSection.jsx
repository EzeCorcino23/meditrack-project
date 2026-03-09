import SvgIcon from "../dashboard/SvgIcon";
import { sc } from "../dashboard/styles";

export default function AlertsSection() {
  return (
    <div>
      <h2 style={sc.sectionTitle}>Alertas Clínicas</h2>
      <p style={sc.sectionSub}>Riesgos e interacciones detectadas automáticamente</p>
      <div style={{ display:"flex", flexDirection:"column", gap:12, marginTop:8 }}>
        {[
          { label:"Alertas Críticas",    color:"#DC2626", desc:"Interacciones medicamentosas graves" },
          { label:"Advertencias",        color:"#D97706", desc:"Condiciones crónicas relevantes"    },
          { label:"Controles Pendientes",color:"#0891B2", desc:"Seguimientos y recordatorios"       },
        ].map((a, i) => (
          <div key={i} style={{ ...sc.alertCard, borderLeftColor:a.color, background:a.color+"0d" }}>
            <div style={{ width:40, height:40, borderRadius:10, background:a.color+"20", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <SvgIcon name="alerts" size={18} color={a.color} />
            </div>
            <div style={{ flex:1 }}>
              <p style={{ margin:0, fontWeight:700, fontSize:14, color:"#1e3a8a" }}>{a.label}</p>
              <p style={{ margin:"3px 0 0", fontSize:12, color:"#9CA3AF" }}>{a.desc} — conectar backend</p>
            </div>
            <span style={{ ...sc.statusBadge, background:a.color+"18", color:a.color }}>0</span>
          </div>
        ))}
      </div>
    </div>
  );
}