const params = new URLSearchParams(document.location.search);
const category = params.get("category");
console.log(category);

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
  .then((res) => res.json())
  .then(showProducts);
if (params.has("category")) {
  url = `https://kea-alt-del.dk/t7/api/products?category=${category}`;
} else {
  url = "https://kea-alt-del.dk/t7/api/products";
}

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}
function showProduct(product) {
  // console.log(product);
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
  if (product.discount) {
    copy.querySelector(".sale_badge").classList.add("sale_badge");
    copy.querySelector(".ny_pris").textContent = Math.round(product.price - (product.price * product.discount) / 100) + ",-";
    copy.querySelector(".pris").classList.add("line_through");
  } else {
    copy.querySelector(".sale_badge").classList.add("displaynone");
    copy.querySelector(".udsolgt_badge_kombi").classList.add("displaynone");
  }

  if (product.soldout) {
    copy.querySelector("article").classList.add("opacity");

    // If product is both sold out and discounted
    if (product.discount) {
      copy.querySelector(".sale_badge").classList.add("sale_badge");
      copy.querySelector(".ny_pris").textContent = Math.round(product.price - (product.price * product.discount) / 100) + ",-";
      copy.querySelector(".udsolgt_badge").classList.add("displaynone");
      copy.querySelector(".udsolgt_badge_kombi").classList.add("udsolgt_badge_kombi");
    } else {
      copy.querySelector(".udsolgt_badge").classList.add("udsolgt_badge");
    }
  } else {
    copy.querySelector(".udsolgt_badge").classList.add("displaynone");
    copy.querySelector(".udsolgt_badge_kombi").classList.add("displaynone");
  }

  if (product)
    //appende
    document.querySelector("main").appendChild(copy);
}
