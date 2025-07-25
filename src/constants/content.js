// file: src/constants/content.js
import { programAssets, testimonialAssets } from './assets';

export const schoolInfo = {
  name: "Universitas Teknologi Nusantara",
  shortName: "UTN",
  tagline: "Membangun Masa Depan Melalui Inovasi dan Teknologi",
  description: "Universitas terdepan yang mengintegrasikan teknologi modern dengan pendidikan berkualitas tinggi untuk menciptakan lulusan yang siap menghadapi tantangan global.",
  established: "1998",
  accreditation: "A",
  contact: {
    phone: "+62 21 8888 9999",
    whatsapp: "+62 812 3456 7890",
    email: "info@utn.ac.id",
    admissions: "admissions@utn.ac.id",
    address: "Jl. Teknologi No. 123, Jakarta Selatan 12950",
    website: "https://www.utn.ac.id"
  },
  social: {
    facebook: "https://facebook.com/utn.official",
    twitter: "https://twitter.com/utn_official",
    instagram: "https://instagram.com/utn.official",
    linkedin: "https://linkedin.com/school/utn-jakarta",
    youtube: "https://youtube.com/@UTNJakarta"
  }
};

export const features = [
  {
    id: 1,
    title: "Kurikulum Terkini",
    description: "Kurikulum yang selalu diperbarui mengikuti perkembangan industri dan teknologi terbaru dengan standar internasional.",
    icon: "📚",
    details: [
      "Curriculum berbasis KKNI",
      "Sertifikasi internasional",
      "Project-based learning",
      "Industry 4.0 integration"
    ]
  },
  {
    id: 2,
    title: "Dosen Berkualitas",
    description: "Didukung oleh dosen-dosen berpengalaman dengan latar belakang akademis dan industri yang solid.",
    icon: "👨‍🏫",
    details: [
      "90% bergelar S2/S3",
      "Pengalaman industri 10+ tahun",
      "Publikasi internasional",
      "Certified professionals"
    ]
  },
  {
    id: 3,
    title: "Fasilitas Modern",
    description: "Laboratorium dan fasilitas pembelajaran dengan teknologi terdepan untuk mendukung proses belajar mengajar.",
    icon: "🏢",
    details: [
      "Lab komputer terbaru",
      "Smart classroom",
      "Research center",
      "Co-working space"
    ]
  },
  {
    id: 4,
    title: "Kemitraan Industri",
    description: "Kerjasama dengan 200+ perusahaan nasional dan multinasional untuk program magang dan penempatan kerja.",
    icon: "🤝",
    details: [
      "Job guarantee program",
      "Internship placement",
      "Industry mentorship",
      "Career development"
    ]
  }
];

export const programs = [
  {
    id: 1,
    title: "Teknik Informatika",
    description: "Program studi yang fokus pada pengembangan software, artificial intelligence, cybersecurity, dan sistem informasi enterprise.",
    image: programAssets.teknikInformatika,
    duration: "4 Tahun (8 Semester)",
    degree: "S1",
    accreditation: "A",
    careerPaths: [
      "Software Engineer",
      "Data Scientist", 
      "AI/ML Engineer",
      "Cybersecurity Specialist",
      "Full-Stack Developer"
    ],
    facilities: [
      "AI & Machine Learning Lab",
      "Cybersecurity Lab", 
      "Software Development Studio",
      "Cloud Computing Lab"
    ]
  },
  {
    id: 2,
    title: "Sistem Informasi",
    description: "Menggabungkan teknologi informasi dengan manajemen bisnis untuk menciptakan solusi digital yang inovatif.",
    image: programAssets.sistemInformasi,
    duration: "4 Tahun (8 Semester)",
    degree: "S1",
    accreditation: "A",
    careerPaths: [
      "Business Analyst",
      "IT Consultant",
      "System Analyst",
      "Product Manager",
      "Digital Transformation Specialist"
    ],
    facilities: [
      "Business Intelligence Lab",
      "ERP System Lab",
      "Digital Marketing Lab",
      "Startup Incubator"
    ]
  },
  {
    id: 3,
    title: "Teknik Elektro",
    description: "Mempelajari sistem kelistrikan, elektronika, renewable energy, dan teknologi IoT untuk masa depan berkelanjutan.",
    image: programAssets.teknikElektro,
    duration: "4 Tahun (8 Semester)",
    degree: "S1",
    accreditation: "B+",
    careerPaths: [
      "Electrical Engineer",
      "Power Systems Engineer",
      "IoT Developer",
      "Renewable Energy Specialist",
      "Automation Engineer"
    ],
    facilities: [
      "Power Systems Lab",
      "Electronics Lab",
      "IoT & Embedded Systems Lab",
      "Renewable Energy Lab"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Wijaya",
    role: "Senior Software Engineer",
    company: "Google Singapore",
    year: "Lulusan 2020",
    program: "Teknik Informatika",
    content: "UTN memberikan pondasi yang sangat kuat dalam teknologi. Kurikulum yang praktis dan dosen yang berpengalaman membuat saya siap menghadapi tantangan di perusahaan teknologi global. Project-based learning membantu saya membangun portfolio yang kuat.",
    avatar: testimonialAssets.avatar1,
    rating: 5,
    currentSalary: "IDR 45,000,000/bulan"
  },
  {
    id: 2,
    name: "Ahmad Rahman",
    role: "Senior Data Scientist",
    company: "Tokopedia",
    year: "Lulusan 2019",
    program: "Teknik Informatika",
    content: "Fasilitas laboratorium yang lengkap dan project-based learning di UTN sangat membantu dalam mengembangkan skill praktis yang dibutuhkan industri. Mentorship dari alumni yang sudah berkarir juga sangat berharga.",
    avatar: testimonialAssets.avatar2,
    rating: 5,
    currentSalary: "IDR 35,000,000/bulan"
  },
  {
    id: 3,
    name: "Maya Sari",
    role: "Product Manager",
    company: "Gojek",
    year: "Lulusan 2021",
    program: "Sistem Informasi",
    content: "Bukan hanya technical skills, UTN juga mengajarkan soft skills yang sangat penting dalam berkarir. Program magang dan kemitraan industri membantu saya mendapatkan pengalaman kerja bahkan sebelum lulus. Highly recommended!",
    avatar: testimonialAssets.avatar3,
    rating: 5,
    currentSalary: "IDR 30,000,000/bulan"
  }
];

export const achievements = [
  {
    id: 1,
    title: "25+",
    subtitle: "Tahun Pengalaman",
    description: "Lebih dari 25 tahun menghasilkan lulusan berkualitas"
  },
  {
    id: 2,
    title: "15,000+",
    subtitle: "Alumni Sukses",
    description: "Alumni yang berkarir di perusahaan terkemuka"
  },
  {
    id: 3,
    title: "200+",
    subtitle: "Mitra Industri",
    description: "Kerjasama dengan perusahaan nasional & multinasional"
  },
  {
    id: 4,
    title: "95%",
    subtitle: "Job Placement",
    description: "Tingkat penempatan kerja dalam 6 bulan setelah lulus"
  }
];

export const facilities = [
  {
    id: 1,
    name: "Perpustakaan Digital",
    description: "Koleksi 50,000+ buku digital dan jurnal internasional",
    image: "/assets/images/gallery/library.jpg"
  },
  {
    id: 2,
    name: "Laboratorium Komputer",
    description: "300+ unit komputer dengan spesifikasi terbaru",
    image: "/assets/images/gallery/computer-lab.jpg"
  },
  {
    id: 3,
    name: "Auditorium Utama",
    description: "Kapasitas 1000 orang dengan teknologi audio-visual terkini",
    image: "/assets/images/gallery/auditorium.jpg"
  },
  {
    id: 4,
    name: "Student Center",
    description: "Pusat kegiatan mahasiswa dan co-working space",
    image: "/assets/images/gallery/student-center.jpg"
  }
];