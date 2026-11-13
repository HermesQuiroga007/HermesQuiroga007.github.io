import movilApi from '../assets/projects/apl-movil/movilapi.png';
import movilImpresoraTermica from '../assets/projects/apl-movil/movilimpresoratermica.png';
import movilInventario from '../assets/projects/apl-movil/movilinventario.png';
import movilMenus from '../assets/projects/apl-movil/movilmenus.png';
import movilSincronizarDat from '../assets/projects/apl-movil/movilsincronizardat.png';
import verificarFacturaMovil from '../assets/projects/apl-movil/verifiicarfacturamovil.png';

import cajaStatitics from '../assets/projects/inmobiliaria/cajastatitics.png';
import carteraGestion from '../assets/projects/inmobiliaria/carteragestion.png';
import projectionsStatitics from '../assets/projects/inmobiliaria/projectionsstatitics.png';

import ajustes from '../assets/projects/verificador/ajustes.png';
import verHome from '../assets/projects/verificador/home.png';
import verificador1 from '../assets/projects/verificador/verificador1.png';
import verificador2 from '../assets/projects/verificador/verificador2.png';
import verificador3 from '../assets/projects/verificador/verificador3.png';

export interface Project {
  id: string;
  title: string;
  company: string;
  role: string;
  coverImage: string | null;
  images: string[];
  tags: string[];
  shortDescription: string;
  problem: string;
  solution: string;
  keyDecisions: string[];
  modules: string[];
  hasImages: boolean;
}

export const projects: Project[] = [
  {
    id: 'apl-mobile',
    title: 'APL Mobile Control (PDA)',
    company: 'APL · Logistics / Commercial',
    role: 'Lead Developer',
    coverImage: movilMenus,
    images: [movilMenus, movilInventario, movilApi, verificarFacturaMovil, movilSincronizarDat, movilImpresoraTermica],
    tags: ['Flutter', 'Dart', 'SQLite', 'REST API', 'Provider', 'Go Router'],
    shortDescription:
      'Cross-platform Flutter app for PDA/Android devices acting as a mobile extension of the APL Plus ERP — enabling warehouse teams to run inventory, billing, and logistics directly from the floor.',
    problem:
      'Field warehouse teams needed to execute ERP operations — inventory counts, merchandise transfers, invoice verification — directly from the warehouse floor, without depending on a desktop computer.',
    solution:
      'A cross-platform Flutter application for PDA and Android devices, designed as a mobile extension of the APL Plus ERP. The app works in low-connectivity environments and synchronizes with the central system through an atomic offline-first strategy.',
    keyDecisions: [
      'Offline-first architecture: the entire working dataset lives in a local SQLite database (sqflite), keeping the app functional with no connectivity.',
      'Atomic DB sync via streaming ZIP decompression — the DAT database is downloaded as a compressed archive, decompressed by streaming (without loading into RAM), and swapped atomically with automatic rollback on failure. Critical for low-end PDA devices.',
      'IMEI-based device authentication with per-user, per-submenu permissions, ensuring only authorized devices and users access each feature.',
      'Physical barcode scanner integration (native + camera fallback) for all scanning operations across modules.',
      'Bluetooth/WiFi label printer integration for on-the-spot price label printing (Habladores).',
    ],
    modules: [
      'Inventory — physical count via barcode scanning with validation and consolidation',
      'Merchandise Transfers — creation, verification, and dispatch with partial transfer support',
      'Purchase Order Receiving — reception validated against POs, handling combos and inactive products',
      'Invoice Verifier — scan products against a sales invoice, comparing physical vs. billed quantities with decimal weight support',
      'Price Checker — instant price, promotions, and discount lookup by barcode',
      'Habladores (Label Printer) — price label generation and printing for POS displays',
      'Sync Engine — atomic offline DB replacement with streaming decompression and auto-rollback',
      'Device Admin — IMEI registration, branch/register config, printer management, developer options',
    ],
    hasImages: true,
  },
  {
    id: 'inmobiliaria',
    title: 'Real Estate Management System',
    company: 'APL · Real Estate Sector',
    role: 'Lead Full Stack Developer',
    coverImage: projectionsStatitics,
    images: [projectionsStatitics, carteraGestion, cajaStatitics],
    tags: ['React', 'TypeScript', '.NET Core', 'C#', 'SQL Server', 'SignalR', 'Leaflet', 'Docker', 'Clean Architecture', 'Zustand'],
    shortDescription:
      'Full-stack web platform covering the complete commercial cycle of a real estate company — from client prospecting to lot delivery, with a custom amortization engine and a desktop-style windowed UI.',
    problem:
      'A real estate company needed end-to-end management of their entire commercial cycle: client prospecting, lot sales, financing, collections, commissions, and post-sale delivery — all in one integrated platform.',
    solution:
      'A full-stack web application built with React + TypeScript on the frontend and ASP.NET Core with Clean Architecture on the backend. The system handles the complete sales pipeline from pre-registration to lot handover, with a fully custom loan payment engine and real-time updates.',
    keyDecisions: [
      'Desktop-style UI inside the browser: the menu opens tabs, each tab manages a tree of movable child windows with parent-child relationships, close-blocking when children are open, and z-index managed by a Zustand store. Built entirely from scratch — not a standard web UI pattern.',
      'Strict Clean Architecture on the backend (Domain → Application → Infrastructure → API): use cases have zero infrastructure dependencies, everything is wired through interfaces.',
      'Custom LoanPaymentEngine: calculates amortization schedules, current and default interest, and distributes payments across principal, interest, and other concepts. No third-party financial library.',
      'Business errors travel as ProblemDetails (RFC 9457) with stable domain error codes, allowing the frontend to handle them consistently without parsing error strings.',
      'Real-time lot availability updates via SignalR, keeping the vendor portal and back-office in sync.',
      'Geospatial lot management with polygon drawing via Leaflet — agents can see and interact with actual lot shapes on a map.',
      'Containerized with Docker + docker-compose, CI/CD through GitHub Actions.',
    ],
    modules: [
      'Territory Management — projects, stages, lots with geospatial polygons (Leaflet)',
      'Sales Pipeline — pre-registration → reservation → earnest money → contract, with configurable templates',
      'Portfolio & Credit — amortization, payment schedules, default interest, refinancing, cancellations',
      'Treasury — daily cash register, movements, closes, categories, discrepancy reconciliation',
      'Commissions — calculation and payment to commercial advisors',
      'Post-Sale — escrituración and physical lot delivery tracking',
      'Supplier Debt — registration of third-party obligations and payments',
      'PQR — complaints, inquiries, and claims management with categories and departments',
      'Vendor Portal — independent view with real-time lot availability',
      'Administration — roles, granular permissions, users, company config, OTP for critical authorizations',
    ],
    hasImages: true,
  },
  {
    id: 'verificador',
    title: 'Price Verification System',
    company: 'Engineering Degree Internship',
    role: 'Sole Developer',
    coverImage: verHome,
    images: [verHome, verificador1, verificador2, verificador3, ajustes],
    tags: ['Flutter', 'Dart', 'REST API', 'SQLite'],
    shortDescription:
      'Mobile app for instant price verification via barcode scanning — integrated with store pricing APIs so floor staff can look up prices, promotions, and product details in seconds.',
    problem:
      'Manual price verification in retail stores was error-prone and time-consuming for staff. Field employees needed a quick, reliable tool to check prices on the floor without walking back to a register.',
    solution:
      'A Flutter mobile application that integrates with the store\'s pricing APIs to provide instant price lookups. Staff scan any barcode and immediately see the price, active promotions, and product details.',
    keyDecisions: [
      'Barcode scanner integration for real-time lookups — scan triggers an immediate API call with result displayed in under a second.',
      'Clean settings panel for endpoint configuration, allowing deployment to different store environments without code changes.',
      'Offline-capable lookup cache using SQLite to handle connectivity gaps during floor operations.',
    ],
    modules: [
      'Barcode Scanner — camera-based scanning with instant API lookup',
      'Price Display — public price, promotional price, and applicable discounts',
      'Product Details — code, description, and stock information',
      'Settings — endpoint and environment configuration',
      'Offline Cache — recent lookups available without connectivity',
    ],
    hasImages: true,
  },
  {
    id: 'crm-infocomunicaciones',
    title: 'CRM Internal System',
    company: 'Info Comunicaciones',
    role: 'Web Developer',
    coverImage: null,
    images: [],
    tags: ['JavaScript', 'Web Development', 'CRM'],
    shortDescription:
      'Maintenance and feature development on an internal CRM system — implemented new modules for license renewal tracking, client management, and commercial proposals, with improvements to key architecture layers.',
    problem:
      'The company needed optimized management of software license renewals, client tracking, and commercial proposals within their existing internal CRM platform.',
    solution:
      'Contributed to the ongoing development and maintenance of the internal CRM: delivered new functional modules, resolved bugs, and improved the architecture of key layers to increase maintainability.',
    keyDecisions: [
      'Improved architecture on existing layers for better separation of concerns and maintainability.',
      'Implemented new modules while preserving backward compatibility with the existing codebase.',
    ],
    modules: [
      'License Renewal Tracking — monitoring and alerts for software license expirations',
      'Client Management — client records and interaction history',
      'Commercial Proposals — proposal generation and tracking',
    ],
    hasImages: false,
  },
];
