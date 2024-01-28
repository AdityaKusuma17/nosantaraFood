// Tentukan endpoint API untuk data resep makanan
const apiUrl = 'http://128.199.167.159/v1/idc/food-receipts';

// Buat permintaan GET menggunakan Fetch API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Respon jaringan tidak ok');
    }
    return response.json();
  })
  .then(foodData => {
    // Proses data resep makanan yang diambil
    console.log('Data Resep Makanan:', foodData);
  })
  .catch(error => {
    console.error('Error:', error);
  });