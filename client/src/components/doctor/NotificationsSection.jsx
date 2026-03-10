import SvgIcon from "../dashboard/SvgIcon";
import { sc } from "../dashboard/styles";

export default function NotificationsSection() {
  return (
    <div>
      <h2 style={sc.sectionTitle}>Notificaciones</h2>
      <p style={sc.sectionSub}>Pacientes en espera y turnos del día</p>
      <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
        {[1,2,3].map(i => (
          <div key={i} style={{ ...sc.alertCard, borderLeftColor:"#059669", background:"rgba(5,150,105,0.06)" }}>
            <div style={{ width:40, height:40, borderRadius:10, background:"rgba(5,150,105,0.15)", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <SvgIcon name="bell" size={18} color="#059669" />
            </div>
            <div style={{ flex:1 }}>
              <div style={{ height:13, borderRadius:6, background:"rgba(30,58,138,0.07)", width:"60%", marginBottom:6 }} />
              <div style={{ height:11, borderRadius:6, background:"rgba(30,58,138,0.05)", width:"40%" }} />
            </div>
            <button style={{ ...sc.primaryBtn, padding:"6px 14px", fontSize:11, background:"linear-gradient(135deg,#065F46,#059669)" }}>Confirmar</button>
            <button style={{ ...sc.outlineBtn, padding:"6px 14px", fontSize:11 }}>Atendido ✓</button>
          </div>
        ))}
        <p style={{ fontSize:12, color:"#9CA3AF", textAlign:"center", marginTop:4 }}>Notificaciones disponibles al conectar backend</p>
      </div>
    </div>
  );
}