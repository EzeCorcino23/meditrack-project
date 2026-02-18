import TableSkeleton from "./TableSkeleton";
import { sc } from "./styles";

export default function Audit() {
  return (
    <div>
      <h2 style={sc.sectionTitle}>Auditoría y Trazabilidad</h2>
      <p style={sc.sectionSub}>Registro de accesos y acciones en el sistema</p>
      <div style={sc.tableCard}>
        <TableSkeleton cols={["Usuario","Acción","Hora","Tipo"]} />
      </div>
    </div>
  );
}