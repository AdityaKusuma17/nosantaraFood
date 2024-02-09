// // Tentukan endpoint API untuk data resep makanan
// const apiUrl = 'http://128.199.167.159/v1/idc/food-receipts';

// // Buat permintaan GET menggunakan Fetch API
// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Respon jaringan tidak ok');
//     }
//     return response.json();
//   })
//   .then(foodData => {
//     // Proses data resep makanan yang diambil
//     console.log('Data Resep Makanan:', foodData);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

const BASE_URL = "http://128.199.167.159/v1/idc";

export async function getQuestionById({ id = 10 }) {
  try {
    const response = await fetch(`${BASE_URL}/food-receipts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    return result?.data;
  } catch (error) {
    console.error("Error Nih: ", {
      error,
    });
  }
}

export async function getFoodReceipt() {
  try {
    const response = await fetch(`${BASE_URL}/food-receipts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result?.data;

    console.log("Makanan : ", result.data);
  } catch (error) {
    console.error("Error Nih: ", {
      error,
    });
  }
}



export async function updateQuestionById({ id = 1, payload = undefined }) {
  try {
    const response = await fetch(`${BASE_URL}/api/quiz/${id}/update`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error Nih: ", {
      error,
    });
  }
}

export async function deleteQuestionById({ id = 1 }) {
  try {
    const response = await fetch(`${BASE_URL}/api/quiz/${id}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error Nih: ", {
      error,
    });
  }
}

export function generateElement({
  tag,
  id,
  className,
  value,
  href,
  elementHTML,
  src,
}) {
  const element = document.createElement(tag);

  if (id) element.id = id;
  if (className) element.className = className;
  if (value) element.innerText = value;
  if (elementHTML) element.innerHTML = elementHTML;

  if (tag === "a") element.href = href;
  if (tag === "img") element.src = src;

  return element;
}
