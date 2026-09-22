// 1. KUMPULAN FUNGSI DARI FILE SEBELUMNYA

function cekBesarKecil() {
    let angka1 = Number(prompt("Masukkan angka pertama:"));
    let angka2 = Number(prompt("Masukkan angka kedua:"));
    if (angka1 > angka2) {
        console.log("Angka terbesar adalah " + angka1);
    } else if (angka2 > angka1) {
        console.log("Angka terbesar adalah " + angka2);
    } else {
        console.log("Kedua angka sama besar.");
    }
}

function cekBilangan() {
    let bilangan = Number(prompt("Masukkan bilangan:"));
    if (bilangan > 0) {
        console.log("Bilangan positif");
    } else if (bilangan < 0) {
        console.log("Bilangan negatif");
    } else {
        console.log("Bilangan nol");
    }
}

function hitungChallenge() {
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
}

function cekNilai() {
    let nilai = Number(prompt("Masukkan nilai Anda:"));
    if (nilai >= 90) {
        console.log("Nilai Anda A");
    } else if (nilai >= 80) {
        console.log("Nilai Anda B");
    } else if (nilai >= 70) {
        console.log("Nilai Anda C");
    } else if (nilai >= 60) {
        console.log("Nilai Anda D");
    } else {
        console.log("Nilai Anda E");
    }
}

function cekUmur() {
    let umur = Number(prompt("Masukkan umur Anda:"));
    if (umur >= 17) {
        console.log("Anda sudah cukup umur.");
    } else {
        console.log("Anda belum cukup umur.");
    }
}

// 2. FUNGSI UTAMA DENGAN SWITCH CASE

let pilihanMenu = prompt("Pilih Program:\n1. Cek Besar Kecil\n2. Cek Jenis Bilangan\n3. Challenge Penilaian\n4. Cek Grade Nilai\n5. Cek Umur");

switch (pilihanMenu) {
    case "1":
        cekBesarKecil();
        break;
    case "2":
        cekBilangan();
        break;
    case "3":
        hitungChallenge();
        break;
    case "4":
        cekNilai();
        break;
    case "5":
        cekUmur();
        break;
    default:
        console.log("Pilihan tidak ada di menu.");
        break;
}