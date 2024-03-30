let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");

// get total price
function getTotalPrice() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = result;
    total.style.backgroundColor = "green";
  } else {
    total.innerHTML = "";
    total.style.backgroundColor = "#a00d02";
  }
}
let dataPro 

if (localStorage.getItem('product') != null) {
  dataPro = JSON.parse(localStorage.getItem('product'));
   
}else{
    dataPro = [];
    
}

// create product


submit.onclick = function () {
  let newPro = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value,
  };
  dataPro.push(newPro);
  localStorage.setItem('product' , JSON.stringify(dataPro));
  clearInputs()
  
};

// save local storge
// clear inputs

function clearInputs() {
    let allInpts = document.querySelectorAll("input");
    allInpts.forEach((input) => {
      input.value = "";
    });
    total.innerHTML = "";
  }
 
// read
// count
//delete
// update
//sherch
// clean
