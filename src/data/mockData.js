export const dashboardStats = [
  { label: "Active Expos", value: 12, icon: "expos" },
  { label: "Total Exhibitors", value: 348, icon: "exhibitors" },
  { label: "Registered Attendees", value: "4,215", icon: "attendees" },
  { label: "Booths Reserved", value: "89%", icon: "booths" },
]

export const boothTrafficData = [
  { day: "Mon", visitors: 120 },
  { day: "Tue", visitors: 190 },
  { day: "Wed", visitors: 150 },
  { day: "Thu", visitors: 210 },
  { day: "Fri", visitors: 180 },
  { day: "Sat", visitors: 260 },
  { day: "Sun", visitors: 230 },
];

export const mockExpos = [
  {
    id: 1,
    title: "Tech Innovate Expo 2026",
    date: "2026-09-15",
    location: "Karachi Expo Centre",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Global Trade Summit",
    date: "2026-08-20",
    location: "Dubai World Trade Centre",
    status: "ongoing",
  },
  {
    id: 3,
    title: "Future of Manufacturing",
    date: "2026-05-10",
    location: "Lahore Expo Centre",
    status: "completed",
  },
  {
    id: 4,
    title: "Health & Wellness Fair",
    date: "2026-10-02",
    location: "Karachi Expo Centre",
    status: "upcoming",
  },
];

export const mockBooths = [
  {
    id: 1,
    boothNumber: "A-101",
    expoTitle: "Tech Innovate Expo 2026",
    exhibitor: "Nova Robotics",
    status: "occupied",
  },
  {
    id: 2,
    boothNumber: "A-102",
    expoTitle: "Tech Innovate Expo 2026",
    exhibitor: null,
    status: "available",
  },
  {
    id: 3,
    boothNumber: "B-201",
    expoTitle: "Global Trade Summit",
    exhibitor: "Zenith Textiles",
    status: "reserved",
  },
  {
    id: 4,
    boothNumber: "B-202",
    expoTitle: "Global Trade Summit",
    exhibitor: null,
    status: "available",
  },
];

export const mockSchedule = [
  {
    id: 1,
    sessionTitle: "Opening Keynote: The Future of Expos",
    speaker: "Ayesha Raza",
    date: "2026-09-15",
    startTime: "09:00",
    endTime: "10:00",
    location: "Main Hall",
  },
  {
    id: 2,
    sessionTitle: "AI in Trade Shows: A Panel Discussion",
    speaker: "Bilal Khan",
    date: "2026-09-15",
    startTime: "10:30",
    endTime: "11:30",
    location: "Conference Room A",
  },
  {
    id: 3,
    sessionTitle: "Sustainable Exhibition Design",
    speaker: "Sara Malik",
    date: "2026-09-15",
    startTime: "13:00",
    endTime: "14:00",
    location: "Conference Room B",
  },
];

export const mockExhibitors = [
  {
    id: 1,
    companyName: "Nova Robotics",
    contactName: "Imran Sheikh",
    email: "imran@novarobotics.com",
    expoTitle: "Tech Innovate Expo 2026",
    productsServices: "Industrial automation robots",
    status: "approved",
    boothNumber: "A-101",
  },
  {
    id: 2,
    companyName: "Zenith Textiles",
    contactName: "Hina Aslam",
    email: "hina@zenithtextiles.com",
    expoTitle: "Global Trade Summit",
    productsServices: "Export-grade fabrics and garments",
    status: "approved",
    boothNumber: "B-201",
  },
  {
    id: 3,
    companyName: "Greenline Foods",
    contactName: "Usman Tariq",
    email: "usman@greenlinefoods.com",
    expoTitle: "Tech Innovate Expo 2026",
    productsServices: "Organic packaged foods",
    status: "pending",
    boothNumber: null,
  },
  {
    id: 4,
    companyName: "Skyline Furnishings",
    contactName: "Ayesha Noor",
    email: "ayesha@skylinefurnishings.com",
    expoTitle: "Global Trade Summit",
    productsServices: "Modular office furniture",
    status: "pending",
    boothNumber: null,
  },
  {
    id: 5,
    companyName: "Bright Future Toys",
    contactName: "Kamran Ali",
    email: "kamran@brightfuturetoys.com",
    expoTitle: "Health & Wellness Fair",
    productsServices: "Educational toys",
    status: "rejected",
    boothNumber: null,
  },
];