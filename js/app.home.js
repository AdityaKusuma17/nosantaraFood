import { getFoodReceipt, generateElement } from "./script.js";

const menu_makanan = document.getElementById("menu_makanan");

async function panggilMenu() {
  const hasil = await getFoodReceipt();
  console.log(hasil);

  // hasil.forEach((item) => {
  //   console.log(item);
  //   const new_element = generateElement({
  //     // 1. tag: "div",
  //     // value: item.id,
  //     // className: "card",
  //     // ctrl + space

  //     // 2.  for image
  //     // tag: "img",
  //     // // value: item.id,
  //     // src: item.images,
  //     // className: "card",
  //     // // ctrl + space

  //     // 3. <a ></a>
  //     tag: "a",
  //     value: item.title,
  //     // src: item.images,
  //     href: "/detail/" + item.id,
  //     className: "card",
  //     // ctrl + space

  //   });

  //   menu_makanan.append(new_element);
  // });

  // jika case image dan anchor
  hasil.forEach((item) => {
    // 1. image
    const new_element_image = generateElement({
      //     // 1. tag: "div",
      tag: "img",
      src: item.images,
      // className: "card",
    });

    // 2. element anchor
    const new_element = generateElement({
      //     // 1. tag: "div",
      tag: "a",
      href: "/detail/" + item.id,
      value: item.title,
      // className: "card",
    });

    // // image di masukkan dalam new_element
    // new_element.append(new_element_image);
    // // new_element dimasukkan dalam div dengan id menu_makanan
    // menu_makanan.append(new_element);
    menu_makanan.append(...[new_element_image, new_element]);
  });
}

panggilMenu();
