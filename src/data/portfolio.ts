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

const publicAsset = (filename: string) =>
  `${import.meta.env.BASE_URL}${filename}`;

export const profile: Profile = {
  name: "Edward Yulyardi Suparno",
  initials: "EY",
  title: "Admin Inventori & Admin Marketplace",
  location: "Tarumajaya, Kab. Bekasi, Jawa Barat",
  phone: "088808936362",
  email: "edward.yulyardi@gmail.com",
  linkedin: "https://www.linkedin.com/in/edward-yulyardi-suparno",
  whatsappUrl: "https://wa.me/6288808936362",
  cvUrl: publicAsset("edu-cv.pdf"),
  photoUrl: publicAsset("edu-profile.jpg"),
  summary:
    "Lulusan S1 Manajemen Logistik dari Institut Transportasi dan Logistik Trisakti dengan IPK 3,66. Berpengalaman sebagai Admin Inventori dan Admin Marketplace, terutama dalam pengelolaan stok, administrasi barang, pemrosesan pesanan, pelayanan pelanggan, dan pengolahan data menggunakan Microsoft Excel.",
};

export const experiences: Experience[] = [
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
];

export const educationHighlights: string[] = [
  "Memiliki dasar keilmuan di bidang logistik, rantai pasok, pergudangan, distribusi, dan transportasi barang.",
  "Mempelajari pengelolaan persediaan, pengadaan, operasional logistik, serta administrasi barang.",
  "Aktif mengikuti seminar kampus untuk menambah wawasan di bidang logistik, bisnis, dan pengembangan karier.",
];

export const highSchoolHighlights: string[] = [
  "Membangun dasar kemampuan analisis, ketelitian, dan pemecahan masalah melalui pembelajaran akademik.",
  "Mengembangkan kedisiplinan, tanggung jawab, dan kemampuan bekerja sama melalui kegiatan sekolah.",
  "Aktif dalam kegiatan ekstrakurikuler untuk mengasah kepemimpinan, komunikasi, dan kerja sama tim.",
];

export const organizationPoints: string[] = [
  "Memimpin dan mengoordinasikan anggota ekstrakurikuler futsal.",
  "Bertanggung jawab atas jalannya kegiatan dan kepengurusan organisasi.",
  "Memantau pengurus dalam menjalankan tugas dan kegiatan futsal.",
  "Menjaga komunikasi, kedisiplinan, dan kerja sama tim antaranggota.",
];

export const skills: string[] = [
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
];

export const softSkills: string[] = [
  "Teliti",
  "Disiplin",
  "Bertanggung jawab",
  "Komunikatif",
  "Kerja sama tim",
  "Cepat beradaptasi",
];

export const certifications: Certification[] = [
  {
    title: "BNSP - Klaster Penanganan Barang Berbahaya",
    details: "Dangerous Goods Handling, 2020",
  },
  {
    title: "Electronic Data Interchange Course",
    details: "Module PEB dan PIB, 2020",
  },
];

export const languages: string[] = [
  "Bahasa Indonesia — Fasih",
  "Bahasa Inggris — Menengah",
];
