# Edward Portfolio

Edward Portfolio adalah website portofolio profesional berbasis React yang dibuat untuk menampilkan profil karier Edward Yulyardi Suparno, kakak dari penulis, sebagai Admin Inventori dan Admin Marketplace.

Project ini dikembangkan sebagai bagian dari portofolio frontend penulis untuk menunjukkan kemampuan dalam membangun website modern, responsif, accessible, mendukung multi-bahasa, memiliki pengujian, dan siap dideploy ke GitHub Pages.

## Live Demo

Website tersedia melalui GitHub Pages:

```text
https://eddyryansyah.github.io/edu-portfolio
```

## Tech Stack

Project ini dibuat menggunakan teknologi modern:

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Vitest
- React Testing Library
- GitHub Actions
- GitHub Pages

## Features

- Responsive design untuk desktop dan mobile
- Theme toggle untuk mode terang dan gelap
- Language dropdown untuk Bahasa Indonesia dan English
- Localized portfolio content dan document metadata
- Floating navbar dengan smooth scroll dan active section state
- Splash screen dan hero section dengan ambient background
- Download CV dan kontak WhatsApp langsung
- SEO dan Open Graph metadata
- Accessibility support untuk keyboard navigation, screen reader, dan skip link
- Unit test dan integration test untuk fitur utama

## Project Structure

```text
.
├── .github/
│   ├── workflows/
│   │   └── deploy.yml
│   └── FUNDING.yml
├── public/
│   ├── edu-cv.pdf
│   ├── edu-profile.webp
│   ├── favicon.svg
│   └── og-image.png
├── src/
│   ├── components/
│   ├── constants/
│   ├── data/
│   ├── hooks/
│   ├── sections/
│   ├── test/
│   ├── types/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── LICENSE
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Getting Started

### Setup dan development server

```bash
# Clone repository
git clone https://github.com/eddyryansyah/edu-portfolio.git

# Masuk ke folder project
cd edu-portfolio

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka project melalui browser:

```text
http://localhost:5173/edu-portfolio/
```

Untuk menghentikan development server, tekan `Control + C` pada terminal.

### Build dan preview production

```bash
# Build project untuk production
npm run build

# Preview hasil production build
npm run preview
```

Buka hasil preview melalui browser:

```text
http://localhost:4173/edu-portfolio/
```

### Preview di perangkat mobile

Pastikan komputer dan perangkat mobile berada pada jaringan Wi-Fi yang sama.

```bash
# Build project terlebih dahulu
npm run build

# Jalankan preview agar dapat diakses dari perangkat lain dalam jaringan yang sama
npm run preview -- --host 0.0.0.0
```

Jika Vite menampilkan `Network` URL, buka URL tersebut melalui browser di perangkat mobile.

Jika `Network` URL tidak muncul, cek IP lokal komputer.

```bash
# macOS
ipconfig getifaddr en0

# Windows
ipconfig
```

Kemudian buka melalui perangkat mobile:

```text
http://<LOCAL_IP>:4173/edu-portfolio/
```

Contoh:

```text
http://192.168.1.10:4173/edu-portfolio/
```

### Testing dan linting

```bash
# Jalankan seluruh test
npm run test -- --run

# Jalankan linting
npm run lint
```

### Final check sebelum deployment

```bash
# Pastikan lint, test, dan build berjalan aman sebelum push ke branch utama
npm run lint
npm run test -- --run
npm run build
```

Jika diperlukan, bersihkan folder `dist` sebelum build ulang.

```bash
# macOS / Linux
rm -rf dist

# Windows Command Prompt
rmdir /s /q dist

# Windows PowerShell
Remove-Item -Recurse -Force dist
```

### Commit dan push perubahan

```bash
# Stage seluruh perubahan
git add -A

# Commit perubahan dengan format pesan yang jelas
git commit -m "type: short description"

# Push ke branch utama
git push origin main
```

Contoh commit message:

```bash
git commit -m "fix: improve hero layout on touch desktop viewport"
```

## Testing

Project ini memiliki pengujian untuk memastikan fitur utama tetap aman ketika kode dikembangkan.

Area yang diuji meliputi data portofolio, konten bilingual, theme toggle, language dropdown, navbar, footer, contact link, splash screen, integrasi `localStorage`, dan metadata dokumen.

```bash
npm run test -- --run
```

## Deployment

Project ini dideploy ke GitHub Pages melalui GitHub Actions dengan base path:

```ts
base: "/edu-portfolio/";
```

Setiap perubahan pada branch utama akan diproses melalui workflow deployment yang tersedia di folder `.github/workflows`.

## Pengembangan Selanjutnya

Rencana pengembangan dan tugas lanjutan untuk project ini dikelola melalui [Edward Portfolio Development Roadmap](https://github.com/users/eddyryansyah/projects/2).

Roadmap tersebut digunakan untuk mengatur peningkatan fitur, perbaikan bug, tugas pengujian, pembaruan dokumentasi, peningkatan accessibility, dan improvement terkait deployment pada project `edu-portfolio`.

## Author

Dikembangkan oleh:

**Eddy Ryansyah**<br>
GitHub: [@eddyryansyah](https://github.com/eddyryansyah)

## License

Copyright (c) 2026 Eddy Ryansyah.

All rights reserved.

This project is published for portfolio, educational, and demonstration purposes only. No part of this repository may be copied, modified, distributed, or reused without prior written permission from the author.
