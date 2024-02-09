const axios = require('axios');

// Data resep makanan yang akan ditambahkan
const newRecipe = {
  title: 'Spaghetti Carbonara',
  description: 'A classic Italian pasta dish featuring eggs, cheese, pancetta, and black pepper.',
  images: 'https://images.unsplash.com/photo-1565294475508-6bf9c5a5810f?q=80&fm=jpg&w=1200&fit=max',
  ingredients: [
    '12 ounces spaghetti',
    '2 large eggs',
    '1 cup grated Pecorino Romano cheese',
    '4 ounces pancetta or bacon, diced',
    '2 cloves garlic, minced',
    'Freshly ground black pepper',
    'Salt to taste',
    '2 tablespoons chopped fresh parsley leaves',
  ],
  instructions:
    'Cook spaghetti according to package instructions until al dente. While spaghetti is cooking, whisk together eggs, Pecorino Romano cheese, and a generous amount of black pepper in a bowl. In a large skillet, cook pancetta over medium heat until crispy. Add minced garlic to the skillet and cook until fragrant. Remove from heat. When spaghetti is done, reserve 1/2 cup of pasta water, then drain spaghetti and immediately add it to the skillet with pancetta and garlic. Toss well to coat spaghetti with the pancetta fat. Remove skillet from heat. Quickly pour in the egg and cheese mixture, tossing vigorously to coat the spaghetti. If the sauce seems too thick, gradually add reserved pasta water until desired consistency is reached. Season with salt if needed. Serve immediately, garnished with chopped parsley.',
  servings: 4,
  prep_time: 10,
  cook_time: 10,
  total_time: 20,
};

// Fungsi untuk menambahkan resep makanan ke API
async function addFoodRecipe(recipe) {
  try {
    const response = await axios.post('http://128.199.167.159/v1/idc/food-receipt', recipe);
    console.log('Resep berhasil ditambahkan:', response.data);
    return response.data;
  } catch (error) {
    console.error('Gagal menambahkan resep:', error.response.data);
    throw new Error('Gagal menambahkan resep');
  }
}

// Panggil fungsi untuk menambahkan resep makanan
addFoodRecipe(newRecipe)
  .then(() => {
    console.log('Resep berhasil ditambahkan!');
  })
  .catch((error) => {
    console.error('Terjadi kesalahan:', error.message);
  });
