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
  document.querySelector(".p_description").textContent = product.season;
  document.querySelector("main img").src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
}

getProduct();

//     <div><img src="img/bibs.webp" alt="bib"></div>
//     <div>
//         <h1 class="title">MENS PRO BIBS CYCLING SHORT</h1>
//         <p class="p_intro">Our most comfortable and durable model yet.</p>
//         <p>This bibs is an essential pair in any riders wardrobe. It is created to suit training efforts and long
//             days in the saddle.
//             This is also why it was made with the four-layer ultralight foam chamois, securing maximum comfort and
//             durability, that moves with your body as you go.
//             The micro-perforated straps are both comfortable and practical, as they keep the bibs in place at all
//             times. The fabric is stretchy, and of highest quality available.
//         </p>
//         <br>
//         <h4>Product details</h4>
//         <ul>
//             <li>
//                 Four-layer ultralight foam chamois</li>
//             <li>
//                 Micro-perforated straps
//             </li>
//             <li>
//                 Resilient to elastic degradation</li>
//             <li>
//                 UPF 40 low-profile shoulder straps
//             </li>
//             <li>
//                 Fully-dyed fabrics</li>
//             <li>
//                 Fabric: 82% Polyester 18% Elastane</li>
//             <li>
//                 Made in Italy</li>
//         </ul>
//         <br>
//         <p>1250,-</p>

//         <div class="button_container">
//             <a href="#" class="buy_now">Buy Now</a>
//         </div>
//     </div>
