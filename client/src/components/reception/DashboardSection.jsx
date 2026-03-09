import SvgIcon from "../dashboard/SvgIcon";
import { sc } from "../dashboard/styles";

export default function DashboardSection() {
  return (
    <div>
      <h2 style={sc.sectionTitle}>Panel de Recepción</h2>
      <p style={sc.sectionSub}>Resumen del día y turnos pendientes</p>
      <div style={sc.statsGrid}>
        {[
          { label:"Citas de Hoy",  icon:"calendar", color:"#0891B2", bg:"rgba(8,145,178,0.12)"  },
          { label:"En Espera",     icon:"patients", color:"#D97706", bg:"rgba(217,119,6,0.12)"  },
          { label:"Atendidos Hoy", icon:"check",    color:"#059669", bg:"rgba(5,150,105,0.12)"  },
          { label:"Próxima Cita",  icon:"bell",     color:"#7C3AED", bg:"rgba(124,58,237,0.12)" },
        ].map((s, i) => (
          <div key={i} style={sc.statCard}>
            <div style={{ ...sc.statIcon, background:s.bg }}><SvgIcon name={s.icon} size={22} color={s.color} /></div>
            <div><p style={{ ...sc.statValue, color:s.color }}>—</p><p style={sc.statLabel}>{s.label}</p></div>
          </div>
        ))}
      </div>
      <div style={sc.tableCard}>
        <p style={sc.chartTitle}>Turnos del día</p>
        <table style={sc.table}>
          <thead><tr>{["#","Paciente","Hora","Tipo","Estado","Acciones"].map(h => <th key={h} style={sc.th}>{h}</th>)}</tr></thead>
          <tbody>{[1,2,3,4].map(i => <tr key={i} style={sc.tr}>{[30,120,70,60,60,80].map((w,j) => <td key={j} style={sc.td}><div style={{ height:13, borderRadius:6, background:"rgba(30,58,138,0.07)", width:w }} /></td>)}</tr>)}</tbody>
        </table>
      </div>
    </div>
  );
}