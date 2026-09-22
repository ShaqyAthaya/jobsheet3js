let bilangan=Number(prompt("Masukkan bilangan:"));
// bilangan.js — logika tetap sama, output ditampilkan di halaman

if (bilangan > 0) {
    console.log("Bilangan positif");
} else if (bilangan < 0) {
    console.log("Bilangan negatif");
} else {
    console.log("Bilangan nol");
function jalankanBilangan() {
    let bilangan = Number(prompt("Masukkan bilangan:"));

    if (isNaN(bilangan)) return;

    let hasil;
    if (bilangan > 0) {
        hasil = "Bilangan positif";
    } else if (bilangan < 0) {
        hasil = "Bilangan negatif";
    } else {
        hasil = "Bilangan nol";
    }

    // Tampilkan ke halaman
    let box = document.getElementById("hasil-bilangan");
    box.innerHTML = `<span class="label">Bilangan yang dimasukkan:</span> <span class="value">${bilangan}</span>\n` +
                    `<span class="label">Hasil:</span> <span class="value">${hasil}</span>`;
    box.classList.add("show");

    // Tetap tampil di console
    console.log(hasil);
}