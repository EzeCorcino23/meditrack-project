import SvgIcon from "../dashboard/SvgIcon";
import { sc } from "../dashboard/styles";

export default function NotificationsSection() {
  return (
    <div>
      <h2 style={sc.sectionTitle}>Notificaciones</h2>
      <p style={sc.sectionSub}>Control de llegada de pacientes y comunicación con el doctor</p>
      <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
        {[
          { statusLabel:"En espera",    color:"#D97706", status:"waiting"   },
          { statusLabel:"Confirmado ✓", color:"#059669", status:"confirmed" },
          { statusLabel:"Atendido ✓",   color:"#6B7280", status:"done"      },
        ].map((n, i) => (
          <div key={i} style={{ ...sc.alertCard, borderLeftColor:n.color, background:n.color+"0d" }}>
            <div style={{ width:40, height:40, borderRadius:10, background:n.color+"20", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <SvgIcon name="patients" size={18} color={n.color} />
            </div>
            <div style={{ flex:1 }}>
              <div style={{ height:13, borderRadius:6, background:"rgba(30,58,138,0.07)", width:"50%", marginBottom:6 }} />
              <div style={{ display:"flex", gap:8, alignItems:"center" }}>
                <span style={{ ...sc.statusBadge, background:n.color+"18", color:n.color, fontSize:10 }}>{n.statusLabel}</span>
                <span style={{ fontSize:11, color:"#9CA3AF" }}>Tiempo: —</span>
              </div>
            </div>
            {n.status === "waiting" && (
              <button style={{ ...sc.primaryBtn, padding:"6px 14px", fontSize:11, background:"linear-gradient(135deg,#0C4A6E,#0891B2)" }}>Marcar llegada</button>
            )}
            {n.status === "confirmed" && (
              <button style={{ ...sc.outlineBtn, padding:"6px 14px", fontSize:11 }}>Dar paso →</button>
            )}
          </div>
        ))}
        <p style={{ fontSize:12, color:"#9CA3AF", textAlign:"center", marginTop:4 }}>Notificaciones en tiempo real disponibles al conectar backend</p>
      </div>
    </div>
  );
}