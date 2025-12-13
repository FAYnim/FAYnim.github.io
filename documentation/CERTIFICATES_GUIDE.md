# Dynamic Certificates Implementation

## Overview
Bagian sertifikat sekarang sudah dinamis dan mengambil data dari `certificates.json`. Ini memungkinkan penambahan sertifikat baru tanpa mengubah kode HTML atau JavaScript.

## File yang telah dimodifikasi:
1. **index.html** - Mengganti hardcoded certificates dengan placeholder
2. **script.js** - Menambahkan fungsi loadCertificatesData() dan renderCertificates()
3. **certificates.json** - File data baru untuk menyimpan informasi sertifikat

## Cara menambahkan sertifikat baru:

### 1. Edit file `certificates.json`
Tambahkan objek baru ke array dengan struktur berikut:

```json
{
  "id": 3,
  "image": "path/to/certificate-image.png",
  "title": {
    "id": "Judul Sertifikat dalam Bahasa Indonesia",
    "en": "Certificate Title in English"
  },
  "description": {
    "id": "Deskripsi dalam Bahasa Indonesia",
    "en": "Description in English"
  },
  "alt": {
    "id": "Alt text untuk gambar dalam Bahasa Indonesia",
    "en": "Alt text for image in English"
  },
  "popupContent": "<img src='path/to/certificate-image.png' alt='Certificate' style='width:100%; max-width:700px; margin-top:15px;' loading='lazy'>"
}
```

### 2. Upload gambar sertifikat
Pastikan file gambar tersedia di path yang disebutkan dalam JSON.

### 3. Refresh halaman
Sertifikat baru akan muncul secara otomatis tanpa perlu mengubah kode.

## Fitur:
- ✅ Multi-language support (ID/EN)
- ✅ Dynamic loading dari JSON
- ✅ Fallback jika JSON gagal dimuat
- ✅ Popup functionality tetap berfungsi
- ✅ Responsive design tetap terjaga
- ✅ Coming Soon placeholder otomatis ditambahkan

## Error Handling:
Jika `certificates.json` gagal dimuat, sistem akan menampilkan sertifikat default sebagai fallback.