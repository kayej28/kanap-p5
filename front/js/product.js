fetch("http://localhost:3000/api/products")
  .then((response) => response.json())
  .then((data) => {
    //console.log("data=",data);
    return addproducts(data);
  });

function addproducts(data) {
  console.log(data);
  let selectKanap;
  const params = new URLSearchParams(window.location.search);
  const id = params.getAll("id");
  data.forEach((kanap) => {
    if (kanap._id == id) {
      selectKanap = kanap;
      console.log(selectKanap);
    }
  });
  const article = addKanap(selectKanap);
  const div = document.getElementsByClassName("item__img");
  //console.log(article, section);
  div.innerHTML = article;
  console.log(div.innerHTML);
}

function addKanap(selectKanap) {
  console.log(selectKanap.imageUrl);
  const html = `<a href="./product.html?id=${selectKanap._id}">
  <img src="${selectKanap.imageUrl}" alt="${selectKanap.altTxt}">`;
  return html;
}
