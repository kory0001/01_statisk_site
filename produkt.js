const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

function getProduct() {
  fetch(url)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(product) {
  document.querySelector(".title").textContent = product.productdisplayname;
  document.querySelector("p").textContent = product.brandname;
  document.querySelector(".product_id").textContent = "Article ID: " + product.id;
  document.querySelector(".product_category").textContent = "Category: " + product.category;
  document.querySelector(".product_subcategory").textContent = "Subategory: " + product.subcategory;
  document.querySelector(".product_articletype").textContent = "Articletype: " + product.articletype;
  document.querySelector(".product_usagetype").textContent = "Usagetype: " + product.usagetype;
  document.querySelector(".product_season").textContent = "Season: " + product.season;
  document.querySelector(".product_productionyear").textContent = "Productionyear: " + product.productionyear;
  document.querySelector(".pris_sigleview").textContent = product.price + ",-";
  document.querySelector("main img").src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
}

getProduct();
