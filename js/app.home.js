import { getFoodReceipt, generateElement } from './script.js';

const chicken_parmesan = document.getElementById('chicken_parmesan');
const input = document.getElementById('input'); // tambahkan elemen input di HTML dengan id 'input'

async function panggilMenu() {
  const hasil = await getFoodReceipt();
  console.log(hasil);

  // fungsi untuk memfilter array hasil berdasarkan nilai input
  const filterMenu = (query) => hasil.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));

  // fungsi untuk menghapus elemen-elemen lama dan menambahkan elemen-elemen baru
  function updateMenu(array) {
    // hapus semua elemen anak dari chicken_parmesan
    while (chicken_parmesan.firstChild) {
      chicken_parmesan.removeChild(chicken_parmesan.firstChild);
    }
    // tambahkan elemen-elemen baru dari array
    array.forEach((item) => {
      // gunakan destructuring assignment untuk mengekstrak properti dari item
      const { title, images, id } = item;

      const new_element_image = generateElement({
        tag: 'img',
        src: images,
      });

      const new_element = generateElement({
        tag: 'a',
        // gunakan template literals untuk membuat string yang mengandung id
        href: `/detail/${id}`,
        value: title,
      });

      chicken_parmesan.append(...[new_element_image, new_element]);
    });
  }

  // tambahkan event listener untuk input
  input.addEventListener('input', (event) => {
    // dapatkan nilai input
    const query = event.target.value;
    // filter array hasil berdasarkan nilai input
    const filtered = filterMenu(query);
    // update elemen-elemen di HTML dengan array hasil filter
    updateMenu(filtered);
  });

  // tampilkan semua elemen di awal
  updateMenu(hasil);
}

panggilMenu();
