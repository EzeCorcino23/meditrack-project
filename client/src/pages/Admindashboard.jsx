import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import DashboardSection  from "../components/admin/DashboardSection";
import UsersSection      from "../components/admin/UsersSection";
import RolesSection      from "../components/admin/RolesSection";
import AuditSection      from "../components/admin/AuditSection";
import ReportsSection    from "../components/admin/ReportsSection";
import ConfigSection     from "../components/admin/ConfigSection";
import AIAssistantSection from "../components/admin/AIAssistantSection";
import FirstLoginModal   from "../components/modals/FirstLoginModal";
import ClinicSetupModal  from "../components/modals/ClinicSetupModal";

const sectionMap = {
  dashboard: DashboardSection,
  users:     UsersSection,
  roles:     RolesSection,
  audit:     AuditSection,
  reports:   ReportsSection,
  config:    ConfigSection,
  ai:        AIAssistantSection,
};

const adminNavItems = [
  { id:"dashboard", label:"Dashboard",        icon:"dashboard" },
  { id:"users",     label:"Usuarios",          icon:"users"     },
  { id:"roles",     label:"Roles y Permisos",  icon:"shield"    },
  { id:"audit",     label:"Auditoría",         icon:"audit"     },
  { id:"reports",   label:"Reportes",          icon:"reports"   },
  { id:"config",    label:"Configuración",     icon:"settings"  },
  { id:"ai",        label:"Asistente IA",      icon:"ai"        },
];

export default function AdminDashboard() {
  const [section, setSection]               = useState("dashboard");
  const [showFirstLogin, setShowFirstLogin] = useState(false);
  const [showClinicSetup, setShowClinicSetup] = useState(false);
  const ActiveSection = sectionMap[section] || DashboardSection;
  const adminName = localStorage.getItem("userName") || "Administrador";

  useEffect(() => {
    const isFirst = localStorage.getItem("firstLogin");
    if (isFirst === "true") {
      setShowClinicSetup(true);
      localStorage.removeItem("firstLogin");
    }
  }, []);

  return (
    <>
      <Layout
        section={section}
        setSection={setSection}
        adminName={adminName}
        adminRole="Administrador"
        navItems={adminNavItems}
        accentColor="#2563EB"
      >
        <ActiveSection />
      </Layout>

      {showClinicSetup && (
        <ClinicSetupModal onDone={() => { setShowClinicSetup(false); setShowFirstLogin(true); }} />
      )}
      {showFirstLogin && (
        <FirstLoginModal role="admin" onLater={() => setShowFirstLogin(false)} onDone={() => setShowFirstLogin(false)} />
      )}
    </>
  );
}