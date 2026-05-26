# Edward Portfolio

Edward Portfolio adalah website portofolio profesional berbasis React yang dibuat untuk menampilkan profil karier Edward Yulyardi Suparno, kakak dari penulis, sebagai Admin Inventory dan Admin Marketplace.

Project ini dikembangkan sebagai bagian dari portofolio frontend penulis untuk menunjukkan kemampuan dalam membangun website modern, responsif, terstruktur, dan siap deploy ke GitHub Pages.

## Live Demo

Website akan tersedia melalui GitHub Pages:

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
- Mobile navigation dengan animasi halus
- Splash screen minimalis dengan intro singkat
- Section portofolio yang terstruktur
- Data portofolio dipisahkan ke file khusus
- Fallback foto profil jika gambar gagal dimuat
- Download CV dengan nama file formal
- Kontak WhatsApp langsung melalui link `wa.me`
- Footer profesional berisi copyright dan repository resmi
- Unit test sederhana untuk validasi data portofolio
- Siap deploy ke GitHub Pages

## Project Structure

```text
edu-portfolio/
├── .github/
│   ├── workflows/
│   │   └── deploy.yml
│   └── FUNDING.yml
├── public/
│   ├── edu-cv.pdf
│   ├── edu-profile.jpg
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BulletList.tsx
│   │   ├── ContactItem.tsx
│   │   ├── ExperienceCard.tsx
│   │   ├── Footer.tsx
│   │   ├── Icon.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProfilePhoto.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── SkillPill.tsx
│   │   └── SplashScreen.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── test/
│   │   ├── portfolio.test.ts
│   │   └── setup.ts
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

- Menambahkan metadata SEO dan Open Graph agar link portfolio terlihat lebih baik saat dibagikan.
- Menambahkan mode gelap/terang agar pengalaman pengguna lebih fleksibel.
- Menambahkan active state pada navbar sesuai section yang sedang dibuka.
- Menambahkan pengujian komponen UI untuk navbar, footer, dan splash screen.
- Menambahkan optimasi aksesibilitas lanjutan untuk navigasi keyboard dan screen reader.

## Author

Dikembangkan oleh:

**Eddy Ryansyah**<br>
GitHub: [@eddyryansyah](https://github.com/eddyryansyah)

## License

Copyright (c) 2026 Eddy Ryansyah.  
All rights reserved.

This project is published for portfolio, educational, and demonstration purposes only. No part of this repository may be copied, modified, distributed, or reused without prior written permission from the author.
