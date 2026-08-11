const htmlProductName = document.getElementById("productInput");
const htmlPrice = document.getElementById("priceInput");
const htmlAddButton = document.getElementById("addButton");
const cartList = document.getElementById("cartList");

let products = []
let itemExist = false

function addNewProduct(productName, price, quantity) {
  products.push({
    name: `${productName}`,
    price: Number(price),
    productQuantity: quantity,
  });
}

htmlAddButton.addEventListener("click", () => {
  let newProduct = htmlProductName.value
  let newPrice = htmlPrice.value
  let quantity = products.productQuantity || 1

if (products.length <= 0) {
      addNewProduct(newProduct, newPrice, quantity)
      htmlProductName.value = ""
      htmlPrice.value = ""

      cartList.innerText = `${newProduct}` + " - " + `${newPrice} x(` + `${quantity})`
} else if (products.length >= 0) {
      for (product of products) {
    if (newProduct === product.name) {
        console.log("Found PRODUCT WITH SAME!")
        product.productQuantity ++
        htmlProductName.value = ""
        htmlPrice.value = ""
        itemExist = true

      cartList.innerText = `${product.name}` + " - " + `${product.price} x(` + `${product.productQuantity})`
    }
  }

    addNewProduct(newProduct, newPrice, quantity);
}

  console.log(products)
});
