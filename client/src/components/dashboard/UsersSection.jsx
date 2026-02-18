import SvgIcon from "./SvgIcon";
import TableSkeleton from "./TableSkeleton";
import { sc } from "./styles";

export default function Users() {
  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:24 }}>
        <div><h2 style={sc.sectionTitle}>Gestión de Usuarios</h2><p style={sc.sectionSub}>Control de roles y permisos del sistema</p></div>
        <button style={sc.primaryBtn}><SvgIcon name="plus" size={14} color="#fff" /> Nuevo Usuario</button>
      </div>
      <div style={sc.tableCard}>
        <TableSkeleton cols={["Nombre","Rol","Correo","Estado","Acciones"]} />
      </div>
    </div>
  );
}