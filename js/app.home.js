async function panggilMenu() {
  console.log('hello world');
  const res = await fetch('http://128.199.167.159/v1/idc/food-receipts');
  const data = await res.json();
  console.log(data);

  const foods = data.data
    .map((item) => {
      const el = `
    <div class=" p-4 rounded-lg shadow-md">
        <img
          src="${item.images}"
          alt="${item.title}"
          class="w-full h-48 object-cover rounded-lg"
        />
        <h3 class="mt-5 text-center text-lg font-semibold">${item.title}</h3>
        <p class="text-gray-600 text-center">${item.description}</p>
      </div>
    `;
      console.log(item);

      return el;
    })
    .join('');

  console.log(foods);

  const container = document.getElementById('foods-container');
  container.innerHTML = foods;
}

panggilMenu();
