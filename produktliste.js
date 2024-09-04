fetch("https://kea-alt-del.dk/t7/api/products?limit=16")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}
function showProduct(product) {
  console.log(product);
  //fanger template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector("p").textContent = product.brandname;
  copy.querySelector(".pris").textContent = product.price + ",-";
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("a").href = `produkt.html?id=${product.id}`;

  // udsolgt/sale tilføjes ved if(product.soldout/discount) og så lægges en klasse til

  if (product.sale) {
    copy.querySelector("article").classList.add("sale_badge");
  }

  if (product.soldout) {
    copy.querySelector("article").classList.add("udsolgt_badge");
  }

  if (product)
    //appende
    document.querySelector("main").appendChild(copy);
}
