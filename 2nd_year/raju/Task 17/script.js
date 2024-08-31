let price = 0;
let i = 0;
let items = [
  {
    name: "Dry Cleaning",
    price: 200,
    image:
      "https://images.unsplash.com/photo-1535999930924-9b47c55d0f7b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Leather and Suede Cleaning",
    price: 999,
    image:
      "https://assets.ajio.com/medias/sys_master/root/20231028/eOQ2/653cad89ddf77915195fd727/-473Wx593H-462693908-brown-MODEL.jpg",
  },
  {
    name: "Ironing",
    price: 30,
    image:
      "https://plus.unsplash.com/premium_photo-1682129257696-dfe914806043?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Wedding dress cleaning",
    price: 2400,
    image:
      "https://cdn.shopify.com/s/files/1/0067/1521/1879/articles/rsz_wgp_commercial_photoshoot_-_0032.jpg?v=1601431300",
  },
  {
    name: "Wash And Fold",
    price: 140,
    image:
      "https://masterdrycleaners.com.au/wp-content/uploads/2021/07/FEATURE-100.jpg",
  },
  {
    name: "Stain removal",
    price: 500,
    image:
      "https://spotlesswasche.com/wp-content/uploads/2021/06/Stain-Removl.webp",
  },
];


let cart = [];
// cart.addEventListener("add", function () {
//   console.log("Item added to cart");
//   if(cart.length==0){
//     alert("Item added to cart");
//   }
// });

function addToCart(item) {
  cart.push(item);
  price += item.price;
  render();
  renderItem();
}
let addToCartButton = document.getElementsByClassName("add-btn");
addToCartButton[0].addEventListener("click", function () {
  console.log("Button clicked");
  // alert("Item added to cart");
  addToCart(items[i]);
  i++;
  i = i % 5;
});

function render() {
  let cartList = document.getElementsByClassName("cart-list");
  cartList[0].innerHTML = "";
  cart.forEach((item) => {
    // let div = document.createElement("div");
    // div.classList.add("cart-item");
    let listItem = document.createElement("li");
    listItem.classList.add("cart-item");
    listItem.innerHTML = `<div>${item.name}</div><div>${item.price}</div>`;
    cartList[0].appendChild(listItem);
  });

  let totalPrice = document.getElementsByClassName("total-price");
  totalPrice[0].innerText = price;
}
function renderItem() {
  let item = items[(i+1)%5];
  let itemImage = document.getElementsByClassName("item-image");
  itemImage[0].src = item.image;
  let itemName = document.getElementsByClassName("item-name");
  itemName[0].innerText = item.name;
  let itemPrice = document.getElementsByClassName("item-price");
  itemPrice[0].innerText = "₹" + item.price;
}
let skipButton = document.getElementsByClassName("skip-btn");
skipButton[0].addEventListener("click", function () {
  console.log("Button clicked");
  i++;
  i = i % 5;
  renderItem();
});

let names = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let submitButton = document.getElementById("submit");
submitButton.addEventListener("click",function(){
  console.log("Button clicked");
  if(names.value=null || names.value=="" || email.value=="" || phone.value=="" || phone.value==null || email.value==null){
    let rr= document.getElementsByClassName("required");
    rr[0].innerHTML= "<p class='text-red-500'>**All feilds are required</p>";
  }
  else{
    alert("Thank you for your order");
    cart = [];
    price = 0;
    render();
    renderItem();
    names.value = "";
    email.value = "";
    phone.value = "";
  }
});

