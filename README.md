# Edward Portfolio

Edward Portfolio adalah website portofolio profesional berbasis React yang dibuat untuk menampilkan profil karier Edward Yulyardi Suparno, kakak dari penulis, sebagai Admin Inventori dan Admin Marketplace.

Project ini dikembangkan sebagai bagian dari portofolio frontend penulis untuk menunjukkan kemampuan dalam membangun website modern, responsif, terstruktur, accessible, memiliki dukungan multi-bahasa, serta siap deploy ke GitHub Pages.

## Live Demo

Website tersedia melalui GitHub Pages:

```text
https://eddyryansyah.github.io/edu-portfolio
```

## Preview

Website ini menampilkan beberapa section utama:

- Home / profil utama
- Pengalaman kerja
- Pendidikan
- Pengalaman organisasi
- Keterampilan dan sertifikasi
- Kontak profesional

## Tech Stack

Project ini dibuat menggunakan teknologi modern:

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Vitest
- React Testing Library
- GitHub Pages
- GitHub Actions

## Features

- Responsive design untuk desktop dan mobile
- Floating navbar dengan smooth scroll
- Active navbar state sesuai section yang sedang dibuka
- Mobile navigation dengan animasi halus
- Theme toggle untuk mode terang dan gelap
- Language dropdown untuk Bahasa Indonesia dan English
- Localized portfolio content untuk tampilan ID/EN
- Localized document metadata berdasarkan bahasa aktif
- Hero section dengan ambient background profesional
- Splash screen minimalis dengan intro singkat
- Section portofolio yang dipisahkan ke folder khusus
- Data portofolio dan copy UI terpusat
- Custom hooks untuk theme, language, splash screen, metadata, dan active section
- Centralized constants dan shared types
- Fallback foto profil jika gambar gagal dimuat
- Download CV dengan nama file formal
- Kontak WhatsApp langsung melalui link `wa.me`
- SEO dan Open Graph metadata untuk preview link
- Accessibility improvement untuk keyboard navigation dan screen reader
- Skip link untuk akses cepat ke konten utama
- Footer profesional berisi copyright dan repository resmi
- Unit test dan integration test untuk data, UI, theme, language, navbar, footer, dan komponen utama
- Siap deploy ke GitHub Pages

## Project Structure

```text
.
├── .github/
│   ├── workflows/
│   │   └── deploy.yml
│   └── FUNDING.yml
├── public/
│   ├── edu-cv.pdf
│   ├── edu-profile.jpg
│   ├── favicon.svg
│   └── og-image.png
├── src/
│   ├── components/
│   │   ├── BulletList.tsx
│   │   ├── ContactItem.tsx
│   │   ├── ExperienceCard.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroBackground.tsx
│   │   ├── Icon.tsx
│   │   ├── LanguageDropdown.tsx
│   │   ├── Navbar.tsx
│   │   ├── NavbarBrand.tsx
│   │   ├── NavbarControls.tsx
│   │   ├── NavbarLinks.tsx
│   │   ├── NavbarMenuButton.tsx
│   │   ├── NavbarMobileControlRow.tsx
│   │   ├── NavbarMobileMenu.tsx
│   │   ├── ProfilePhoto.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── SkillPill.tsx
│   │   ├── SkipLink.tsx
│   │   ├── SplashScreen.tsx
│   │   └── ThemeToggle.tsx
│   ├── constants/
│   │   ├── animation.ts
│   │   ├── preferences.ts
│   │   └── site.ts
│   ├── data/
│   │   ├── i18n.ts
│   │   └── portfolio.ts
│   ├── hooks/
│   │   ├── index.ts
│   │   ├── useActiveSection.ts
│   │   ├── useDocumentMetadata.ts
│   │   ├── useLanguagePreference.ts
│   │   ├── useSplashScreen.ts
│   │   └── useThemePreference.ts
│   ├── sections/
│   │   ├── ContactSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── index.ts
│   │   ├── OrganizationSection.tsx
│   │   └── SkillsSection.tsx
│   ├── test/
│   │   ├── app-contact.test.tsx
│   │   ├── app-language.test.tsx
│   │   ├── app-theme.test.tsx
│   │   ├── footer.test.tsx
│   │   ├── language-dropdown.test.tsx
│   │   ├── navbar.test.tsx
│   │   ├── portfolio.test.ts
│   │   ├── setup.ts
│   │   ├── splash-screen.test.tsx
│   │   └── theme-toggle.test.tsx
│   ├── types/
│   │   ├── navigation.ts
│   │   └── theme.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Getting Started

### Clone repository

```bash
git clone https://github.com/eddyryansyah/edu-portfolio.git
cd edu-portfolio
```

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build production

```bash
npm run build
```

### Run tests

```bash
npm run test
```

### Preview production build

```bash
npm run preview
```

## Deployment

Project ini dirancang untuk dideploy ke GitHub Pages dengan base path:

```ts
base: "/edu-portfolio/";
```

Deployment dilakukan melalui GitHub Actions agar proses build berjalan otomatis setiap kali ada perubahan pada branch utama.

## Testing

Project ini memiliki pengujian untuk memastikan fitur utama tetap aman ketika kode dikembangkan.

Area yang diuji meliputi:

- Data portofolio
- Konten bilingual ID/EN
- Theme toggle
- Language dropdown
- Navbar desktop dan mobile
- Footer
- Contact link
- Splash screen
- Integrasi language preference dengan `localStorage`
- Metadata dokumen berdasarkan bahasa aktif

Menjalankan seluruh test:

```bash
npm run test -- --run
```

## Future Improvements

Beberapa pengembangan yang dapat dilakukan ke depannya:

- Menambahkan preview sertifikat dalam bentuk modal agar pengguna dapat melihat bukti sertifikasi tanpa meninggalkan halaman.
- Menambahkan file sertifikat resmi pada folder khusus agar data sertifikasi lebih terdokumentasi.
- Menambahkan animasi transisi lanjutan pada certificate preview modal.
- Menambahkan pengujian untuk fitur preview sertifikat ketika fitur tersebut sudah dibuat.
- Menambahkan language refinement lanjutan jika konten profesional Edward Yulyardi Suparno diperbarui.
- Menambahkan optimasi konten berdasarkan kebutuhan terbaru Edward Yulyardi Suparno.

## Author

Dikembangkan oleh:

**Eddy Ryansyah**<br>
GitHub: [@eddyryansyah](https://github.com/eddyryansyah)

## License

Copyright (c) 2026 Eddy Ryansyah.
All rights reserved.

This project is published for portfolio, educational, and demonstration purposes only. No part of this repository may be copied, modified, distributed, or reused without prior written permission from the author.
