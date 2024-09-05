const categoryLinksContainer = document.querySelector(".kategori_links");
const url = undefined;

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((categories) => {
    console.log(categories, "Kategorierne vises nu");
    categories.forEach((cat) => {
      // Renamed loop variable to 'cat'
      // Nedenstående += sikrer at elementer ikke overskrives, men at hele listen af elementer vises
      // innerHTML bruges i JS til at sætte indhold ind i HTML'en
      categoryLinksContainer.innerHTML += `
        <a href="produktliste.html?category=${cat.category}">
          <div class="flex_kategori">
            <h2>${cat.category}</h2>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="2.14rem" height="1.2rem" viewBox="0 0 16 9">
                <path fill="black" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5" />
                <path fill="black" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z" />
              </svg>
            </div>
          </div>
        </a>
      `;
    });
  });
