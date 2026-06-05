export const supportedLanguages = ["id", "en"] as const;

export type Language = (typeof supportedLanguages)[number];

export type SectionId =
  | "home"
  | "experience"
  | "education"
  | "organization"
  | "skills"
  | "contact";

export const sectionIds: SectionId[] = [
  "home",
  "experience",
  "education",
  "organization",
  "skills",
  "contact",
];

export const languageOptions: Record<
  Language,
  {
    label: string;
    shortLabel: string;
  }
> = {
  id: {
    label: "Bahasa Indonesia",
    shortLabel: "ID",
  },
  en: {
    label: "English",
    shortLabel: "EN",
  },
};

export const uiCopy = {
  id: {
    nav: {
      home: "Beranda",
      experience: "Pengalaman",
      education: "Pendidikan",
      organization: "Organisasi",
      skills: "Keterampilan",
      contact: "Kontak",
    },
    metadata: {
      title: "Edward Portfolio | Edward Yulyardi Suparno",
      description:
        "Website portofolio profesional Edward Yulyardi Suparno sebagai Admin Inventory dan Admin Marketplace, menampilkan pengalaman kerja, pendidikan, keterampilan, sertifikasi, dan kontak profesional.",
    },
    navbar: {
      brandAriaLabel: "Menuju bagian beranda",
      profileLabel: "Profil Profesional",
      menuButtonLabel: "Buka atau tutup menu navigasi",
    },
    theme: {
      label: "Tampilan",
      currentDark: "Mode Gelap",
      currentLight: "Mode Terang",
      toLight: "Ganti ke mode terang",
      toDark: "Ganti ke mode gelap",
    },
    language: {
      label: "Bahasa",
      buttonLabel: "Pilih bahasa",
    },
    accessibility: {
      skipToMain: "Lewati ke konten utama",
    },
    splash: {
      ariaLabel: "Memuat halaman",
      intro: "Kenalkan, Edward.",
    },
    hero: {
      badge: "Portofolio Profesional",
      profileTitle: "Profil Profesional",
      profileSubtitle: "Inventori, Marketplace, dan Operasional",
      primaryCta: "Hubungi Saya",
      secondaryCta: "Unduh CV",
      primaryCtaAria: "Hubungi Edward Yulyardi Suparno",
      secondaryCtaAria: "Unduh CV Edward Yulyardi Suparno",
      contactLabels: {
        location: "Lokasi",
        phone: "Telepon / WhatsApp",
        email: "Email",
        linkedin: "LinkedIn",
      },
    },
    sections: {
      experience: {
        eyebrow: "Pengalaman",
        title: "Pengalaman Kerja",
        description:
          "Pengalaman di bidang administrasi inventori, pengelolaan stok, marketplace, pelayanan pelanggan, pemrosesan pesanan, dan pelaporan operasional.",
      },
      education: {
        eyebrow: "Pendidikan",
        title: "Pendidikan",
        description:
          "Latar belakang pendidikan formal yang mendukung kemampuan logistik, administrasi, analisis, kedisiplinan, dan kerja sama.",
        collegePeriod: "Jakarta, Indonesia | Agu 2017 - Agu 2024",
        collegeDegree: "S1 Manajemen Logistik | IPK 3,66/4,00",
        highSchoolPeriod: "Bekasi, Indonesia | Jul 2014 - Mei 2017",
        highSchoolMajor: "Ilmu Pengetahuan Alam",
      },
      organization: {
        eyebrow: "Organisasi",
        title: "Pengalaman Organisasi",
        description:
          "Pengalaman kepemimpinan yang mendukung kemampuan koordinasi, komunikasi, kedisiplinan, dan kerja sama tim.",
        organizationName: "Ekstrakurikuler Futsal",
        organizationRole: "Ketua | Bekasi, Indonesia | Sep 2015 - Sep 2016",
        organizationDescription:
          "Ekstrakurikuler olahraga futsal yang menjadi wadah pengembangan minat, kerja sama tim, kedisiplinan, dan kepemimpinan siswa.",
      },
      skills: {
        eyebrow: "Keterampilan",
        title: "Keterampilan & Sertifikasi",
        description:
          "Kombinasi kemampuan administrasi, pengolahan data, inventori, marketplace, dan kompetensi pendukung di bidang logistik.",
        technicalSkills: "Keterampilan Teknis",
        certifications: "Sertifikasi",
        nonTechnicalSkills: "Keterampilan Nonteknis",
        languages: "Bahasa",
      },
      contact: {
        eyebrow: "Kontak",
        title: "Tertarik untuk bekerja sama?",
        description:
          "Terbuka untuk peluang kerja di bidang administrasi inventori, marketplace, gudang, operasional, dan logistik.",
        emailAria: "Kirim email ke",
        whatsappAria: "Hubungi Edward Yulyardi Suparno melalui WhatsApp",
        linkedinAria: "Buka profil LinkedIn Edward Yulyardi Suparno",
        phoneLabel: "Telepon / WhatsApp",
      },
    },
    footer: {
      description:
        "Dibuat oleh Eddy Ryansyah sebagai proyek portofolio frontend modern.",
      rights: "Seluruh hak cipta dilindungi.",
      repository: "Repositori Resmi",
    },
  },
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      education: "Education",
      organization: "Organization",
      skills: "Skills",
      contact: "Contact",
    },
    metadata: {
      title: "Edward Portfolio | Edward Yulyardi Suparno",
      description:
        "Professional portfolio website for Edward Yulyardi Suparno as an Inventory Admin and Marketplace Admin, showcasing work experience, education, skills, certifications, and professional contact information.",
    },
    navbar: {
      brandAriaLabel: "Go to home section",
      profileLabel: "Professional Profile",
      menuButtonLabel: "Open or close navigation menu",
    },
    theme: {
      label: "Appearance",
      currentDark: "Dark Mode",
      currentLight: "Light Mode",
      toLight: "Switch to light mode",
      toDark: "Switch to dark mode",
    },
    language: {
      label: "Language",
      buttonLabel: "Choose language",
    },
    accessibility: {
      skipToMain: "Skip to main content",
    },
    splash: {
      ariaLabel: "Loading page",
      intro: "Meet Edward.",
    },
    hero: {
      badge: "Professional Portfolio",
      profileTitle: "Professional Profile",
      profileSubtitle: "Inventory, Marketplace, and Operations",
      primaryCta: "Contact Me",
      secondaryCta: "Download CV",
      primaryCtaAria: "Contact Edward Yulyardi Suparno",
      secondaryCtaAria: "Download Edward Yulyardi Suparno CV",
      contactLabels: {
        location: "Location",
        phone: "Phone / WhatsApp",
        email: "Email",
        linkedin: "LinkedIn",
      },
    },
    sections: {
      experience: {
        eyebrow: "Experience",
        title: "Work Experience",
        description:
          "Experience in inventory administration, stock management, marketplace operations, customer service, order processing, and operational reporting.",
      },
      education: {
        eyebrow: "Education",
        title: "Education",
        description:
          "Formal education background that supports logistics, administration, analysis, discipline, and teamwork capabilities.",
        collegePeriod: "Jakarta, Indonesia | Aug 2017 - Aug 2024",
        collegeDegree: "Bachelor of Logistics Management | GPA 3.66/4.00",
        highSchoolPeriod: "Bekasi, Indonesia | Jul 2014 - May 2017",
        highSchoolMajor: "Natural Sciences",
      },
      organization: {
        eyebrow: "Organization",
        title: "Organization Experience",
        description:
          "Leadership experience that supports coordination, communication, discipline, and teamwork skills.",
        organizationName: "Futsal Extracurricular",
        organizationRole:
          "Chairperson | Bekasi, Indonesia | Sep 2015 - Sep 2016",
        organizationDescription:
          "A futsal extracurricular activity that served as a platform to develop interests, teamwork, discipline, and student leadership.",
      },
      skills: {
        eyebrow: "Skills",
        title: "Skills & Certifications",
        description:
          "A combination of administration, data processing, inventory, marketplace, and supporting logistics competencies.",
        technicalSkills: "Hard Skills",
        certifications: "Certifications",
        nonTechnicalSkills: "Soft Skills",
        languages: "Languages",
      },
      contact: {
        eyebrow: "Contact",
        title: "Interested in working together?",
        description:
          "Open to career opportunities in inventory administration, marketplace, warehouse, operations, and logistics.",
        emailAria: "Send email to",
        whatsappAria: "Contact Edward Yulyardi Suparno through WhatsApp",
        linkedinAria: "Open Edward Yulyardi Suparno LinkedIn profile",
        phoneLabel: "Phone / WhatsApp",
      },
    },
    footer: {
      description:
        "Built by Eddy Ryansyah as a modern frontend portfolio project.",
      rights: "All rights reserved.",
      repository: "Official Repository",
    },
  },
} satisfies Record<
  Language,
  {
    nav: Record<SectionId, string>;
    metadata: {
      title: string;
      description: string;
    };
    navbar: {
      brandAriaLabel: string;
      profileLabel: string;
      menuButtonLabel: string;
    };
    theme: {
      label: string;
      currentDark: string;
      currentLight: string;
      toLight: string;
      toDark: string;
    };
    language: {
      label: string;
      buttonLabel: string;
    };
    accessibility: {
      skipToMain: string;
    };
    splash: {
      ariaLabel: string;
      intro: string;
    };
    hero: {
      badge: string;
      profileTitle: string;
      profileSubtitle: string;
      primaryCta: string;
      secondaryCta: string;
      primaryCtaAria: string;
      secondaryCtaAria: string;
      contactLabels: {
        location: string;
        phone: string;
        email: string;
        linkedin: string;
      };
    };
    sections: {
      experience: {
        eyebrow: string;
        title: string;
        description: string;
      };
      education: {
        eyebrow: string;
        title: string;
        description: string;
        collegePeriod: string;
        collegeDegree: string;
        highSchoolPeriod: string;
        highSchoolMajor: string;
      };
      organization: {
        eyebrow: string;
        title: string;
        description: string;
        organizationName: string;
        organizationRole: string;
        organizationDescription: string;
      };
      skills: {
        eyebrow: string;
        title: string;
        description: string;
        technicalSkills: string;
        certifications: string;
        nonTechnicalSkills: string;
        languages: string;
      };
      contact: {
        eyebrow: string;
        title: string;
        description: string;
        emailAria: string;
        whatsappAria: string;
        linkedinAria: string;
        phoneLabel: string;
      };
    };
    footer: {
      description: string;
      rights: string;
      repository: string;
    };
  }
>;

export type UiCopy = (typeof uiCopy)[Language];

export type SplashCopy = UiCopy["splash"];
export type HeroCopy = UiCopy["hero"];
export type ExperienceSectionCopy = UiCopy["sections"]["experience"];
export type EducationSectionCopy = UiCopy["sections"]["education"];
export type OrganizationSectionCopy = UiCopy["sections"]["organization"];
export type SkillsSectionCopy = UiCopy["sections"]["skills"];
export type ContactSectionCopy = UiCopy["sections"]["contact"];
