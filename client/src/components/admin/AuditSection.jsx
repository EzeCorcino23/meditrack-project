import SvgIcon from "../dashboard/SvgIcon";
import { sc } from "../dashboard/styles";

export default function AuditSection() {
  return (
    <div>
      <h2 style={sc.sectionTitle}>Auditoría y Trazabilidad</h2>
      <p style={sc.sectionSub}>Registro de accesos y acciones en el sistema</p>
      <div style={sc.tableCard}>
        <div style={sc.tableHeader}>
          <div style={{ ...sc.searchBox, width:260 }}>
            <SvgIcon name="search" size={13} color="#6B7280" />
            <input placeholder="Buscar por usuario..." style={sc.searchInput} />
          </div>
          <button style={sc.outlineBtn}><SvgIcon name="filter" size={13} color="#1E40AF" /> Filtrar</button>
        </div>
        <table style={sc.table}>
          <thead><tr>{["Usuario","Rol","Acción","Módulo","Hora","IP"].map(h => <th key={h} style={sc.th}>{h}</th>)}</tr></thead>
          <tbody>
            {[1,2,3,4].map(i => (
              <tr key={i} style={sc.tr}>
                {[80,60,90,70,70,80].map((w,j) => <td key={j} style={sc.td}><div style={{ height:13, borderRadius:6, background:"rgba(30,58,138,0.07)", width:w }} /></td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}