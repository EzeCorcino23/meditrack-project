import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import DashboardSection     from "../components/reception/DashboardSection";
import PatientsSection      from "../components/reception/PatientsSection";
import AppointmentsSection  from "../components/reception/AppointmentsSection";
import NotificationsSection from "../components/reception/NotificationsSection";
import AlertsSection        from "../components/reception/AlertsSection";
import AIAssistantSection   from "../components/reception/AIAssistantSection";
import ProfileSection       from "../components/reception/ProfileSection";
import FirstLoginModal      from "../components/modals/FirstLoginModal";

const sectionMap = {
  dashboard:     DashboardSection,
  patients:      PatientsSection,
  appointments:  AppointmentsSection,
  notifications: NotificationsSection,
  alerts:        AlertsSection,
  ai:            AIAssistantSection,
  profile:       ProfileSection,
};

const receptionNavItems = [
  { id:"dashboard",     label:"Dashboard",       icon:"dashboard" },
  { id:"patients",      label:"Pacientes",        icon:"patients"  },
  { id:"appointments",  label:"Citas / Turnos",   icon:"calendar"  },
  { id:"notifications", label:"Notificaciones",   icon:"bell"      },
  { id:"alerts",        label:"Alertas",          icon:"alerts"    },
  { id:"ai",            label:"Asistente IA",     icon:"ai"        },
  { id:"profile",       label:"Mi Perfil",        icon:"users"     },
];

export default function ReceptionDashboard() {
  const [section, setSection]               = useState("dashboard");
  const [showFirstLogin, setShowFirstLogin] = useState(false);
  const ActiveSection = sectionMap[section] || DashboardSection;
  const userName = localStorage.getItem("userName") || "Recepción";

  useEffect(() => {
    const isFirst = localStorage.getItem("firstLogin");
    if (isFirst === "true") {
      setShowFirstLogin(true);
      localStorage.removeItem("firstLogin");
    }
  }, []);

  return (
    <>
      <Layout
        section={section}
        setSection={setSection}
        adminName={userName}
        adminRole="Recepción"
        navItems={receptionNavItems}
        accentColor="#0891B2"
      >
        <ActiveSection />
      </Layout>
      {showFirstLogin && (
        <FirstLoginModal role="reception" onLater={() => setShowFirstLogin(false)} onDone={() => setShowFirstLogin(false)} />
      )}
    </>
  );
}