let namaSiswa = prompt("Masukkan nama siswa:");
let kelas = prompt("Masukkan kelas siswa:");
let nilaitugas = Number(prompt("Masukkan nilai tugas siswa:"));
let nilaiuts = Number(prompt("Masukkan nilai UTS siswa:"));
let nilaiuas = Number(prompt("Masukkan nilai UAS siswa:"));

let nilaiakhir = (nilaitugas * 0.3) + (nilaiuts * 0.3) + (nilaiuas * 0.4);

let keterangan;
if (nilaiakhir >= 90) {
    keterangan = "Sangat Baik";
} else if (nilaiakhir >= 80) {
    keterangan = "Baik";
} else if (nilaiakhir >= 75) {
    keterangan = "Cukup";
} else {
    keterangan = "Belum Lulus";
}

console.log("====================");
console.log("HASIL PENILAIAN SISWA");
console.log("====================");
console.log("Nama Siswa: " + namaSiswa);
console.log("Kelas: " + kelas);
console.log("Nilai Tugas: " + nilaitugas);
console.log("Nilai UTS: " + nilaiuts);
console.log("Nilai UAS: " + nilaiuas);
console.log("Nilai Akhir: " + nilaiakhir);
console.log("Keterangan: " + keterangan);
console.log("====================");