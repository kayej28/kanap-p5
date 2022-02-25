fetch("http://localhost:3000/api/products")
  .then((response) => response.json())
  .then((data) => {
    //console.log("data=",data);
    return addproducts(data);
  });

fetch("http://localhost:3000/api/products")
  .then((response) => response.json())
  .then((data) => {
    return addAllProperty(data);
  });

function addproducts(data) {
  //console.log(data);
  let selectKanap;
  const params = new URLSearchParams(window.location.search);
  const id = params.getAll("id");
  data.forEach((kanap) => {
    if (kanap._id == id) {
      selectKanap = kanap;
      //console.log(selectKanap);
    }
  });
  const article = addKanap(selectKanap);
  const div = document.querySelector(".item__img");
  //console.log(article, section);
  div.innerHTML = article;
  //console.log(div.innerHTML);
}

function addKanap(selectKanap) {
  //console.log(selectKanap.imageUrl);
  const html = `<a href="./product.html?id=${selectKanap._id}">
  <img src="${selectKanap.imageUrl}" alt="${selectKanap.altTxt}">`;
  return html;
}

//proprieter titre et prix

function addAllProperty(data) {
  //console.log(data);
  let selectKanap;
  const params = new URLSearchParams(window.location.search);
  const id = params.getAll("id");
  data.forEach((kanap) => {
    if (kanap._id == id) {
      selectKanap = kanap;
      //console.log(selectKanap);
    }
  });
  const pouette = addProperty(selectKanap);
  const div = document.querySelector(".item__content__titlePrice");
  div.innerHTML = pouette;
  //console.log(div.innerHTML);
}

function addProperty(selectKanap) {
  const html = `<a href="./product.html?id=${selectKanap._id}">
  <h1 id="title">${selectKanap.name}</h1>
  <p>Prix : <span id="price">${selectKanap.price}</span>€</p>`;
  return html;
}
