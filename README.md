# Edward Portfolio

Edward Portfolio adalah website portofolio profesional berbasis React yang dibuat untuk menampilkan profil karier Edward Yulyardi Suparno, kakak dari penulis, sebagai Admin Inventori dan Admin Marketplace.

Proyek ini dikembangkan sebagai bagian dari portofolio frontend penulis untuk menunjukkan kemampuan dalam membangun website modern, responsif, terstruktur, dan siap deploy ke GitHub Pages.

## Live Demo

Website tersedia melalui GitHub Pages:

```text
https://eddyryansyah.github.io/edu-portfolio
```

## Preview

Website ini menampilkan beberapa bagian utama:

- Beranda / profil utama
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

- Desain responsif untuk desktop dan mobile
- Floating navbar dengan smooth scroll
- Active navbar state sesuai bagian yang sedang dibuka
- Navigasi mobile dengan animasi halus
- Theme toggle untuk mode terang dan gelap
- Hero section dengan ambient background profesional
- Splash screen minimalis dengan intro singkat
- Antarmuka Bahasa Indonesia yang konsisten
- Section portofolio yang terstruktur
- Data portofolio dipisahkan ke file khusus
- Fallback foto profil jika gambar gagal dimuat
- Unduh CV dengan nama file formal
- Kontak WhatsApp langsung melalui link `wa.me`
- SEO dan Open Graph metadata dengan preview image PNG
- Optimasi aksesibilitas untuk navigasi keyboard dan screen reader
- Footer profesional berisi copyright dan repositori resmi
- Unit test untuk data, komponen UI, dan integrasi dasar
- Deployment otomatis ke GitHub Pages melalui GitHub Actions

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
│   │   ├── Navbar.tsx
│   │   ├── ProfilePhoto.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── SkillPill.tsx
│   │   ├── SplashScreen.tsx
│   │   └── ThemeToggle.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── test/
│   │   ├── app-contact.test.tsx
│   │   ├── app-theme.test.tsx
│   │   ├── footer.test.tsx
│   │   ├── navbar.test.tsx
│   │   ├── portfolio.test.ts
│   │   ├── setup.ts
│   │   ├── splash-screen.test.tsx
│   │   └── theme-toggle.test.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
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

### Clone repository:

```bash
git clone https://github.com/eddyryansyah/edu-portfolio.git
cd edu-portfolio
```

### Install dependencies:

```bash
npm install
```

### Run development server:

```bash
npm run dev
```

### Build production:

```bash
npm run build
```

### Run tests:

```bash
npm run test
```

### Preview production build:

```bash
npm run preview
```

## Deployment

Project ini dirancang untuk dideploy ke GitHub Pages dengan base path:

```ts
base: "/edu-portfolio/";
```

Deployment dilakukan melalui GitHub Actions agar proses build berjalan otomatis setiap kali ada perubahan pada branch utama.

## Future Improvements

Beberapa pengembangan yang dapat dilakukan ke depannya:

- Menambahkan dukungan pilihan Bahasa Indonesia dan Bahasa Inggris secara penuh agar portofolio dapat digunakan untuk kebutuhan lokal maupun internasional.
- Menambahkan preview sertifikat dalam bentuk modal agar pengguna dapat melihat bukti sertifikasi tanpa meninggalkan halaman.
- Menambahkan file sertifikat resmi pada folder khusus agar data sertifikasi lebih terdokumentasi.
- Menambahkan animasi transisi lanjutan pada certificate preview modal.
- Menambahkan pengujian untuk fitur preview sertifikat ketika fitur tersebut sudah dibuat.
- Menambahkan optimasi konten berdasarkan kebutuhan terbaru Edward Yulyardi Suparno.

## Author

Dikembangkan oleh:

**Eddy Ryansyah**<br>
GitHub: [@eddyryansyah](https://github.com/eddyryansyah)

## License

Copyright (c) 2026 Eddy Ryansyah.  
All rights reserved.

This project is published for portfolio, educational, and demonstration purposes only. No part of this repository may be copied, modified, distributed, or reused without prior written permission from the author.
