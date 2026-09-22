let umur=Number(prompt("Masukkan umur Anda:"));
if (umur >= 17) {
    console.log("Anda sudah cukup umur.");
} else {
    console.log("Anda belum cukup umur.");
// umur.js — logika tetap sama, output ditampilkan di halaman

function jalankanUmur() {
    let umur = Number(prompt("Masukkan umur Anda:"));

    if (isNaN(umur) || umur === null) return;

    let pesan;
    if (umur >= 17) {
        pesan = "Anda sudah cukup umur.";
    } else {
        pesan = "Anda belum cukup umur.";
    }

    // Tampilkan ke halaman
    let box = document.getElementById("hasil-umur");
    box.innerHTML = `<span class="label">Umur yang dimasukkan:</span> <span class="value">${umur} tahun</span>\n` +
                    `<span class="label">Hasil:</span> <span class="value">${pesan}</span>`;
    box.classList.add("show");

    // Tetap tampil di console
    console.log(umur >= 17 ? "Anda sudah cukup umur." : "Anda belum cukup umur.");
}