const searchBtnEl = document.getElementById('search-btn-el');
const searchInputEl = document.getElementById('search-input-el');
const searchOpenBtn = document.getElementById('open-search');
const switchImage = document.getElementById('switch-images');
const formContainer = document.getElementById('form-container');
const hamBtn = document.getElementById('ham-btn');
const navbar = document.getElementById('navbar');
const closeSlider = document.getElementById('close-slider');
const slider = document.getElementById('slider');
const navUlEl = document.getElementById('nav-ul');
const hamSvg = document.getElementById('ham-svg');
const body = document.getElementsByTagName('body')[0];

let winWidth;
let isSearchBtnClicked = false;
let interval;
let searchBarWidth = '380px';
const mediumWidth = 680;
const largeWidth = 1020;
const smallWidth = 450;


searchOpenBtn.addEventListener('click', function () {
    if (!isSearchBtnClicked) {
        searchInputEl.style.width = searchBarWidth;
        isSearchBtnClicked = true;
        switchImage.src = `images/x.svg`;
        searchInputEl.focus();



        interval = setInterval(function () {
            if (searchInputEl.value != '') {
                searchOpenBtn.style.display = 'none';
            } else {
                searchOpenBtn.style.display = 'initial';
            }

            winWidth = window.innerWidth;
            if (winWidth >= largeWidth) {
                navbar.style = `right: 420px;`;
            } else if (winWidth >= mediumWidth) {
                navbar.style = `top: 75px;`;
                navbar.style.zIndex = 10;
                setTimeout(() => {
                }, 100);

            }

        }, 100);

    } else {
        navbar.style = `
        top: 15px;
        `;
        searchInputEl.style.width = `44px`;
        isSearchBtnClicked = false;
        clearInterval(interval);
        switchImage.src = `images/search.svg`;
    }
})

hamBtn.addEventListener('click', function () {
    closeSlider.style.display = 'initial';
    body.style = `overflow-y: hidden;`;
    setTimeout(function () {
        navbar.style.left = `0px`;
        closeSlider.style.opacity = .4;
        slider.style.left = `0px`;
    }, 100)
})
closeSlider.addEventListener('click', () => {
    body.style = `overflow-y: scroll;`;
    navbar.style.left = `-300px`;
    slider.style.left = `-300px`;
    closeSlider.style.opacity = 0;
    setTimeout(function () {
        navbar.style = "";
        closeSlider.style.display = 'none';
    }, 200)
})


// function showScrollBar() {
//     document.querySelector('.category-container').style = `overflow-x: scroll;overflow-y: hidden;`
// }
// function hideScrollBar() {
//     document.querySelector('.category-container').style = `overflow-x: hidden;overflow-y: hidden;`
// }




// this will change the class of the navbar according to device width

function checkWinSize() {

    winWidth = window.innerWidth;
    if (winWidth <= 680) {
        navbar.classList.remove('navbar');
        navUlEl.classList.remove('nav-list');
        navbar.classList.add('side-navbar');
        navUlEl.classList.add('side-nav-list');
        searchInputEl.classList.remove('search-query');
        searchInputEl.classList.add('search-query-s');
    } else {
        searchInputEl.classList.remove('search-query-s');
        searchInputEl.classList.add('search-query');
        navbar.classList.add('navbar');
        navUlEl.classList.add('nav-list');
        navbar.classList.remove('side-navbar');
        navUlEl.classList.remove('side-nav-list');
    }
    if (winWidth <= 460) {
        hamSvg.style.height = `30px`;
    } else {
        hamSvg.style.height = `40px`;
    }

    if (winWidth <= 370) {
        hamSvg.style.height = `25px`;
    }
}
setInterval(checkWinSize, 100);



setInterval(() => {
    // document.getElementById('ch-image').src = link + myarray[random];
    // location.reload();
}, 2000);







// switching background images of the top banner

let imageList = ['https://rukminim1.flixcart.com/fk-p-flap/800/800/image/3e71720c1c81bd4e.jpg?q=50', 'https://rukminim1.flixcart.com/fk-p-flap/1000/1000/image/f33ad4bf86312a54.jpg?q=50', 'https://rukminim1.flixcart.com/fk-p-flap/1000/1000/image/695c3f2c3e58d89b.jpg?q=50', 'https://rukminim1.flixcart.com/fk-p-flap/1000/1000/image/31da10dcafc9ffdf.jpeg?q=50', 'https://rukminim1.flixcart.com/fk-p-flap/1000/1000/image/54a5f3636938e890.jpg?q=50'];

let prelodedImages = document.querySelectorAll('.preloded-images');
setTimeout(() => {
    // changing the image list with the pre loaded images

    imageList = [];
    for (let i = 0; i < prelodedImages.length; i++) {
        imageList.push(prelodedImages[i].src);
    }
}, 20000);

function switchArr() {
    let extract = imageList.pop();
    imageList.unshift(extract);
    document.querySelector('.image-slider').style.backgroundImage = `url(${imageList[0]})`;
}

setInterval(switchArr, 5000);



// checking the length of products and removing extra words
let pName = document.querySelectorAll('.product-name');
let minText = 33;
if (window.innerWidth <= 680) {
    minText = 21;
}
for (let i = 0; i < pName.length; i++) {
    let pNameLength = pName[i].innerHTML.length;
    if (pNameLength > minText) {
        if (pNameLength[32] != ' ') {
            pName[i].innerHTML = pName[i].innerHTML.slice(0, minText) + '.. ';
        } else {
            minText -= 1;
            pName[i].innerHTML = pName[i].innerHTML.slice(0, minText) + '.. ';

        }

    }
}



