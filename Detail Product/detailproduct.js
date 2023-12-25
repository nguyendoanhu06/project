let data = JSON.parse(localStorage.getItem("item"));
document.querySelector(".titleweb").innerHTML = products[data].nameProduct;
document.querySelector(".iconweb").href = products[data].img[0];
let content = `
<div class="detail_select"> 
            <img src="${products[data].img[0]}" onclick="changeimg('${
  products[data].img[0]
}')" alt="">
            <img src="${products[data].img[1]}" onclick="changeimg('${
  products[data].img[1]
}')" alt="">
            <img src="${products[data].img[2]}" onclick="changeimg('${
  products[data].img[2]
}')" alt="">
            </div>
        <div class="detail_left">
            <img class="main-img" src="${products[data].img[0]}" alt="">
        </div>
        <div class="detail_right">
            <div class="detail-name">
                <p class="name">${products[data].nameProduct}</p>
                <p><i class="fa-solid fa-star"></i>5(2)</p> 
            </div>
            <div class="info">
                <p>Code: ${products[data].id}</p>
                
                <p>1000+ sold</p>
            </div>
            
            <div class="price">
                <p class="price-content"><strong>${
                  products[data].price
                }$</strong></p>
                <p><i class="fa-solid fa-circle-info"></i>Just pay <strong>${(
                  Number(products[data].price) / 12
                ).toFixed(2)}$</strong>/month</p>
            </div>
            <p class="hotline">In stock - Call <strong><i class="fa-solid fa-phone"></i> 1800 5454 57 (Free) </strong> exclusive offer</p>
            <div class="coupon">
                <p class="coupon-title">Incentive:</p>
                <p><i class="fa-solid fa-circle-check"></i>5% discount when purchasing Necklaces & Pendants combo, applicable to Gold jewelry. <a href="">See detail</a></p>
                <p><img src="https://cdn.pnj.io/images/2023/vnpay48x48.png" alt="VNPAY">Momo Code <strong>VNPAYPNJQ4</strong> automatically displays 50k for orders from 2 million when scanned <a href="">VNPAY-QR</a></p>
                <p><img src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" alt="VNPAY">VNPAY Enter Code <strong>MMQUYPHAI</strong> for 2% discount up to 200K when paying via <a href="">MOMO</a></p>
            </div>
            <a href="../Cart/cart.html">
            <button onclick="AddToCart('${products[data].id}')">
            <strong>BUY NOW</strong>
            <p><i>Free home delivery or in-store pickup</i></p>
            </button>
        </a>
            <div class="button">
                <button>
                    <strong>INSTALMENT</strong>
                    <p><i>Only from ${(
                      Number(products[data].price) / 12
                    ).toFixed(2)}$/month</i></p>
                </button>
                <button>
                    <strong>AVAILABLE</strong>
                    <p><i>CALL NOW to receive discounts </i></p>

                </button>
            </div>
            <ul>
                <li><i class="fa-solid fa-circle-check"></i>Product prices vary depending on the weight of gold and stones</li>
                <li><i class="fa-solid fa-circle-check"></i>Exchange products within 48 hours at PNJ stores</li>
                <li><i class="fa-solid fa-circle-check"></i>Pawnbroking and Purchasing. <a href="" >See detail</a></li>
                <li><i class="fa-solid fa-circle-check"></i>Free fast delivery nationwide 1-7 days, see more <a href="" class="policy">Delivery Policy </a></li>
            </ul>
        </div>
        
        `;
document.querySelector(".detail").innerHTML = content;
function changeimg(url) {
  console.log(url);
  document.querySelector(".main-img").src = url;
}
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

let content2 = `
<hr/>
<table cellspacing=0>
<tr>
    <td>Name Product:</td>
    <td>${products[data].nameProduct}</td>
</tr>
<tr>
    <td>Id</td>
    <td>${products[data].id}</td>
</tr>
<tr>
    <td>SKU</td>
    <td>${products[data].SKU}</td>
</tr>
<tr>
    <td>Vendor</td>
    <td>${products[data].Vendor}</td>
</tr>
<tr>
    <td>Color</td>
    <td>${products[data].Color}</td>
</tr>
</table>
<p>${products[data].describe}</p>

`;
document.querySelector(".panel").innerHTML = content2;
function AddToCart(id){
  let item = products.find(dataitem => {
    return dataitem.id == id 

  })
  let cartarray 
 
  if (localStorage.getItem('cart')== null){
    cartarray=[]
    
  }
  else{
    cartarray=JSON.parse(localStorage.getItem('cart'))
    
  }
  

  let itemindex = cartarray.findIndex(dataitem => {
    return dataitem.item.id == id 

  })
  console.log(itemindex)
  if (itemindex == -1){
    cartarray.push({item:item, sl:1})
  }
  else{
    cartarray[itemindex].sl ++
  }
  localStorage.setItem('cart',JSON.stringify( cartarray))
  
}
