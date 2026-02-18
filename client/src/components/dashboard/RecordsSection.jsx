import SvgIcon from "./SvgIcon";
import TableSkeleton from "./TableSkeleton";
import { sc } from "./styles";

export default function Records() {
  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:24 }}>
        <div><h2 style={sc.sectionTitle}>Expedientes Clínicos</h2><p style={sc.sectionSub}>Historial médico de pacientes</p></div>
        <button style={sc.primaryBtn}><SvgIcon name="plus" size={14} color="#fff" /> Nueva Consulta</button>
      </div>
      <div style={sc.tableCard}>
        <div style={sc.tableHeader}>
          <div style={{ ...sc.searchBox, width:260 }}><SvgIcon name="search" size={13} color="#6B7280" /><input placeholder="Buscar expediente..." style={sc.searchInput} /></div>
        </div>
        <TableSkeleton cols={["Expediente","Paciente","Última Consulta","Diagnóstico","Médico","Acciones"]} />
      </div>
    </div>
  );
}