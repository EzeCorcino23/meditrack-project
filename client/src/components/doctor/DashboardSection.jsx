import SvgIcon from "../dashboard/SvgIcon";
import { sc } from "../dashboard/styles";

export default function DashboardSection() {
  return (
    <div>
      <h2 style={sc.sectionTitle}>Panel Médico</h2>
      <p style={sc.sectionSub}>Resumen del día clínico</p>
      <div style={sc.statsGrid}>
        {[
          { label:"Pacientes Hoy",   icon:"patients", color:"#059669", bg:"rgba(5,150,105,0.12)"  },
          { label:"Consultas Hoy",   icon:"calendar", color:"#2563EB", bg:"rgba(37,99,235,0.12)"  },
          { label:"Alertas Activas", icon:"alerts",   color:"#DC2626", bg:"rgba(220,38,38,0.12)"  },
          { label:"Expedientes",     icon:"records",  color:"#7C3AED", bg:"rgba(124,58,237,0.12)" },
        ].map((s, i) => (
          <div key={i} style={sc.statCard}>
            <div style={{ ...sc.statIcon, background:s.bg }}><SvgIcon name={s.icon} size={22} color={s.color} /></div>
            <div><p style={{ ...sc.statValue, color:s.color }}>—</p><p style={sc.statLabel}>{s.label}</p></div>
          </div>
        ))}
      </div>
      <div style={sc.tableCard}>
        <div style={sc.tableHeader}>
          <span style={sc.chartTitle}>Pacientes recientes</span>
          <div style={sc.searchBox}><SvgIcon name="search" size={13} color="#9CA3AF" /><span style={{ fontSize:12, color:"#9CA3AF" }}>Buscar...</span></div>
        </div>
        <table style={sc.table}>
          <thead><tr>{["ID","Nombre","Edad","Diagnóstico","Tipo","Estado","Acciones"].map(h => <th key={h} style={sc.th}>{h}</th>)}</tr></thead>
          <tbody>{[1,2,3,4].map(i => <tr key={i} style={sc.tr}>{[40,120,40,100,60,60,80].map((w,j) => <td key={j} style={sc.td}><div style={{ height:13, borderRadius:6, background:"rgba(30,58,138,0.07)", width:w }} /></td>)}</tr>)}</tbody>
        </table>
      </div>
    </div>
  );
}