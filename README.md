# PT. Veritasindo Citra Abadi — Website

Website company profile PT. Veritasindo Citra Abadi, kontraktor elektrikal dan supplier peralatan listrik di Batam.

Dibangun dengan Next.js (App Router) dan diekspor sebagai situs **statis** (`output: 'export'`), sehingga bisa disajikan oleh web server biasa tanpa Node.js.

## Teknologi

- [Next.js](https://nextjs.org) 16 + React 19 + TypeScript
- Tailwind CSS 4 (PostCSS) dan satu stylesheet utama `app/globals.css`
- Font Archivo dan Poppins lewat `next/font` (di-host sendiri, tidak memanggil Google saat tayang)
- Framer Motion / Motion+ untuk animasi

## Halaman

| Rute | Isi |
| --- | --- |
| `/` | Beranda: hero video, ringkasan, layanan, proyek, klien |
| `/about-us` | Tentang kami: profil, layanan, jejak pekerjaan, visi, misi, nilai |
| `/our-projects` | Daftar proyek |
| `/our-projects/[slug]` | Detail proyek (deskripsi, lingkup, dokumentasi foto) |
| `/gallery` | Galeri foto dengan filter kategori dan lightbox |
| `/contact-2` | Kontak: formulir (dikirim lewat WhatsApp), informasi kontak, peta |

## Struktur folder

```
app/              Halaman dan layout (App Router), globals.css
components/       Komponen bersama (Header, Footer, carousel, Reveal, dst.)
components/work/  Komponen proyek dan galeri
data/work.ts      Data foto dan proyek (sumber konten utama)
lib/vcard.ts      Pembuat file kontak (vCard)
public/           Aset statis: gambar, video, contact.vcf
```

## Menjalankan di lokal

Butuh Node.js 20 atau lebih baru.

Paket `@motionplus/*` diambil dari registry privat Motion, jadi variabel lingkungan `MOTION_TOKEN` harus diisi sebelum `npm install` (lihat `.npmrc`). Token tidak disimpan di repo.

```bash
export MOTION_TOKEN=isi_token_anda
npm install
npm run dev        # http://localhost:3000
```

## Build dan deploy

```bash
npm run build
```

Hasilnya ada di folder `out/`. Upload seluruh isi `out/` ke root web server (Nginx, Apache, atau hosting statis lain). Tidak perlu menjalankan `npm start`.

Pastikan server menyajikan `index.html` untuk rute folder (mis. `/about-us/`) dan file `.html` tanpa ekstensi, sesuai pola yang dihasilkan Next.js untuk export statis.

## Mengubah konten

- **Foto dan proyek:** edit `data/work.ts`. Tambahkan foto ke `workImages`, lalu kaitkan ke proyek lewat `imageIds` pada daftar `projects`. Gambar pertama (`coverImageId`) menjadi gambar utama.
- **Teks proyek:** isi `summary`, `description` (daftar paragraf), `scope`, `location` dan `completionDate` pada tiap proyek.
- **Nomor WhatsApp formulir:** konstanta `YOUR_WHATSAPP_NUMBER` di `app/contact-2/page.tsx` (format internasional, hanya angka).
- **Lokasi peta:** konstanta `MAP_COORDS` (latitude,longitude) di `app/contact-2/page.tsx`. Peta baru dimuat saat tombol "Tampilkan Peta" ditekan agar halaman tetap cepat.
- **Teks beranda dan halaman lain:** langsung di file `page.tsx` masing-masing.
- **Warna dan jarak:** token desain ada di awal `app/globals.css` (`:root`).

## Panduan gambar

- Gunakan format **WebP**. Foto lapangan sebaiknya lebar maksimal 1600px dengan kualitas sekitar 78 agar ukurannya ratusan KB, bukan MB.
- Simpan foto kerja di `public/work/`, lalu daftarkan di `data/work.ts`.
- Foto asli dari kamera (3–9 MB) jangan dimasukkan langsung ke `public/`.

## Catatan

- `public/assets/hero-bg.mp4` (±12 MB) adalah video latar beranda. Mengompresnya akan mempercepat muatan pertama.
- Folder `public/assets/` masih berisi beberapa logo PNG besar yang tidak dipakai di halaman; aman dihapus jika tidak diperlukan.
- Perintah lain: `npm run lint` untuk memeriksa kode.
