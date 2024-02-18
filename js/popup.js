// popup.js

// Fungsi untuk menampilkan pop-up konfirmasi
function showConfirmationPopup() {
    // Menggunakan fungsi window.confirm untuk menampilkan pop-up konfirmasi
    const isConfirmed = window.confirm("Apakah Anda yakin ingin menambahkan menu ini?");
  
    // Jika pengguna mengklik tombol OK pada pop-up konfirmasi, kirimkan data
    if (isConfirmed) {
      sendData();
    }
  }
  
  // Fungsi untuk mengirim data
  function sendData() {
    // Ambil data dari input
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const images = document.getElementById("images").value;
    const ingredients = document.getElementById("ingredients").value;
    const instructions = document.getElementById("instructions").value;
    const servings = document.getElementById("servings").value;
    const prep_time = document.getElementById("prep_time").value;
    const cook_time = document.getElementById("cook_time").value;
    const total_time = document.getElementById("total_time").value;
  
    // Kirim data ke server
    // Gantikan bagian ini dengan kode yang sesuai untuk mengirim data ke server
    console.log("Data telah dikirim:", { title, description, images, ingredients, instructions, servings, prep_time, cook_time, total_time });
  }
  
  // Tambahkan event listener ke tombol
  document.getElementById("send-data").addEventListener("click", showConfirmationPopup);
  