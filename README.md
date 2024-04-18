# Hunger App | PWA Demo

## Kriteria PWA
Ubahlah aplikasi agar memiliki sifat PWA seperti berikut.
 - Dapat diinstal pada Homescreen.
   - Memiliki icon dan splashcreen.
   - Seluruh icon yang dibutuhkan terdapat pada folder `src/images/manifest-icons/`
 - Dapat diakses secara offline tanpa ada informasi yang hilang.
   - Gunakan [workbox](https://developer.chrome.com/docs/workbox/modules/workbox-sw) untuk melakukannya.

## Cara Menjalankan Proyek
1. Clone atau donwload repository berikut.
2. Masuk ke directory project _via_ Terminal/CMD.
3. Tulis dan jalankan perintah `npm install` untuk memasang seluruh _dependencies_ yang dibutuhkan.
4. Untuk menjalankan proyek, gunakan perintah:
   - `npm run start`: menjalankan tanpa fitur hot-reload.
   - `npm run dev`: menjalankan dengan fitur hot-reload (cocok untuk development).
5. Proyek dapat diakses di [localhost:8080](https://localhost:8080/).
