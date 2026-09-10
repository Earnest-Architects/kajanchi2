/**
 * ============================================================
 *  content.js — SATU-SATUNYA FILE YANG PERLU DIEDIT
 * ============================================================
 * Semua konten tur ada di sini: daftar lantai (denah), daftar
 * gambar 360 (views), titik pada denah, dan panah navigasi
 * (pitch point) di dalam tiap gambar 360.
 *
 * Tidak perlu menyentuh file JS lain untuk:
 *   - menambah / menghapus lantai
 *   - menambah / menghapus gambar 360 (view)
 *   - menambah / menghapus titik pada denah
 *   - menambah / menghapus pitch point di dalam gambar 360
 *   - menambah / menghapus CONTENT (foto, link, video, embed) yang
 *     muncul lewat jendela pop-up saat sebuah hotspot diklik
 * Cukup tambah atau hapus objeknya di array yang bersangkutan,
 * tampilan (denah, panah navigasi, hotspot content) otomatis
 * menyesuaikan.
 *
 * CARA MENCARI NILAI PITCH & YAW:
 *   Buka pitch-finder.html, pilih gambar 360 yang mau dicari
 *   titiknya, lalu klik posisi yang diinginkan di dalam gambar.
 *   Nilai pitch & yaw akan muncul dan bisa langsung disalin ke
 *   dalam "pitchPoints" di bawah.
 *
 * NAMA PROJECT (projectName):
 *   Dipakai otomatis oleh js/viewer.js & js/vr.js untuk:
 *     - Judul tab browser        -> "(projectName) Virtual Tour | Earnest Architects"
 *     - Judul besar di layar     -> "(projectName) Virtual Tour"
 *     - Judul preview link sosmed (og:title / twitter:title)
 *   Ganti nilainya di sini saja, tidak perlu edit file JS/HTML lain.
 *
 * DESKRIPSI PROJECT (metaDescription):
 *   Dipakai otomatis untuk meta description SEO & preview link
 *   sosial media (og:description / twitter:description).
 *   Ganti nilainya di sini saja.
 * ============================================================ */

export const projectName = "Kajanchi";
export const metaDescription = "Kajanchi - 360° バーチャルツアー by Earnest Architects.";

/* ============================================================
   1) DENAH (FLOORPLAN)
============================================================ */
export const floors = [
  {
    id: "floor1",
    label: "1F",
    name: "1階",
    image: "assets/floorplan.jpg",
    points: [
      { target: "view1", x: 72.2, y: 83 },
      { target: "view2", x: 47.4, y: 33 },
      { target: "view3", x: 64, y: 24.5 },
      { target: "view4", x: 39, y: 22.7 },
      { target: "view5", x: 36.1, y: 15.1 },
      { target: "view6", x: 67.8, y: 15.9 },
      { target: "view8", x: 52.8, y: 97.8 },
    ],
  },
];

/* ============================================================
   2) GAMBAR 360 (VIEWS)
============================================================ */
export const views = [
  {
    id: "view1",
    title: "Exterior-close",
    image: "assets/EX2-CLOSE.jpg",
    yawOffset: 0,
    pitchPoints: [
      { pitch: 3.17, yaw: 97.59, target: "view2" },
      { pitch: -10.29, yaw: -42.11, target: "view9" },
      { pitch: -16.84, yaw: -94.42, target: "view8" },
    ],
  },
  {
    id: "view2",
    title: "Master Bedroom",
    image: "assets/pano2.jpg",
    yawOffset: 0,
    pitchPoints: [
      { pitch: -2.72, yaw: 87.5, target: "view1" },
      { pitch: -20.28, yaw: -37.74, target: "view3" },
    ],
  },
  {
    id: "view3",
    title: "Master Bedroom",
    image: "assets/pano3.jpg",
    yawOffset: 0,
    pitchPoints: [
      { pitch: -2.47, yaw: 10.51, target: "view1" },
      { pitch: -19.93, yaw: 31.85, target: "view2" },
      { pitch: -19.76, yaw: 79.18, target: "view4" },
    ],
  },
  {
    id: "view4",
    title: "W.I.C",
    image: "assets/pano4.jpg",
    yawOffset: 0,
    pitchPoints: [
      { pitch: -30.76, yaw: -158.68, target: "view3" },
      { pitch: -33.52, yaw: 85.58, target: "view5" },
    ],
  },
  {
    id: "view5",
    title: "Dressing Room",
    image: "assets/pano5.jpg",
    yawOffset: 0,
    pitchPoints: [
      { pitch: -15.21, yaw: 26.4, target: "view6" },
      { pitch: -35.95, yaw: 61.21, target: "view4" },
    ],
  },
  {
    id: "view6",
    title: "Bathroom",
    image: "assets/pano6.jpg",
    yawOffset: 0,
    pitchPoints: [{ pitch: -27.31, yaw: -87.86, target: "view5" }],
  },
  {
    id: "view7",
    title: "Open",
    image: "assets/EX-OPEN.jpg",
    yawOffset: 0,
    pitchPoints: [
      { pitch: 8.82, yaw: -6.25, target: "view8" },
      { pitch: -11.83, yaw: 22.45, target: "view1" },
    ],
  },
  {
    id: "view8",
    title: "Exterior-close",
    image: "assets/EX-CLOSE.jpg",
    yawOffset: 0,
    pitchPoints: [
      { pitch: -7.33, yaw: -6.38, target: "view7" },
      { pitch: -10.68, yaw: 21.88, target: "view1" },
    ],
  },
  {
    id: "view9",
    title: "Open",
    image: "assets/EX2-OPEN.jpg",
    yawOffset: 0,
    pitchPoints: [
      { pitch: 17.8, yaw: -43.33, target: "view1" },
      { pitch: -15.65, yaw: -95.91, target: "view8" },
      { pitch: 2.68, yaw: 97.91, target: "view2" },
    ],
  },
];

/* ============================================================
   3) CONTENT (foto / ikon+link / teks+link / link / video / embed)
   ------------------------------------------------------------
   Tur Kajanchi ini belum memakai fitur content — array-nya
   sengaja dibiarkan kosong. Tambahkan objek di sini kapan saja
   kalau nanti mau menampilkan foto/link/video/embed lewat
   hotspot di dalam panorama (lihat penjelasan cara pakai di
   README.md).
============================================================ */
export const contents = [];

/* ============================================================
   Helper — TIDAK PERLU DIEDIT
============================================================ */
export function findView(id) {
  return views.find((v) => v.id === id);
}

export function findFloor(id) {
  return floors.find((f) => f.id === id);
}

export function findContent(id) {
  return contents.find((c) => c.id === id);
}

export function floorsForView(viewId) {
  return floors.filter((f) => f.points.some((p) => p.target === viewId));
}

export function labelForTarget(targetId, explicitLabel) {
  if (explicitLabel) return explicitLabel;
  const v = findView(targetId);
  return v ? v.title : targetId;
}
