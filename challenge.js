// challenge.js — logika tetap sama persis, output ditampilkan di halaman

function jalankanChallenge() {
    let namaSiswa = prompt("Masukkan nama siswa:");
    if (!namaSiswa) return;

    let kelas      = prompt("Masukkan kelas siswa:");
    let nilaitugas = Number(prompt("Masukkan nilai tugas siswa:"));
    let nilaiuts   = Number(prompt("Masukkan nilai UTS siswa:"));
    let nilaiuas   = Number(prompt("Masukkan nilai UAS siswa:"));

    // Logika perhitungan tetap sama
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

    // Tentukan class warna keterangan
    let kelasKet = nilaiakhir >= 80 ? "keterangan-baik"
                 : nilaiakhir >= 75 ? "keterangan-cukup"
                 : "keterangan-gagal";

    // Tetap tampil di console seperti aslinya
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

    // Tampilkan ke halaman
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