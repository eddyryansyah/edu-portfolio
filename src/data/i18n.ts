export type Language = "id" | "en";

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
  },
} satisfies Record<
  Language,
  {
    nav: Record<SectionId, string>;
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
  }
>;
