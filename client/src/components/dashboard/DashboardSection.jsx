import SvgIcon from "./SvgIcon";
import TableSkeleton from "./TableSkeleton";
import { sc } from "./styles";

export default function Dashboard() {
  return (
    <div>
      <h2 style={sc.sectionTitle}>Panel General</h2>
      <p style={sc.sectionSub}>Resumen operativo del sistema clínico</p>
      <div style={sc.statsGrid}>
        {[
          { label:"Pacientes Activos", icon:"patients", color:"#2563EB", bg:"rgba(37,99,235,0.12)"  },
          { label:"Consultas Hoy",     icon:"calendar", color:"#0891B2", bg:"rgba(8,145,178,0.12)"  },
          { label:"Alertas Activas",   icon:"alerts",   color:"#DC2626", bg:"rgba(220,38,38,0.12)"  },
          { label:"Expedientes",       icon:"records",  color:"#7C3AED", bg:"rgba(124,58,237,0.12)" },
        ].map((s, i) => (
          <div key={i} style={sc.statCard}>
            <div style={{ ...sc.statIcon, background:s.bg }}><SvgIcon name={s.icon} size={22} color={s.color} /></div>
            <div><p style={{ ...sc.statValue, color:s.color }}>—</p><p style={sc.statLabel}>{s.label}</p></div>
          </div>
        ))}
      </div>
      <div style={sc.chartsRow}>
        {["Consultas por semana","Distribución diagnóstica","Alertas recientes"].map((title, i) => (
          <div key={i} style={sc.chartCard}>
            <p style={sc.chartTitle}>{title}</p>
            <div style={sc.chartPlaceholder}>
              <SvgIcon name="activity" size={28} color="rgba(37,99,235,0.2)" />
              <span style={{ fontSize:11, color:"rgba(30,58,138,0.35)", marginTop:6 }}>Datos disponibles con backend</span>
            </div>
          </div>
        ))}
      </div>
      <div style={sc.tableCard}>
        <div style={sc.tableHeader}>
          <span style={sc.chartTitle}>Pacientes recientes</span>
          <div style={sc.searchBox}><SvgIcon name="search" size={13} color="#9CA3AF" /><span style={{ fontSize:12, color:"#9CA3AF" }}>Buscar...</span></div>
        </div>
        <TableSkeleton cols={["ID","Nombre","Edad","Diagnóstico","Estado","Acciones"]} />
      </div>
    </div>
  );
}