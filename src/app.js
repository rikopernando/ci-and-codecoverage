import { incrementQty, decrementQty, recalculateSubtotal } from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const price = document.querySelector("#price")
const subtotal = document.querySelector("#subtotal")
const codePromo = document.querySelector("#code")
const confirmCodeButton = document.querySelector("#confirmCode")
let discount = 0

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subtotal.textContent = `Rp. ${recalculateSubtotal(price.value, qtyInput.value, discount)}`
});

decrButton.addEventListener('click', () => {
  qtyInput.value = decrementQty(qtyInput.value);
  subtotal.textContent = `Rp. ${recalculateSubtotal(price.value, qtyInput.value, discount)}`
});

confirmCodeButton.addEventListener('click', () => {
  if (codePromo.value === "KODE27") {
    discount = 27
    subtotal.textContent = `Rp. ${recalculateSubtotal(price.value, qtyInput.value, discount)}`
  } else {
    discount = 0
    subtotal.textContent = `Rp. ${recalculateSubtotal(price.value, qtyInput.value, discount)}`
  }
})
