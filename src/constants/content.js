// file: src/constants/content.js
import { FaCode, FaDatabase, FaBolt, FaLaptopCode, FaChalkboardTeacher, FaBuilding, FaHandshake } from 'react-icons/fa';

export const schoolInfo = {
  name: "Universitas ABC",
  shortName: "ABC",
  tagline: "Membangun Masa Depan Melalui Inovasi dan Teknologi",
  description: "Universitas terdepan yang mengintegrasikan teknologi modern dengan pendidikan berkualitas tinggi untuk menciptakan lulusan yang siap menghadapi tantangan global.",
  established: "1998",
  accreditation: "A",
  contact: {
    phone: "+62 21 8888 9999",
    whatsapp: "+62 812 3456 7890",
    email: "info@abc.ac.id",
    admissions: "admissions@abc.ac.id",
    address: "Jl. Teknologi No. 123, Jakarta Selatan 12950",
    website: "https://www.abc.ac.id"
  },
  social: {
    facebook: "https://facebook.com/abc.official",
    twitter: "https://twitter.com/abc_official",
    instagram: "https://instagram.com/abc.official",
    linkedin: "https://linkedin.com/school/abc-jakarta",
    youtube: "https://youtube.com/@ABCJakarta"
  }
};

export const features = [
  {
    id: 1,
    icon: FaLaptopCode,
    title: "Kurikulum Berbasis Industri 4.0",
    description: "Pembelajaran terkini dengan teknologi AI, Machine Learning, Cloud Computing, dan Internet of Things yang sesuai kebutuhan industri global.",
    gradient: "from-blue-500 to-purple-600",
    details: [
      "Curriculum berbasis KKNI terbaru",
      "Sertifikasi internasional terintegrasi",
      "Project-based learning methodology",
      "Industry 4.0 technology integration"
    ]
  },
  {
    id: 2,
    icon: FaChalkboardTeacher,
    title: "Dosen Expert & Praktisi",
    description: "Tim pengajar terdiri dari akademisi berpengalaman dan praktisi industri dengan track record di perusahaan global terkemuka.",
    gradient: "from-green-500 to-teal-600",
    details: [
      "95% bergelar S2/S3 dari universitas ternama",
      "Pengalaman industri 10+ tahun",
      "Publikasi jurnal internasional aktif",
      "Certified professionals & consultants"
    ]
  },
  {
    id: 3,
    icon: FaBuilding,
    title: "Smart Campus & Lab Modern",
    description: "Fasilitas pembelajaran berstandar internasional dengan teknologi terdepan untuk mendukung riset dan pengembangan inovasi.",
    gradient: "from-purple-500 to-pink-600",
    details: [
      "Smart classroom dengan IoT integration",
      "Research center & innovation lab",
      "High-performance computing facility",
      "Modern co-working & collaboration space"
    ]
  },
  {
    id: 4,
    icon: FaHandshake,
    title: "Global Industry Partnership",
    description: "Kerjasama strategis dengan 200+ perusahaan multinasional dan startup unicorn untuk program magang dan penempatan kerja.",
    gradient: "from-orange-500 to-red-600",
    details: [
      "Job guarantee program 95% success rate",
      "Exclusive internship dengan tech giants",
      "Industry mentorship & career coaching",
      "Alumni network di 50+ negara"
    ]
  }
];

export const programs = [
  {
    id: 1,
    icon: FaCode,
    title: "Teknik Informatika",
    subtitle: "Computer Science & AI",
    description: "Program studi yang fokus pada pengembangan software, artificial intelligence, cybersecurity, dan sistem informasi enterprise dengan pendekatan praktis dan industry-ready.",
    // Direct Unsplash URL dengan parameter optimized
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "4 Tahun (8 Semester)",
    degree: "S1",
    accreditation: "A",
    students: "2,500+",
    jobRate: "98%",
    gradient: "from-blue-500 to-purple-600",
    careerPaths: [
      "Software Engineer",
      "Data Scientist", 
      "AI/ML Engineer",
      "Cybersecurity Specialist",
      "Full-Stack Developer",
      "DevOps Engineer"
    ],
    salary: "Rp 8-25 juta/bulan"
  },
  {
    id: 2,
    icon: FaDatabase,
    title: "Sistem Informasi",
    subtitle: "Business Intelligence & Analytics",
    description: "Menggabungkan teknologi informasi dengan manajemen bisnis untuk menciptakan solusi digital yang inovatif dan mengoptimalkan proses bisnis enterprise.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "4 Tahun (8 Semester)",
    degree: "S1",
    accreditation: "A",
    students: "1,800+",
    jobRate: "96%",
    gradient: "from-green-500 to-teal-600",
    careerPaths: [
      "Business Analyst",
      "IT Consultant",
      "System Analyst",
      "Product Manager",
      "Digital Transformation Specialist",
      "Data Analyst"
    ],
    salary: "Rp 7-20 juta/bulan"
  },
  {
    id: 3,
    icon: FaBolt,
    title: "Teknik Elektro",
    subtitle: "IoT & Renewable Energy",
    description: "Mempelajari sistem kelistrikan, elektronika, renewable energy, dan teknologi IoT untuk masa depan berkelanjutan dengan fokus pada smart city solutions.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "4 Tahun (8 Semester)",
    degree: "S1",
    accreditation: "B+",
    students: "1,200+",
    jobRate: "94%",
    gradient: "from-orange-500 to-red-600",
    careerPaths: [
      "Electrical Engineer",
      "Power Systems Engineer",
      "IoT Solutions Developer",
      "Renewable Energy Specialist",
      "Automation Engineer",
      "Smart Grid Engineer"
    ],
    salary: "Rp 6-18 juta/bulan"
  }
];

export const facilities = [
  {
    id: 1,
    name: "Perpustakaan Digital",
    description: "Koleksi 50,000+ buku digital dan jurnal internasional dengan akses 24/7 untuk mahasiswa dan dosen.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Academic"
  },
  {
    id: 2,
    name: "Laboratorium AI & Machine Learning",
    description: "Fasilitas computing dengan GPU servers untuk research dan pembelajaran artificial intelligence.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Technology"
  },
  {
    id: 3,
    name: "Auditorium Modern",
    description: "Kapasitas 1000 orang dengan teknologi audio-visual terkini untuk seminar dan acara besar.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Events"
  },
  {
    id: 4,
    name: "Innovation Hub & Coworking",
    description: "Ruang kolaborasi modern untuk startup mahasiswa dan project-based learning.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Innovation"
  }
];

// Background images untuk sections
export const backgroundImages = {
  hero: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  about: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  testimonials: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
};

// Undraw illustrations
export const illustrations = {
  education: "https://undraw.co/api/illustrations/education",
  graduation: "https://undraw.co/api/illustrations/graduation",
  online_learning: "https://undraw.co/api/illustrations/online_learning",
  professor: "https://undraw.co/api/illustrations/professor",
  certificate: "https://undraw.co/api/illustrations/certificate",
  career_progress: "https://undraw.co/api/illustrations/career_progress"
};