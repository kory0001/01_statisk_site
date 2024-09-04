const categoryList = document.querySelector("#categoryList");
const params = new URLSearchParams(document.location.search);
const category = params.get("category");

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((categories) => {
    console.log(categories);
    categories.forEach((category) => {
      categoryList.innerHTML += `<li><a href="kategori.html?category=${category.category}">${category.category}</a></li>`;
    });
  });

if (params.has("category")) {
  console.log("category is defined");
  url = "https://kea-alt-del.dk/t7/api/products?category=" + category;
} else {
  url = "https://kea-alt-del.dk/t7/api/products";
}
