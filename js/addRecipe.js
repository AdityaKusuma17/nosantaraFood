const BASE_URL = 'http://128.199.167.159/v1/idc';

// http://128.199.167.159/v1/idc/food-receipt

export async function createFoodReceipt({ payload = undefined }) {
  try {
    const response = await fetch(`${BASE_URL}/food-receipt`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error Nih: ', {
      error,
    });
  }
}

const inputTitle = document.getElementById('title');
const inpoutDescription = document.getElementById('description');
const inputImages = document.getElementById('images');
const inputIngredients = document.getElementById('ingredients');
const inputInstructions = document.getElementById('instructions');
const inputServings = document.getElementById('servings');
const inputPrepTime = document.getElementById('prep_time');
const inputCookTime = document.getElementById('cook_time');
const inputTotalTime = document.getElementById('total_time');

const buttonSumbit = document.getElementById('send-data');

document.addEventListener('DOMContentLoaded', function () {
  // fungsi menambahkan resep makanan ke server/api

  buttonSumbit.addEventListener('click', () => {
    console.log('click');
    const payload = {
      title: inputTitle.value,
      description: inpoutDescription.value,
      images: inputImages.value,
      ingredients: inputIngredients.value,
      instructions: inputInstructions.value,
      servings: Number(inputServings.value),
      prep_time: Number(inputPrepTime.value),
      cook_time: Number(inputCookTime.value),
      total_time: Number(inputTotalTime.value),
    };

    createFoodReceipt({ payload: payload });
    // window.location.href = "/menumakanan.html";
    // console.log({ payload })
  });
});
