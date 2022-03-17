const params = new URLSearchParams(window.location.search);
const id = params.getAll("id")[0];
console.log(id);
fetch("http://localhost:3000/api/products/" + id)
  .then((response) => response.json())
  .then((data) => {
    console.log("data=", data);
    addProducts(data);
  })
  .catch((err) => console.error(err));

function addProducts(data) {
  const article = addKanap(data);
  const div = document.querySelector(".item__img");
  div.innerHTML = article;
  addPrice(data);
  addName(data);
  addDescription(data);
  addValue(data);
}

function addKanap(data) {
  const html = `<a href="./product.html?id=${data._id}">
  <img src="${data.imageUrl}" alt="${data.altTxt}">`;
  return html;
}

function addPrice(data) {
  const price = data.price;
  const span = document.querySelector("#price");
  span.innerHTML = price;
}

function addName(data) {
  const name = data.name;
  const h1 = document.querySelector("#title");
  h1.innerHTML = name;
}

function addDescription(data) {
  const description = data.description;
  const p = document.querySelector("#description");
  p.innerHTML = description;
}

function addValue(data) {
  const value = data.value;
  const select = document.querySelector("#colors");
  select.innerHTML = value;
}
