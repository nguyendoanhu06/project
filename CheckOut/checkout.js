

function render(){
    let cart =JSON.parse(localStorage.getItem('cart'))
    let total=0
    let content=""
    for (i=0; i<cart.length; i++){
        content += `<div class="product-item">
        <div class="product-img">
            <img src="${cart[i].item.img[0]}"
                alt="p1">
        </div>
        <p class="product-name">${cart[i].item.nameProduct}</p>
        <p class="amount">x${cart[i].sl}</p>
        <p class="product-price">${(Number(cart[i].item.price)*Number(cart[i].sl)).toLocaleString()}$</p>
    </div>`
    total += Number(cart[i].item.price)*Number(cart[i].sl)
    
    }
    document.querySelector(".product-list").innerHTML=content
    document.querySelector(".subtotal-item").innerHTML=total.toLocaleString()+"$"
    document.querySelector(".sumtotal").innerHTML=total.toLocaleString()+"$"
}
render()

