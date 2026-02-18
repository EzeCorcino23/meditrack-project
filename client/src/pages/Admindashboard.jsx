import { useState } from "react";
import Layout from "../components/Layout";

import DashboardSection  from "../components/dashboard/DashboardSection";
import PatientsSection   from "../components/dashboard/PatientsSection";
import RecordsSection    from "../components/dashboard/RecordsSection";
import AlertsSection     from "../components/dashboard/AlertsSection";
import UsersSection      from "../components/dashboard/UsersSection";
import ReportsSection    from "../components/dashboard/ReportsSection";
import AuditSection      from "../components/dashboard/AuditSection";
import AIAssistantSection from "../components/dashboard/AIAssistantSection";

const sectionMap = {
  dashboard: DashboardSection,
  patients:  PatientsSection,
  records:   RecordsSection,
  alerts:    AlertsSection,
  users:     UsersSection,
  reports:   ReportsSection,
  audit:     AuditSection,
  ai:        AIAssistantSection,
};

export default function AdminDashboard() {
  const [section, setSection] = useState("dashboard");
  const ActiveSection = sectionMap[section] || DashboardSection;

  return (
    <Layout section={section} setSection={setSection}>
      <ActiveSection />
    </Layout>
  );
}