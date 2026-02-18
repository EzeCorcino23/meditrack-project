import SvgIcon from "./SvgIcon";
import TableSkeleton from "./TableSkeleton";
import { sc } from "./styles";

export default function Patients() {
  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:24 }}>
        <div><h2 style={sc.sectionTitle}>Gestión de Pacientes</h2><p style={sc.sectionSub}>Registro y seguimiento de pacientes</p></div>
        <button style={sc.primaryBtn}><SvgIcon name="plus" size={14} color="#fff" /> Nuevo Paciente</button>
      </div>
      <div style={sc.tableCard}>
        <div style={sc.tableHeader}>
          <div style={{ ...sc.searchBox, width:260 }}><SvgIcon name="search" size={13} color="#6B7280" /><input placeholder="Buscar paciente..." style={sc.searchInput} /></div>
          <button style={sc.outlineBtn}><SvgIcon name="filter" size={13} color="#1E40AF" /> Filtros</button>
        </div>
        <TableSkeleton cols={["ID","Nombre","Edad","Diagnóstico","Estado","Alerta","Acciones"]} />
      </div>
    </div>
  );
}