// ============================================================
// app.js — Semua fungsi dari jobsheet, output ke halaman & console
// ============================================================

// ---- 1. Cek Besar Kecil ----
function cekBesarKecil() {
    let angka1 = Number(prompt("Masukkan angka pertama:"));
    let angka2 = Number(prompt("Masukkan angka kedua:"));

    let hasil;
    if (angka1 > angka2) {
        hasil = "Angka terbesar adalah " + angka1;
    } else if (angka2 > angka1) {
        hasil = "Angka terbesar adalah " + angka2;
    } else {
        hasil = "Kedua angka sama besar.";
    }

    console.log(hasil);

    let box = document.getElementById("hasil-besarkecil");
    box.innerHTML = `<span class="label">Angka 1 :</span> <span class="value">${angka1}</span>\n` +
                    `<span class="label">Angka 2 :</span> <span class="value">${angka2}</span>\n` +
                    `<span class="label">Hasil   :</span> <span class="value">${hasil}</span>`;
    box.classList.add("show");
}

// ---- 2. Cek Bilangan ----
function cekBilangan() {
    let bilangan = Number(prompt("Masukkan bilangan:"));

    let hasil;
    if (bilangan > 0) {
        hasil = "Bilangan positif";
    } else if (bilangan < 0) {
        hasil = "Bilangan negatif";
    } else {
        hasil = "Bilangan nol";
    }

    console.log(hasil);

    let box = document.getElementById("hasil-bilangan");
    box.innerHTML = `<span class="label">Bilangan :</span> <span class="value">${bilangan}</span>\n` +
                    `<span class="label">Hasil    :</span> <span class="value">${hasil}</span>`;
    box.classList.add("show");
}

// ---- 3. Challenge Penilaian Siswa ----
function hitungChallenge() {
    let namaSiswa  = prompt("Masukkan nama siswa:");
    if (!namaSiswa) return;
    let kelas      = prompt("Masukkan kelas siswa:");
    let nilaitugas = Number(prompt("Masukkan nilai tugas siswa:"));
    let nilaiuts   = Number(prompt("Masukkan nilai UTS siswa:"));
    let nilaiuas   = Number(prompt("Masukkan nilai UAS siswa:"));

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
    console.log("Nama Siswa: "  + namaSiswa);
    console.log("Kelas: "       + kelas);
    console.log("Nilai Tugas: " + nilaitugas);
    console.log("Nilai UTS: "   + nilaiuts);
    console.log("Nilai UAS: "   + nilaiuas);
    console.log("Nilai Akhir: " + nilaiakhir);
    console.log("Keterangan: "  + keterangan);
    console.log("====================");

    let kelasKet = nilaiakhir >= 80 ? "keterangan-baik"
                 : nilaiakhir >= 75 ? "keterangan-cukup"
                 : "keterangan-gagal";

    let box = document.getElementById("hasil-challenge");
    box.innerHTML =
        `<span class="label">Nama Siswa  :</span> <span class="value">${namaSiswa}</span>\n` +
        `<span class="label">Kelas       :</span> <span class="value">${kelas}</span>\n` +
        `<span class="label">Nilai Tugas :</span> <span class="value">${nilaitugas}</span>\n` +
        `<span class="label">Nilai UTS   :</span> <span class="value">${nilaiuts}</span>\n` +
        `<span class="label">Nilai UAS   :</span> <span class="value">${nilaiuas}</span>\n` +
        `──────────────────────────────\n` +
        `<span class="label">Nilai Akhir :</span> <span class="value">${nilaiakhir.toFixed(2)}</span>\n` +
        `<span class="label">Keterangan  :</span> <span class="${kelasKet}">${keterangan}</span>`;
    box.classList.add("show");
}

// ---- 4. Cek Grade Nilai ----
function cekNilai() {
    let nilai = Number(prompt("Masukkan nilai Anda:"));

    let grade;
    if (nilai >= 90) {
        grade = "A";
    } else if (nilai >= 80) {
        grade = "B";
    } else if (nilai >= 70) {
        grade = "C";
    } else if (nilai >= 60) {
        grade = "D";
    } else {
        grade = "E";
    }

    console.log("Nilai Anda " + grade);

    let box = document.getElementById("hasil-nilai");
    box.innerHTML = `<span class="label">Nilai yang dimasukkan :</span> <span class="value">${nilai}</span>\n` +
                    `<span class="label">Grade                :</span> <span class="badge badge-${grade}">${grade}</span>`;
    box.classList.add("show");
}

// ---- 5. Cek Umur ----
function cekUmur() {
    let umur = Number(prompt("Masukkan umur Anda:"));

    let pesan;
    if (umur >= 17) {
        pesan = "Anda sudah cukup umur.";
    } else {
        pesan = "Anda belum cukup umur.";
    }

    console.log(pesan);

    let box = document.getElementById("hasil-umur");
    box.innerHTML = `<span class="label">Umur  :</span> <span class="value">${umur} tahun</span>\n` +
                    `<span class="label">Hasil :</span> <span class="value">${pesan}</span>`;
    box.classList.add("show");
}

// ---- 6. Menu Data (Switch) ----
function pilihanData(pilihan) {
    let hasil;
    switch (pilihan) {
        case "1": hasil = "Data Siswa";  break;
        case "2": hasil = "Data Guru";   break;
        case "3": hasil = "Data Kelas";  break;
        case "4": hasil = "Keluar";      break;
        default:  hasil = "Tidak valid"; break;
    }

    console.log(hasil);

    document.querySelectorAll(".data-menu button").forEach(btn => btn.classList.remove("active"));
    let activeBtn = document.getElementById("btn-data-" + pilihan);
    if (activeBtn) activeBtn.classList.add("active");

    let box = document.getElementById("hasil-data");
    box.innerHTML = `<span class="label">Pilihan :</span> <span class="value">${pilihan}</span>\n` +
                    `<span class="label">Menu    :</span> <span class="value">📂 ${hasil}</span>`;
    box.classList.add("show");
}