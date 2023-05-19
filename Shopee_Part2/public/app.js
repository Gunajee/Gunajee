const addToCartButtons = document.querySelectorAll('.addToCartBtn');
const cartCount = document.getElementById('cartCount');
const cartOverlay = document.getElementById('cartOverlay');
const cartProducts = document.getElementById('cartProducts');
const checkoutBtn = document.getElementById('checkoutBtn');
const closeCartBtn = document.getElementById('closeCartBtn');

let count = 0;

// Add click event listeners to all "Add to Cart" buttons
addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    count++;
    cartCount.textContent = count;
    const product = button.parentNode;
    const productTitle = product.querySelector('p').textContent;
    const productPrice = product.querySelector('.price').textContent;
    const cartProduct = document.createElement('div');
    cartProduct.innerHTML = `<p>${productTitle} - ${productPrice}</p>`;
    cartProducts.appendChild(cartProduct);
  });
});

// Open cart overlay when cart icon is clicked
cartCount.addEventListener('click', () => {
  cartOverlay.style.display = 'block';
});

// Close cart overlay when close button is clicked
closeCartBtn.addEventListener('click', () => {
  cartOverlay.style.display = 'none';
});

// Checkout functionality (you can add your own logic here)
checkoutBtn.addEventListener('click', () => {
  alert('Checkout functionality to be implemented.');
});
