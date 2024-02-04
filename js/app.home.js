import { getFoodReceipt } from './script.js';

async function panggilMenu() {
  const hasil = await getFoodReceipt();

  console.log(hasil);
}

panggilMenu();
