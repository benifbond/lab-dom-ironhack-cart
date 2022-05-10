// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

const priceElement = product.querySelector('.price span');
const quantityElement = product.querySelector('.quantity input');

const price =priceElement.innerHTML;
const quantity= quantityElement.value;

const subTotal= new Intl.NumberFormat('en-Us').format(price * quantity);

const subtotalElement =product.querySelector('.subtotal span');
subtotalElement.innerHTML = subTotal;
return subTotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProducts = document.getElementsByClassName('product');
  
  // end of test

  // ITERATION 2
  //... your code goes here
  for (let i=0;i<allProducts.length; i+=1){
  updateSubtotal(allProducts[i]);
  }
  // ITERATION 3
  //... your code goes here
  const totalPrice = document.querySelector('#total-value span');
  
  const allsubTotal = document.querySelectorAll('.subtotal span');

  let total = 0;
  for(let i =0; i<allsubTotal.length; i+=1){
    total += parseFloat(allsubTotal[i].innerHTML.replace(',', ''));

  }totalPrice.innerHTML =total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
