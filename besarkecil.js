let angka1 = Number(prompt("Masukkan angka pertama:"));
let angka2 = Number(prompt("Masukkan angka kedua:"));
if (angka1 > angka2) {
    console.log("Angka terbesar adalah " + angka1);
} else if (angka2 > angka1) {
    console.log("Angka terbesar adalah " + angka2);
} else {
    console.log("Kedua angka sama besar.");
}