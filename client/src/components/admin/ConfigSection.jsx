import { sc } from "../dashboard/styles";

export default function ConfigSection() {
  const fields = [
    { label:"Nombre de la clínica *", placeholder:"Clínica San José"   },
    { label:"Especialidad",           placeholder:"Medicina General"    },
    { label:"Dirección",              placeholder:"Calle, ciudad"       },
    { label:"Teléfono *",             placeholder:"809-000-0000"        },
    { label:"Correo de contacto *",   placeholder:"clinica@correo.com" },
    { label:"Sitio web",              placeholder:"www.clinica.com"     },
  ];

  return (
    <div>
      <h2 style={sc.sectionTitle}>Configuración</h2>
      <p style={sc.sectionSub}>Datos de la clínica y parámetros del sistema</p>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"14px 16px" }}>
        {fields.map((f, i) => (
          <div key={i}>
            <label style={{ display:"block", fontSize:11, fontWeight:700, color:"#1e3a8a", marginBottom:5 }}>{f.label}</label>
            <input placeholder={f.placeholder} style={{ width:"100%", padding:"10px 13px", border:"1.5px solid rgba(200,210,255,0.7)", borderRadius:9, fontSize:13, color:"#111827", background:"rgba(255,255,255,0.8)", outline:"none", boxSizing:"border-box", fontFamily:"'Plus Jakarta Sans',sans-serif" }} />
          </div>
        ))}
      </div>
      <div style={{ marginTop:20, display:"flex", gap:10 }}>
        <button style={sc.primaryBtn}>Guardar cambios</button>
        <button style={sc.outlineBtn}>Cancelar</button>
      </div>
    </div>
  );
}