import type { Language } from "./i18n";

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  points: string[];
  icon: "package" | "shopping";
};

export type Certification = {
  title: string;
  details: string;
};

export type Profile = {
  name: string;
  initials: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  whatsappUrl: string;
  cvUrl: string;
  photoUrl: string;
  summary: string;
};

export type PortfolioContent = {
  profile: Profile;
  experiences: Experience[];
  educationHighlights: string[];
  highSchoolHighlights: string[];
  organizationPoints: string[];
  skills: string[];
  softSkills: string[];
  certifications: Certification[];
  languages: string[];
};

const publicAsset = (filename: string) =>
  `${import.meta.env.BASE_URL}${filename}`;

export const portfolioContent: Record<Language, PortfolioContent> = {
  id: {
    profile: {
      name: "Edward Yulyardi Suparno",
      initials: "EY",
      title: "Admin Inventori & Admin Marketplace",
      location: "Tarumajaya, Kab. Bekasi, Jawa Barat",
      phone: "088808936362",
      email: "edward.yulyardi@gmail.com",
      linkedin: "https://www.linkedin.com/in/edward-yulyardi-suparno",
      whatsappUrl: "https://wa.me/6288808936362",
      cvUrl: publicAsset("edu-cv.pdf"),
      photoUrl: publicAsset("edu-profile.webp"),
      summary:
        "Lulusan S1 Manajemen Logistik dari Institut Transportasi dan Logistik Trisakti dengan IPK 3,66. Berpengalaman sebagai Admin Inventori dan Admin Marketplace, terutama dalam pengelolaan stok, administrasi barang, pemrosesan pesanan, pelayanan pelanggan, dan pengolahan data menggunakan Microsoft Excel.",
    },
    experiences: [
      {
        company: "PT Ayyubi Berkah Nusantara",
        role: "Admin Inventori",
        location: "Karawang, Indonesia",
        period: "Apr 2025 - Mei 2026",
        description:
          "Perusahaan distributor dan pusat grosir yang menyediakan berbagai macam barang unik serta kebutuhan harian.",
        points: [
          "Mencatat dan memantau data stok barang masuk dan keluar.",
          "Melakukan pengecekan data inventaris agar sesuai dengan kondisi barang.",
          "Membantu memastikan ketersediaan produk untuk kebutuhan operasional.",
          "Menyusun rekapitulasi dan laporan stok barang.",
          "Mengolah data inventori menggunakan Microsoft Excel.",
        ],
        icon: "package",
      },
      {
        company: "Lourra Official",
        role: "Admin Marketplace",
        location: "Bekasi, Indonesia",
        period: "Feb 2023 - Feb 2024",
        description:
          "Brand fashion lokal Indonesia yang fokus menyediakan pakaian wanita bergaya kasual modis, minimalis, dan pakaian kantor.",
        points: [
          "Mengelola operasional marketplace dan data stok produk.",
          "Memproses pesanan, pengemasan, dan pengiriman barang.",
          "Melayani pertanyaan serta kendala pelanggan.",
          "Membuat laporan keluar-masuk produk.",
          "Mendukung aktivitas promosi melalui komunikasi dengan KOL/influencer.",
        ],
        icon: "shopping",
      },
    ],
    educationHighlights: [
      "Memiliki dasar keilmuan di bidang logistik, rantai pasok, pergudangan, distribusi, dan transportasi barang.",
      "Mempelajari pengelolaan persediaan, pengadaan, operasional logistik, serta administrasi barang.",
      "Aktif mengikuti seminar kampus untuk menambah wawasan di bidang logistik, bisnis, dan pengembangan karier.",
    ],
    highSchoolHighlights: [
      "Membangun dasar kemampuan analisis, ketelitian, dan pemecahan masalah melalui pembelajaran akademik.",
      "Mengembangkan kedisiplinan, tanggung jawab, dan kemampuan bekerja sama melalui kegiatan sekolah.",
      "Aktif dalam kegiatan ekstrakurikuler untuk mengasah kepemimpinan, komunikasi, dan kerja sama tim.",
    ],
    organizationPoints: [
      "Memimpin dan mengoordinasikan anggota ekstrakurikuler futsal.",
      "Bertanggung jawab atas jalannya kegiatan dan kepengurusan organisasi.",
      "Memantau pengurus dalam menjalankan tugas dan kegiatan futsal.",
      "Menjaga komunikasi, kedisiplinan, dan kerja sama tim antaranggota.",
    ],
    skills: [
      "Microsoft Office",
      "Microsoft Excel",
      "VLOOKUP",
      "HLOOKUP",
      "IF Formula",
      "Pivot Table",
      "Administrasi Inventori",
      "Pencatatan Stok",
      "Pengolahan Data",
      "Pelayanan Pelanggan",
      "Administrasi Marketplace",
    ],
    softSkills: [
      "Teliti",
      "Disiplin",
      "Bertanggung jawab",
      "Komunikatif",
      "Kerja sama tim",
      "Cepat beradaptasi",
    ],
    certifications: [
      {
        title: "BNSP - Klaster Penanganan Barang Berbahaya",
        details: "Dangerous Goods Handling, 2020",
      },
      {
        title: "Electronic Data Interchange Course",
        details: "Module PEB dan PIB, 2020",
      },
    ],
    languages: ["Bahasa Indonesia — Fasih", "Bahasa Inggris — Menengah"],
  },
  en: {
    profile: {
      name: "Edward Yulyardi Suparno",
      initials: "EY",
      title: "Inventory Admin & Marketplace Admin",
      location: "Tarumajaya, Bekasi Regency, West Java",
      phone: "088808936362",
      email: "edward.yulyardi@gmail.com",
      linkedin: "https://www.linkedin.com/in/edward-yulyardi-suparno",
      whatsappUrl: "https://wa.me/6288808936362",
      cvUrl: publicAsset("edu-cv.pdf"),
      photoUrl: publicAsset("edu-profile.webp"),
      summary:
        "Bachelor's degree graduate in Logistics Management from Institut Transportasi dan Logistik Trisakti with a GPA of 3.66. Experienced as an Inventory Admin and Marketplace Admin, especially in stock management, goods administration, order processing, customer service, and data processing using Microsoft Excel.",
    },
    experiences: [
      {
        company: "PT Ayyubi Berkah Nusantara",
        role: "Inventory Admin",
        location: "Karawang, Indonesia",
        period: "Apr 2025 - May 2026",
        description:
          "A distributor and wholesale center providing various unique products and daily necessities.",
        points: [
          "Recorded and monitored incoming and outgoing stock data.",
          "Checked inventory data to ensure it matched the actual product condition.",
          "Helped ensure product availability for operational needs.",
          "Prepared stock recaps and inventory reports.",
          "Processed inventory data using Microsoft Excel.",
        ],
        icon: "package",
      },
      {
        company: "Lourra Official",
        role: "Marketplace Admin",
        location: "Bekasi, Indonesia",
        period: "Feb 2023 - Feb 2024",
        description:
          "A local Indonesian fashion brand focused on providing stylish casual, minimalist, and office wear for women.",
        points: [
          "Managed marketplace operations and product stock data.",
          "Processed orders, packaging, and product shipments.",
          "Handled customer questions and issues.",
          "Created product in-and-out reports.",
          "Supported promotional activities through communication with KOLs/influencers.",
        ],
        icon: "shopping",
      },
    ],
    educationHighlights: [
      "Built a foundation in logistics, supply chain, warehousing, distribution, and freight transportation.",
      "Studied inventory management, procurement, logistics operations, and goods administration.",
      "Actively attended campus seminars to broaden knowledge in logistics, business, and career development.",
    ],
    highSchoolHighlights: [
      "Built a foundation in analytical thinking, attention to detail, and problem solving through academic learning.",
      "Developed discipline, responsibility, and teamwork through school activities.",
      "Actively participated in extracurricular activities to strengthen leadership, communication, and teamwork skills.",
    ],
    organizationPoints: [
      "Led and coordinated members of the futsal extracurricular team.",
      "Took responsibility for activities and organizational management.",
      "Monitored committee members in carrying out futsal duties and activities.",
      "Maintained communication, discipline, and teamwork among members.",
    ],
    skills: [
      "Microsoft Office",
      "Microsoft Excel",
      "VLOOKUP",
      "HLOOKUP",
      "IF Formula",
      "Pivot Table",
      "Inventory Administration",
      "Stock Recording",
      "Data Processing",
      "Customer Service",
      "Marketplace Administration",
    ],
    softSkills: [
      "Detail-oriented",
      "Disciplined",
      "Responsible",
      "Communicative",
      "Teamwork",
      "Adaptable",
    ],
    certifications: [
      {
        title: "BNSP - Dangerous Goods Handling Cluster",
        details: "Dangerous Goods Handling, 2020",
      },
      {
        title: "Electronic Data Interchange Course",
        details: "PEB and PIB Module, 2020",
      },
    ],
    languages: ["Indonesian — Fluent", "English — Intermediate"],
  },
};

export const {
  profile,
  experiences,
  educationHighlights,
  highSchoolHighlights,
  organizationPoints,
  skills,
  softSkills,
  certifications,
  languages,
} = portfolioContent.id;
