

function render(){
    let content=''
    for(i=0; i<products.length; i++){
        if (products[i].type=='lasted'){
            content+=`
            <div class="product-content_item">
                <img src="${products[i].img[0]}"
                    alt="Plain couple ring">

                <div class="product-content_item-icon">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <a href="../Detail Product/detailproduct.html" target="_blank" onclick="detail('${i}')"><button class="btnadd" >Add To Cart</button></a>

                <p>${products[i].nameProduct}</p>
                <span>${products[i].price}$</span>
            </div>
            `

        }
    }
   
    document.querySelector('.product-content').innerHTML=content
}
render()

function render2(){
    let content=''
    for(i=0; i<products.length; i++){
        if (products[i].type=='diary'){
            content+=`
            <div class="product-content_item">
                <img src="${products[i].img[0]}"
                    alt="Plain couple ring">
                <div class="product-content_item-icon">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <a href="../Detail Product/detailproduct.html" target="_blank" onclick="detail('${i}')"><button class="btnadd" >Add To Cart</button></a>

                <p>${products[i].nameProduct}</p>
                <span>${products[i].price}$</span>
            </div>
            `

        }
    }
   
    document.querySelector('.productcontent2').innerHTML=content
}
render2()

function detail(i){
    console.log(i)
    localStorage.setItem('item',JSON.stringify(i))
}

window.addEventListener('scroll', function (event) {
    let load = document.querySelectorAll(".load")
    let y = window.pageYOffset + 600
    for (i = 0; i < load.length; i++) {
      console.log(y, load[i].offsetTop)
      if (load[i].offsetTop < y) {
        load[i].classList.add('hien')
      }
    }
  });

//   typing
  document.addEventListener('DOMContentLoaded', function () {
    const text = "Enim sit amet venenatis urna cursus. Aliquet nec ullamcorper sit amet risus nullam eget felis. Tristique nulla atiquet enim tortor at auctor.";
    let index = 0;
    const typingText = document.getElementById('typing-text');
  
    function type() {
      typingText.textContent = text.slice(0, index++);
      if (index <= text.length) {
        setTimeout(type, 30); // Thời gian trễ giữa các ký tự
      }
    }
  
    type();
  });
  