    let mainItem = document.getElementById('container_item');
function showItem(id, name, picture, price) {
    mainItem.insertAdjacentHTML('beforeend',
        `
        <div class="card-group item">
            <div class="card">
           <img class="card-img-top img" src="./img/${picture}" alt="Card image cap">
           <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">
                 Đại học công nghiệp hà nội
              </p>
              <p class="card-text price" >
                 ${price} ₫  
              </p>
              <button type="button" class="btn btn-primary buy" onclick="AddProduct(${id})">Mua Hàng</button>
           </div>
        </div>
     </div>
    `
    )
}

function showList() {
    mainItem.innerHTML = "";
    for (let i = 0; i < productItem.length; i++) {
        // console.log(productItem)
        showItem(productItem[i].id, productItem[i].name, productItem[i].picture, productItem[i].price)
    }
}
showList();

function AddProduct(id) {
        alert('Đã thêm vào giỏ hàng')
}
AddProduct(id)

//logout

function logout() {
    alert("Đăng Xuất thành công")
    window.location.href = "index.html"
}