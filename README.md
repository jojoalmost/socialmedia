# Assumption

### Guide
- halaman awal dengan route ``"/"`` akan di redirect ke ``"/users"`` dimana berisi tentang halaman semua user
- Untuk membuat POST saya menggunakan ```userId``` yang dipilih dari halaman user list yang terpilih di awal
- Method ```POST https://jsonplaceholder.typicode.com/posts``` selalu mendapat kan ```id``` yang sama yaitu ```101``` sehingga menyebabkan duplikasi ```id``` dari component yang berakibat ketika menghapus Post yang memliki ```id``` yang sama akan terhapus semua
- Method ```PUT https://jsonplaceholder.typicode.com/posts/101``` selalu mendapatkan response 500 (karena cuma mokup) jadi
  tidak bisa merubah data dari data yang baru di input.
  
- **State Management** disini saya gunakan **Redux**. **Redux** ini hanya terdapat di photos album. **Redux** yang saya gunakan hanya untuk passing dari photo yang akan dilihat detailnya di passing ke modal. Karena banyak **API** yang sudah di handle dari https://jsonplaceholder.typicode.com/ jadi saya memaksimalkan local state
- Struktur Response dari ```POST https://jsonplaceholder.typicode.com/comments``` tidak sama dengan ```GET https://jsonplaceholder.typicode.com/posts/1/comments```.  Ketika membuat komentar, ```userId``` yang dipilih dari halaman user list yang terpilih di awal. Setelah menghit API Create komentar response ```userId``` di passing dan di hit ke API user untuk mendapatkan nama dan email
- Untuk Struktur Response **Update** komentar juga tidak sesuai dengan struktur **Get Komentar** jadi ketika Update akan mengulangi hal yang sama seperti waktu **Create** komentar untuk mendapatkan nama dan email. akan tetapi disini saya mengirimkan ```userId``` yang terpilih di awal. jadi nama dan email komentar akan terupdate sesuai dari user yang dipilih

