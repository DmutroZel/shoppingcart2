let db = [

    {
        id: 1,
        name: "Iphone 15",
        price: 1500,
        count: 40,
        color: 'black'
    },
    {
        id: 2,
        name: "Iphone 14",
        price: 1350,
        count: 50,
        color: 'black'
    },
    {
        id: 3,
        name: "MacBook PRO",
        price: 2500,
        count: 10,
        color: 'space gray',
    },
    {
        id: 4,
        name: "Apple watch",
        price: 600,
        count: 45,
        color: 'black',
    },
    {
        id: 5,
        name: "MacBook Air",
        price: 1900,
        count: 49,
        color: '#F6D5D0',
    },
];


for (let el of db) {
    $('.goodsContainer').append(`<div class="item">
            <div class="photo"></div>
            <h3>${el.name}</h3>
            <p>${el.price}$</p>
            <p>${el.color}</p>
            <button class='addBtn' id=${el.id}>Add</button>
        </div>`);
}

let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
$('.counter').text(shoppingCart.length)

let openPoppup = false;
$('.addBtn').click(function (e) {

    $('.cartPopup').css('display', 'none');
    let ID = e.target.id;

    for (let el of db) {
        if (el.id == ID) {
            console.log(el);
            shoppingCart.push(el);
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
            $('.counter').text(shoppingCart.length)
        }
    }
})

$('.cart').click(function () {
    if (openPoppup == false) {
        $('.cartPopup').css('display', 'flex');
        showPopup();
        openPoppup = true;
    } else {
        $('.cartPopup').css('display', 'none');
        openPoppup = false;
    }


})


function showPopup() {
    shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    console.log(shoppingCart);
    $('.cartPopup').empty();
    for (let el of shoppingCart) {
        $('.cartPopup').append(`<div class='popupItem'>
            <h3>${el.name}</h3>
            <p>${el.price}</p>
            <button class="deleteBtn" id="delete${el.id}">Delete</button>
            </div>`);
    }
}

$(document).click(function (e) {
    let updCart = [];
    if ((e.target.id).substring(0, 6) == 'delete') {
        let ID = (e.target.id).substring(6);

        for (let el of shoppingCart) {
            console.log(el);
            if (el.id != ID) {
                updCart.push(el);
            }
        }
    }
    console.log(updCart);
    shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    console.log(shoppingCart);

})