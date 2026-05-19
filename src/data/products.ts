import servionImg from '../assets/servion-black.png';
import yarbyImg from '../assets/yarpy-black.png';
import skilioImg from '../assets/skillio-black.png';
import vendoImg from '../assets/vendo-black.png';
import hulaceImg from '../assets/hulace-black.png';
import kaunterImg from '../assets/kaunter-black.png';

export interface Product {
  title: string;
  subtitle: string;
  img: string;
  industries: string;
  features: string[];
  desc: string;
  link?: string;
}

export const products: Product[] = [
  {
    title: "SERVION",
    subtitle: "Business Operation Software",
    img: servionImg,
    industries: "RETAIL · LOGISTICS · MANUFACTURING · CONSTRUCTION",
    features: ["Multi-branch & multi-outlet", "CRM & Pipeline", "HR & Payroll", "Full Accounting", "Inventory Management", "Purchase & Procurement", "POS Integration"],
    desc: "The central operating system for your enterprise. Integrate accounting, CRM, HR, inventory, and analytics into a single, cohesive ontology.",
    link: "https://servion.my"
  },
  {
    title: "YARPY",
    subtitle: "Institution OS",
    img: yarbyImg,
    industries: "SCHOOLS · UNIVERSITIES · ACADEMIES",
    features: ["Student Registration", "Fee Collection", "Attendance Tracking", "Class Scheduling", "Parent Portal", "Academic Results", "Teacher Management"],
    desc: "Built for educational institutions to manage students, fees, attendance, and grading in one secure platform.",
    link: "https://yarpy.tech/"
  },
  {
    title: "SKILIO",
    subtitle: "Learning Management",
    img: skilioImg,
    industries: "CORPORATES · TRAINERS · NGOS",
    features: ["Course Builder", "Live Class Scheduling", "Certification Issuance", "Learner Dashboards", "Progress Tracking", "Assessment Module", "White-label Branding"],
    desc: "Deploy customized learning platforms for corporates and training providers with full assessment and tracking.",
    link: "https://skilio.my"
  },
  {
    title: "VENDO",
    subtitle: "F&B Platform",
    img: vendoImg,
    industries: "RESTAURANT · CAFÉ · FRANCHISE",
    features: ["POS (Dine-in, Takeaway)", "Kitchen Display System", "Table Management", "Online Ordering Sync", "Inventory Tracking", "Recipe Costing", "Loyalty Points"],
    desc: "The ultimate F&B management system. Handle orders, kitchen displays, and complex inventory routing in real-time.",
    link: "https://vendo.asia/"
  },
  {
    title: "HULACE",
    subtitle: "Event Connection",
    img: hulaceImg,
    industries: "NETWORKING · CONFERENCES · TRADE FAIRS",
    features: ["Event Discovery", "Ticketed RSVP", "Smart Networking", "QR Check-in", "Organiser Dashboard", "Sponsor Profiles", "Push Notifications"],
    desc: "Powering events of all scales with intelligent matchmaking, ticketing, and real-time attendee analytics."
  },
  {
    title: "KAUNTER",
    subtitle: "Healthcare OS",
    img: kaunterImg,
    industries: "PHARMACY · CLINICS · HOSPITALS",
    features: ["Patient Registration (EMR)", "Queue Management", "Doctor Consultation Notes", "Prescription Management", "Drug Inventory Alerts", "Panel Insurance Claims", "Appointment Booking"],
    desc: "A mission-critical operating system for healthcare providers, integrating EMR, queueing, and inventory."
  }
];
