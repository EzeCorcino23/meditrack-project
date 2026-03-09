
import SvgIcon from "../dashboard/SvgIcon";
import { sc } from "../dashboard/styles";

export default function RecordsSection() {
  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:24 }}>
        <div><h2 style={sc.sectionTitle}>Expedientes Clínicos</h2><p style={sc.sectionSub}>Historial médico completo por paciente</p></div>
      </div>
      <div style={sc.tableCard}>
        <div style={sc.tableHeader}>
          <div style={{ ...sc.searchBox, width:260 }}><SvgIcon name="search" size={13} color="#6B7280" /><input placeholder="Buscar expediente..." style={sc.searchInput} /></div>
        </div>
        <table style={sc.table}>
          <thead><tr>{["Expediente","Paciente","Última Consulta","Diagnóstico","Tipo","Acciones"].map(h => <th key={h} style={sc.th}>{h}</th>)}</tr></thead>
          <tbody>{[1,2,3,4].map(i => <tr key={i} style={sc.tr}>{[60,120,100,100,60,80].map((w,j) => <td key={j} style={sc.td}><div style={{ height:13, borderRadius:6, background:"rgba(30,58,138,0.07)", width:w }} /></td>)}</tr>)}</tbody>
        </table>
      </div>
    </div>
  );
}