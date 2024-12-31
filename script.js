
  let cart = [];

  // Function to add item to cart
  function addToCart(product) {
    cart.push(product);
    updateCart();
  }

  // Function to update cart
  function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.name}</td>
        <td>$${item.price}</td>
        <td>1</td>
        <td>$${item.price}</td>
      `;
      cartItems.appendChild(row);
      total += item.price;
    });
    const cartBadge = document.querySelector('.badge');
    cartBadge.textContent = cart.length;
    const cartTotal = document.createElement('tr');
    cartTotal.innerHTML = `
      <td colspan="3">Total:</td>
      <td>$${total}</td>
    `;
    cartItems.appendChild(cartTotal);
  }

  // Add event listeners to shop buttons
  const shopButtons = document.querySelectorAll('.product-card .btn-primary');
  shopButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const product = {
        name: button.parentNode.parentNode.querySelector('.card-title').textContent,
        price: parseFloat(button.parentNode.parentNode.querySelector('.card-text').textContent.replace('$', ''))
      };
      addToCart(product);
    });
  });



  var myCarousel = document.getElementById('carouselExampleControls');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
  });



  function clearCart() {
    document.getElementById('cartItems').innerHTML = '';
  }