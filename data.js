let pilihan="2";
switch (pilihan) {
case"1":
console.log("Data Siswa");
break;
case"2":
console.log("Data Guru");
break;
case"3":
console.log("Data Kelas");
break;
case"4":
console.log("Keluar");
// data.js — logika switch tetap sama, output ditampilkan di halaman

function pilihanData(pilihan) {
    let hasil;

    // Logika switch tetap sama persis
    switch (pilihan) {
        case "1":
            hasil = "Data Siswa";
            break;
        case "2":
            hasil = "Data Guru";
            break;
        case "3":
            hasil = "Data Kelas";
            break;
        case "4":
            hasil = "Keluar";
            break;
        default:
            hasil = "Pilihan tidak valid";
    }

    // Highlight tombol yang dipilih
    document.querySelectorAll(".data-menu button").forEach(btn => btn.classList.remove("active"));
    document.getElementById("btn-data-" + pilihan)?.classList.add("active");

    // Tampilkan ke halaman
    let box = document.getElementById("hasil-data");
    box.innerHTML = `<span class="label">Pilihan:</span> <span class="value">${pilihan}</span>\n` +
                    `<span class="label">Menu yang dipilih:</span> <span class="value">📂 ${hasil}</span>`;
    box.classList.add("show");

    // Tetap tampil di console
    console.log(hasil);
}