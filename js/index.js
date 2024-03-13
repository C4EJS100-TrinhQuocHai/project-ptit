
// lấy dữ liệu về đi render
let products = JSON.parse(localStorage.getItem("products"));
console.log("111111", products);

//  function render product
function renderProduct() {
    let element = "";
    for (let i = 0; i < products.length; i++) {
        element +=
            `
                    <div class="product__item">
                        <div class="image">
                            <img src="${products[i].image}" alt="">
                        </div>
                        <p>${products[i].name}</p>
                        <div>
                            <p>price:${products[i].price}</p>
                            <p><button>mua</button></p>
                        </div>
                    </div>
                `
    }
    
    // console.log("1111111111",element);
    document.getElementById("products").innerHTML = element
}
renderProduct();