const Name = $("#name");
const Img = $("#img");
const Price = $("#price");
const Div = $("#div");
const DivA = $("#divA");

const PharmacyArr = [
  {
    nameprodect: "Panadol",
    Img:"https://z.nooncdn.com/products/tr:n-t_240/v1505892461/N12068648A_1.jpg",
    price: "9RS",
  },
  {
    nameprodect: "Johnson cream",
    Img: "https://cdn.salla.sa/pbgWE/PmBnVYbuhswsG5W1I9gc8Ietn64T5DuQcS7mfwXm.png",
    price: "17RS",
  },
  {
    nameprodect: "shampoo",
    Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWs5yvzLm2UDsE9hBgnjIWhyhG1D35ZBZIPQ&usqp=CAU",
    price: "15RS",
  },
  {
    nameprodect: "vitamin",
    Img: "https://m.media-amazon.com/images/I/51FBaJJAAJL._AC_.jpg",
    price: "25 RS",
  },
  {
    nameprodect: "Panadolnight",
    Img: "https://www.sidalih.com/storage/products/Xp4VoSvs3B7RABPq2ctv8UtHp98zUvqdqItjibav.jpeg",
    price: "23 RS",
  },
  {
    nameprodect: "lipe masck",
    Img: "https://s3.images-iherb.com/lng/lng05327/w/3.jpg",
    price: "17RS",
  },
];

function renderArr(array) {
  for (let i = 0; i < array.length; i++) {
    const div = $(`<div>
          <img class="imageHome" src="${array[i].Img}" >
          <button id="del" onclick="deletPharmacyArr(${i})">delet</button>
          <h1>${array[i].nameprodect}</h1>
          <p>${array[i].price}</p>
      </div>`);
    Div.append(div);
  }
}
renderArr(PharmacyArr);
function addprodect() {
  const newprodect = {
    nameprodect: Name.val(),
    Img: Img.val(),
    price: Price.val(),
  };
  PharmacyArr.push(newprodect);
  renderArr([newprodect]);
}
DivA.hide();
function showHandler() {
  DivA.show();
}
function hideHandler() {
  DivA.hide();
}
function deletPharmacyArr(index) {
  PharmacyArr.splice(index, 1);
  Div.html("");
  renderArr(PharmacyArr);
}

/*let addprodect = "Pharmacy";
localStorage.setItem("Age",age);
alert(localStorage.getItem("Age"));*/

