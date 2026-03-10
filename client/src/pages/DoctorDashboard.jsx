import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import DashboardSection     from "../components/doctor/DashboardSection";
import PatientsSection      from "../components/doctor/PatientsSection";
import RecordsSection       from "../components/doctor/RecordsSection";
import ConsultationsSection from "../components/doctor/ConsultationsSection";
import AlertsSection        from "../components/doctor/AlertsSection";
import MedicationsSection   from "../components/doctor/MedicationsSection";
import ChronicSection       from "../components/doctor/ChronicSection";
import VitalsSection        from "../components/doctor/VitalsSection";
import NotesSection         from "../components/doctor/NotesSection";
import LabResultsSection    from "../components/doctor/LabResultsSection";
import NotificationsSection from "../components/doctor/NotificationsSection";
import ReportsSection       from "../components/doctor/ReportsSection";
import AIAssistantSection   from "../components/doctor/AIAssistantSection";
import ProfileSection       from "../components/doctor/ProfileSection";
import FirstLoginModal      from "../components/modals/FirstLoginModal";

const sectionMap = {
  dashboard:     DashboardSection,
  patients:      PatientsSection,
  records:       RecordsSection,
  consultations: ConsultationsSection,
  alerts:        AlertsSection,
  medications:   MedicationsSection,
  chronic:       ChronicSection,
  vitals:        VitalsSection,
  notes:         NotesSection,
  lab:           LabResultsSection,
  notifications: NotificationsSection,
  reports:       ReportsSection,
  ai:            AIAssistantSection,
  profile:       ProfileSection,
};

const doctorNavItems = [
  { id:"dashboard",     label:"Dashboard",           icon:"dashboard" },
  { id:"patients",      label:"Pacientes",            icon:"patients"  },
  { id:"records",       label:"Expedientes",          icon:"records"   },
  { id:"consultations", label:"Consultas",            icon:"calendar"  },
  { id:"alerts",        label:"Alertas Clínicas",     icon:"alerts"    },
  { id:"medications",   label:"Medicamentos",         icon:"pill"      },
  { id:"chronic",       label:"Condiciones Crónicas", icon:"activity"  },
  { id:"vitals",        label:"Signos Vitales",       icon:"heart"     },
  { id:"notes",         label:"Notas Clínicas",       icon:"records"   },
  { id:"lab",           label:"Laboratorio",          icon:"lab"       },
  { id:"notifications", label:"Notificaciones",       icon:"bell"      },
  { id:"reports",       label:"Reportes",             icon:"reports"   },
  { id:"ai",            label:"Asistente IA",         icon:"ai"        },
  { id:"profile",       label:"Mi Perfil",            icon:"users"     },
];

export default function DoctorDashboard() {
  const [section, setSection]               = useState("dashboard");
  const [showFirstLogin, setShowFirstLogin] = useState(false);
  const ActiveSection = sectionMap[section] || DashboardSection;
  const doctorName = localStorage.getItem("userName") || "Doctor";

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
        adminName={doctorName}
        adminRole="Médico"
        navItems={doctorNavItems}
        accentColor="#059669"
      >
        <ActiveSection />
      </Layout>
      {showFirstLogin && (
        <FirstLoginModal role="doctor" onLater={() => setShowFirstLogin(false)} onDone={() => setShowFirstLogin(false)} />
      )}
    </>
  );
}