var Iphone = document.getElementById('Iphone');
var Ap_watch = document.getElementById('Ap_Wach');
var Macbook = document.getElementById('Macbook');
var Airpods = document.getElementById('Airpods');
var ShowAll = document.getElementById('ShowAll');
let main = document.getElementById('container_item');
Iphone.addEventListener('click', () => {
    mainItem.innerHTML = "";
    for (let i = 0; i < productItem.length; i++) {
        if(productItem[i].name.startsWith('Ip'))
        showItem(productItem[i].id, productItem[i].name, productItem[i].picture, productItem[i].price)
    }
})

Ap_watch.addEventListener('click', () => {
    mainItem.innerHTML = "";
    for (let i = 0; i < productItem.length; i++) {
        if (productItem[i].name.startsWith('App'))
        showItem(productItem[i].id, productItem[i].name, productItem[i].picture, productItem[i].price)
    }
})

Macbook.addEventListener('click', () => {
    mainItem.innerHTML = "";
    for (let i = 0; i < productItem.length; i++) {
        if (productItem[i].name.startsWith('Macbook'))
            showItem(productItem[i].id, productItem[i].name, productItem[i].picture, productItem[i].price)
    }
})

Airpods.addEventListener('click', () => {
    mainItem.innerHTML = "";
    for (let i = 0; i < productItem.length; i++) {
        if (productItem[i].name.startsWith('Air'))
            showItem(productItem[i].id, productItem[i].name, productItem[i].picture, productItem[i].price)
    }
})

ShowAll.addEventListener('click', () => {
    mainItem.innerHTML = "";
    for (let i = 0; i < productItem.length; i++) {
        showItem(productItem[i].id, productItem[i].name, productItem[i].picture, productItem[i].price)
    }
})


//