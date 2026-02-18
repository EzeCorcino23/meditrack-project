import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/fondo_sistema_clinico.png";
import toggleIcon from "../assets/toggle.png";
import SvgIcon from "./dashboard/SvgIcon";

const navItems = [
  { id:"dashboard", label:"Dashboard",    icon:"dashboard" },
  { id:"patients",  label:"Pacientes",    icon:"patients"  },
  { id:"records",   label:"Expedientes",  icon:"records"   },
  { id:"alerts",    label:"Alertas",      icon:"alerts"    },
  { id:"users",     label:"Usuarios",     icon:"users"     },
  { id:"reports",   label:"Reportes",     icon:"reports"   },
  { id:"audit",     label:"Auditoría",    icon:"audit"     },
  { id:"ai",        label:"Asistente IA", icon:"ai"        },
];

export default function Layout({ section, setSection, children, adminName = "Admin Central", adminRole = "Administrador" }) {
  const [collapsed, setCollapsed]   = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => { localStorage.removeItem("token"); navigate("/"); };
  const SIDEBAR_W = collapsed ? 68 : 252;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes popIn { from{opacity:0;transform:translate(-50%,-50%) scale(0.88);} to{opacity:1;transform:translate(-50%,-50%) scale(1);} }
        @keyframes pulse { 0%,100%{transform:scale(1);} 50%{transform:scale(1.15);} }
        .nav-item:hover { background: rgba(37,99,235,0.12) !important; }
        .toggle-btn:hover { background: rgba(37,99,235,0.15) !important; }
        .sidebar-scroll::-webkit-scrollbar { width:4px; }
        .sidebar-scroll::-webkit-scrollbar-thumb { background:rgba(37,99,235,0.25); border-radius:4px; }
        .content-scroll::-webkit-scrollbar { width:6px; }
        .content-scroll::-webkit-scrollbar-thumb { background:rgba(30,58,138,0.18); border-radius:6px; }
      `}</style>

      {}
      <div style={{ position:"fixed", inset:0, zIndex:0 }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:`url(${bgImage})`, backgroundSize:"cover", backgroundPosition:"center" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(8,15,40,0.72) 0%,rgba(20,45,100,0.35) 100%)" }} />
      </div>

      <div style={{ position:"fixed", inset:0, zIndex:10, display:"flex" }}>

        {}
        <div className="sidebar-scroll"
          style={{ width:SIDEBAR_W, minWidth:SIDEBAR_W, height:"100%", background:"rgba(255,255,255,0.82)", backdropFilter:"blur(28px)", borderRight:"1px solid rgba(255,255,255,0.5)", boxShadow:"4px 0 30px rgba(0,0,0,0.12)", display:"flex", flexDirection:"column", transition:"width 0.25s ease, min-width 0.25s ease", overflowX:"hidden", overflowY:"auto", zIndex:20 }}>

          {}
          <div style={{ padding:"12px 10px", borderBottom:"1px solid rgba(30,58,138,0.1)", display:"flex", alignItems:"center", justifyContent:"space-between", gap:8 }}>
            {!collapsed && (
              <div style={{ display:"flex", alignItems:"center", gap:9, flex:1, minWidth:0 }}>
                <div style={{ width:32, height:32, borderRadius:9, background:"linear-gradient(135deg,#1E3A8A,#2563EB)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, boxShadow:"0 3px 10px rgba(37,99,235,0.4)" }}>
                  <SvgIcon name="heart" size={14} color="#fff" />
                </div>
                <div style={{ minWidth:0 }}>
                  <p style={{ fontSize:15, fontWeight:800, color:"#1E3A8A", lineHeight:1, fontFamily:"'Plus Jakarta Sans',sans-serif", whiteSpace:"nowrap" }}>MediTrack</p>
                  <p style={{ fontSize:10, color:"#6B7280", fontWeight:500, marginTop:1 }}>Panel Administrativo</p>
                </div>
              </div>
            )}
            <button
              className="toggle-btn"
              onClick={() => setCollapsed(c => !c)}
              title={collapsed ? "Expandir menú" : "Colapsar menú"}
              style={{ width:34, height:34, borderRadius:8, border:"1.5px solid rgba(30,58,138,0.2)", background:"rgba(37,99,235,0.08)", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, transition:"background 0.15s", marginLeft: collapsed?"auto":"0" }}>
              <img src={toggleIcon} width={18} height={18} alt="toggle" style={{ objectFit:"contain" }} />
            </button>
          </div>

          {}
          {!collapsed && (
            <div style={{ margin:"10px 12px 0", padding:"8px 10px", background:"rgba(37,99,235,0.07)", borderRadius:10, border:"1px solid rgba(37,99,235,0.15)", display:"flex", alignItems:"center", gap:8 }}>
              <div style={{ width:28, height:28, borderRadius:"50%", background:"linear-gradient(135deg,#1E3A8A,#2563EB)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <span style={{ color:"#fff", fontWeight:700, fontSize:11 }}>{adminName[0]}</span>
              </div>
              <div style={{ flex:1, minWidth:0 }}>
                <p style={{ fontSize:11, fontWeight:700, color:"#1e3a8a", fontFamily:"'Plus Jakarta Sans',sans-serif", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{adminName}</p>
                <p style={{ fontSize:10, color:"#6B7280" }}>{adminRole}</p>
              </div>
              <div style={{ width:7, height:7, borderRadius:"50%", background:"#059669", animation:"pulse 2s infinite", flexShrink:0 }} />
            </div>
          )}

          {}
          <nav style={{ padding: collapsed?"8px 0":"8px", flex:1, marginTop:6 }}>
            {!collapsed && <p style={{ fontSize:10, fontWeight:700, color:"rgba(30,58,138,0.45)", letterSpacing:"0.08em", textTransform:"uppercase", padding:"0 8px", marginBottom:4 }}>Módulos</p>}
            {navItems.map(item => (
              <button key={item.id} className="nav-item"
                onClick={() => setSection(item.id)}
                title={collapsed ? item.label : ""}
                style={{ width:"100%", display:"flex", alignItems:"center", gap: collapsed?0:9, justifyContent: collapsed?"center":"flex-start", padding: collapsed?"9px 0":"8px 10px", borderRadius:9, border:"none", cursor:"pointer", background: section===item.id?"rgba(37,99,235,0.12)":"transparent", marginBottom:2, transition:"background 0.15s", textAlign:"left", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
                <div style={{ width:30, height:30, borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", background: section===item.id?"linear-gradient(135deg,#1E3A8A,#2563EB)":"rgba(30,58,138,0.08)", flexShrink:0, transition:"background 0.2s" }}>
                  <SvgIcon name={item.icon} size={13} color={section===item.id?"#fff":"#1E40AF"} />
                </div>
                {!collapsed && <span style={{ flex:1, fontSize:12, fontWeight: section===item.id?700:500, color: section===item.id?"#1E3A8A":"#374151" }}>{item.label}</span>}
              </button>
            ))}
          </nav>

          {}
          <div style={{ padding: collapsed?"8px 0 14px":"8px 8px 14px", borderTop:"1px solid rgba(30,58,138,0.1)", display:"flex", justifyContent: collapsed?"center":"stretch" }}>
            <button onClick={() => setShowLogout(true)} title={collapsed?"Salir":""}
              style={{ width: collapsed?"auto":"100%", display:"flex", alignItems:"center", justifyContent: collapsed?"center":"flex-start", gap: collapsed?0:9, padding: collapsed?"9px":"8px 10px", borderRadius:9, border:"1.5px solid rgba(220,38,38,0.25)", cursor:"pointer", background:"rgba(254,242,242,0.6)", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
              <div style={{ width:30, height:30, borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(220,38,38,0.1)", flexShrink:0 }}>
                <SvgIcon name="logout" size={13} color="#DC2626" />
              </div>
              {!collapsed && <span style={{ fontSize:12, fontWeight:700, color:"#DC2626" }}>Salir</span>}
            </button>
          </div>
        </div>

        {}
        <div className="content-scroll" style={{ flex:1, height:"100%", overflowY:"auto", padding:"18px 28px 28px" }}>

          {}
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <div style={{ width:36, height:36, borderRadius:9, background:"rgba(37,99,235,0.12)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <SvgIcon name={navItems.find(n=>n.id===section)?.icon||"dashboard"} size={16} color="#2563EB" />
              </div>
              <div>
                <p style={{ fontSize:10, color:"rgba(255,255,255,0.55)", fontWeight:500 }}>MediTrack · Admin</p>
                <p style={{ fontSize:14, color:"#fff", fontWeight:700, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{navItems.find(n=>n.id===section)?.label}</p>
              </div>
            </div>
            <div style={{ display:"flex", gap:10, alignItems:"center" }}>
              <div style={{ position:"relative" }}>
                <div style={{ width:36, height:36, borderRadius:9, background:"rgba(255,255,255,0.15)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.25)", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}>
                  <SvgIcon name="bell" size={15} color="#fff" />
                </div>
                <span style={{ position:"absolute", top:5, right:5, width:8, height:8, borderRadius:"50%", background:"#DC2626", border:"1.5px solid rgba(8,15,40,0.6)" }} />
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:8, padding:"5px 12px 5px 6px", background:"rgba(255,255,255,0.12)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.2)", borderRadius:10, cursor:"pointer" }}>
                <div style={{ width:28, height:28, borderRadius:"50%", background:"linear-gradient(135deg,#1E3A8A,#2563EB)", display:"flex", alignItems:"center", justifyContent:"center", border:"2px solid rgba(255,255,255,0.3)" }}>
                  <span style={{ color:"#fff", fontWeight:800, fontSize:11 }}>{adminName[0]}</span>
                </div>
                <div>
                  <p style={{ fontSize:11, fontWeight:700, color:"#fff", fontFamily:"'Plus Jakarta Sans',sans-serif", lineHeight:1.2 }}>{adminName}</p>
                  <p style={{ fontSize:10, color:"rgba(255,255,255,0.6)" }}>{adminRole}</p>
                </div>
              </div>
            </div>
          </div>

          {}
          <div style={{ background:"rgba(255,255,255,0.82)", backdropFilter:"blur(24px)", border:"1px solid rgba(255,255,255,0.55)", borderRadius:20, padding:"24px 28px", boxShadow:"0 20px 60px rgba(0,0,0,0.12)", minHeight:"calc(100vh - 120px)", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
            {children}
          </div>
        </div>
      </div>

      {}
      {showLogout && (
        <div style={{ position:"fixed", inset:0, zIndex:300, background:"rgba(0,0,0,0.35)", backdropFilter:"blur(6px)" }}>
          <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", background:"rgba(255,255,255,0.88)", backdropFilter:"blur(24px)", border:"1px solid rgba(255,255,255,0.6)", borderRadius:18, padding:"40px 44px", width:380, textAlign:"center", boxShadow:"0 20px 60px rgba(0,0,0,0.2)", animation:"popIn 0.3s cubic-bezier(.22,.68,0,1.2) forwards" }}>
            <div style={{ width:56, height:56, borderRadius:"50%", background:"rgba(254,242,242,0.9)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px", border:"1.5px solid rgba(252,165,165,0.5)" }}>
              <SvgIcon name="logout" size={22} color="#DC2626" />
            </div>
            <h3 style={{ fontSize:20, fontWeight:800, background:"linear-gradient(135deg,#1E3A8A,#2563EB)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", marginBottom:8, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>¿Cerrar sesión?</h3>
            <p style={{ fontSize:14, color:"#1e3a8a", marginBottom:24, lineHeight:1.6, fontWeight:500 }}>Serás redirigido al inicio de sesión del sistema.</p>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={()=>setShowLogout(false)} style={{ flex:1, padding:"12px", borderRadius:9, border:"1.5px solid rgba(30,58,138,0.25)", background:"rgba(239,246,255,0.7)", color:"#1E3A8A", fontWeight:600, fontSize:14, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Cancelar</button>
              <button onClick={handleLogout} style={{ flex:1, padding:"12px", borderRadius:9, border:"none", background:"linear-gradient(135deg,#DC2626,#EF4444)", color:"#fff", fontWeight:700, fontSize:14, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif", boxShadow:"0 4px 14px rgba(220,38,38,0.35)" }}>Sí, salir</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}