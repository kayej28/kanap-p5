//fonction fetch

fetch("http://localhost:3000/api/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    return addproducts(data);
  });

// fonction pour l'element

function addproducts(data) {
  data.forEach((canap) => {
    const article = addArticle(canap);
    const section = document.getElementById("items");
    console.log(article, section);
    section.innerHTML += article;
  });
}

function addArticle(kanap) {
  //     altTxt: "Photo d'un canapé bleu, deux places"
  // colors: (3) ['Blue', 'White', 'Black']
  // description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  // imageUrl: "http://localhost:3000/images/kanap01.jpeg"
  // name: "Kanap Sinopé"
  // price: 1849
  // _id: "107fb5b75607497b96722bda5b504926"
  const html = `<a href="./product.html?id=${kanap._id}">
    <article>
      <img src="${kanap.imageUrl}" alt="${kanap.altTxt}">
      <h3 class="productName">${kanap.name}</h3>
      <p class="productDescription">${kanap.description}</p>
    </article>
  </a>`;
  return html;
}

// function tryTesting(id) {
//const testing = document.createElement("a");
//testing.href = "./product.html?id=" +id;
//return testing;
//}

// function newChildren(testing) {
//   if (items) {
//     document.getElementById("items");
//     items.appendChild(testing);
//     console.log("ajout du lien");
//   }
// }

// fonction pour le descriptif
