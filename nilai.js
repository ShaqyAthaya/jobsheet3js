let nilai=Number(prompt("Masukkan nilai Anda:"));
// nilai.js — logika tetap sama, output ditampilkan di halaman

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
function jalankanNilai() {
    let nilai = Number(prompt("Masukkan nilai Anda:"));

    if (isNaN(nilai)) return;

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

    // Tampilkan ke halaman
    let box = document.getElementById("hasil-nilai");
    box.innerHTML = `<span class="label">Nilai yang dimasukkan:</span> <span class="value">${nilai}</span>\n` +
                    `<span class="label">Grade:</span> <span class="badge badge-${grade}">${grade}</span>`;
    box.classList.add("show");

    // Tetap tampil di console
    console.log("Nilai Anda " + grade);
}