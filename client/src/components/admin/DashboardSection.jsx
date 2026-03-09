// components/dashboard/admin/DashboardSection.jsx
import SvgIcon from "../dashboard/SvgIcon";
import { sc } from "../dashboard/styles";

export default function DashboardSection() {
  return (
    <div>
      <h2 style={sc.sectionTitle}>Panel General</h2>
      <p style={sc.sectionSub}>Resumen operativo del sistema</p>
      <div style={sc.statsGrid}>
        {[
          { label:"Usuarios Activos",  icon:"users",    color:"#2563EB", bg:"rgba(37,99,235,0.12)"  },
          { label:"Doctores",          icon:"patients", color:"#059669", bg:"rgba(5,150,105,0.12)"  },
          { label:"Recepcionistas",    icon:"users",    color:"#0891B2", bg:"rgba(8,145,178,0.12)"  },
          { label:"Accesos Hoy",       icon:"audit",    color:"#7C3AED", bg:"rgba(124,58,237,0.12)" },
        ].map((s, i) => (
          <div key={i} style={sc.statCard}>
            <div style={{ ...sc.statIcon, background:s.bg }}>
              <SvgIcon name={s.icon} size={22} color={s.color} />
            </div>
            <div>
              <p style={{ ...sc.statValue, color:s.color }}>—</p>
              <p style={sc.statLabel}>{s.label}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={sc.tableCard}>
        <p style={sc.chartTitle}>Actividad reciente del sistema</p>
        <div style={sc.chartPlaceholder}>
          <SvgIcon name="activity" size={28} color="rgba(37,99,235,0.2)" />
          <span style={{ fontSize:11, color:"rgba(30,58,138,0.35)", marginTop:6 }}>Datos disponibles con backend</span>
        </div>
      </div>
    </div>
  );
}