let vize = Number(prompt("Vize notunuzu giriniz ?"))
let final = Number(prompt("Final Notunuzu giriniz ?"))
let total = (vize * (40 / 100)) + (final * (60 / 100));
if (total > 50 ) {
  alert('Geçtiniz. Ortalamanız = ' + total)
}else if ((total < 50) && (total > 40)) {
  alert('Şartlı geçtiniz. Ortalamanız = ' + total)
}else if (total < 50) {
  alert('Kaldınız. Ortalamanız = ' + total)
}else {
  alert('İşlem başarısız. Tekrar deneyiniz.')
}