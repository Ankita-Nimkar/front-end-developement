let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let nextbtn = document.querySelector('.next');
let prevbtn = document.querySelector(".prev");



// ===========slideshow===============
slides[0].style.display = 'block'
dots[0].classList.add('active')
let i = 0;
nextbtn.addEventListener("click", () => {

    if (i < (slides.length - 1)) {
        slides[i].style.display = "none";
        dots[i].classList.remove('active')
        i++
        slides[i].style.display = "block";
        dots[i].classList.add('active')
        i--
        i++
    } else {
        slides[i].style.display = "none";
        dots[i].classList.remove('active')
        i = 0
        slides[0].style.display = 'block'
        dots[0].classList.add('active')
    }


})

prevbtn.addEventListener("click", () => {

    if (i <= (slides.length - 1) && i !== 0) {
        slides[i].style.display = "none";
        dots[i].classList.remove('active')
        i--
        slides[i].style.display = "block";
        dots[i].classList.add('active')
        i++
        i--
    } else {
        slides[i].style.display = "none";
        dots[i].classList.remove('active')
        i = 0
        slides[0].style.display = 'block'
        dots[0].classList.add('active')
    }

})

// ==========side-menu==========
let hamburgerbtn = document.querySelector(".hamburger");
let closebtn = document.querySelector(".closebtn");
let sideMenu = document.querySelector(".menu")


hamburgerbtn.addEventListener('click', () => {
    hamburgerbtn.style.display = 'none'
    sideMenu.style.display = 'block'
    prevbtn.style.display = 'none'
    nextbtn.style.display = 'none'
    cartWindow.style.display = 'none'

})
closebtn.addEventListener('click', () => {

    hamburgerbtn.style.display = 'block'
    sideMenu.style.display = 'none'
    prevbtn.style.display = 'block'
    nextbtn.style.display = 'block'

})

// ============add to cart===========
let minus = document.querySelector(".minus");
let add = document.querySelector(".plus");
let quantity = document.querySelector('.quantity')
let addbtnsdisplay = document.querySelector('.addbtns')
let cartCount = document.querySelector('.cart-count')
let addtoCartBtn = document.querySelector('.add-to-cart')
let totalQuantity = document.querySelector('.total-quantity')
let emptycart = document.querySelector('.emptycart')
let productiCart = document.querySelector('.productsincart')
let j = 0


add.addEventListener('click', () => {
    cartWindow.style.display = 'none'
    addbtnsdisplay.style.border = '1px solid orangered'
    j++
    quantity.textContent = j

})
minus.addEventListener('click', () => {
    cartWindow.style.display = 'none'
    if (j !== 0) {

        j--
        quantity.textContent = j

    }
    if (j === 0) {

        addbtnsdisplay.style.border = 'none'
        cartCount.style.display = 'none'
    }

})

// =====================delete==============


// =========add-to-cart calculations=====
let itemPrice = document.querySelector('.item-price');
let totalPrice = document.querySelector('.totalPrice');
let deletebtn = document.querySelector('.delete');
let ip = parseFloat(itemPrice.textContent.slice(1))
let tp = parseFloat(totalPrice.textContent.slice(1))
addtoCartBtn.addEventListener('click', () => {
    cartCount.style.display = 'block'
    cartCount.textContent = j
    totalQuantity.textContent = j
    tp = ip * j
    totalPrice.textContent = '$' + tp + '.00'
    if (j === 0) {

        cartCount.style.display = 'none'
        emptycart.style.display = 'block'
        productiCart.style.display = 'none'


    }

})
deletebtn.addEventListener('click',()=>{
    console.log('hello')
    if(j>0){
    j--
    totalQuantity.textContent=j   
    tp = ip * j
    totalPrice.textContent = '$' + tp + '.00'
    } 
    if(j<=0){
        emptycart.style.display = 'block'
        cartCount.style.display = 'none'
        productiCart.style.display = 'none'
    }
})
// ===================cart-window===========
let cartbtn = document.querySelector(".cart");
let cartWindow = document.querySelector(".cart-window");


cartbtn.addEventListener('click', () => {
    if (cartWindow.style.display === 'none') {
        cartWindow.style.display = 'block'

        prevbtn.style.display = 'none'
        nextbtn.style.display = 'none'


    } else if (cartWindow.style.display === 'block' && window.innerWidth < 1013) {

        cartWindow.style.display = 'none'
        prevbtn.style.display = 'block'
        nextbtn.style.display = 'block'
    } else {
        cartWindow.style.display = 'none'
        prevbtn.style.display = 'none'
        nextbtn.style.display = 'none'
    }

    if (j === 0) {

        productiCart.style.display = 'none'
        emptycart.style.display = 'block'

    }
    if (j !== 0) {
        productiCart.style.display = 'block'
        emptycart.style.display = 'none'
    }
   

})

// ==================desktop image slideshow==========================

let thumbImg1 = document.querySelector('.thumImg1')
let thumbImg2 = document.querySelector('.thumImg2')
let thumbImg3 = document.querySelector('.thumImg3')
let thumbImg4 = document.querySelector('.thumImg4')

let prodImg1 = document.querySelector('.prod-img1')
let prodImg2 = document.querySelector('.prod-img2')
let prodImg3 = document.querySelector('.prod-img3')
let prodImg4 = document.querySelector('.prod-img4')

thumbImg1.addEventListener('click', () => {

    prodImg1.style.display = 'block'
    thumbImg1.classList.add('thumbnail-opacity')
    prodImg3.style.display = 'none'
    thumbImg3.classList.remove('thumbnail-opacity')
    prodImg4.style.display = 'none'
    thumbImg4.classList.remove('thumbnail-opacity')
    prodImg2.style.display = 'none'
    thumbImg2.classList.remove('thumbnail-opacity')
})

thumbImg2.addEventListener('click', () => {

    prodImg1.style.display = 'none'
    thumbImg1.classList.remove('thumbnail-opacity')
    prodImg3.style.display = 'none'
    thumbImg3.classList.remove('thumbnail-opacity')
    prodImg4.style.display = 'none'
    thumbImg4.classList.remove('thumbnail-opacity')
    prodImg2.style.display = 'block'
    thumbImg2.classList.add('thumbnail-opacity')
})
thumbImg3.addEventListener('click', () => {

    prodImg1.style.display = 'none'
    thumbImg1.classList.remove('thumbnail-opacity')
    prodImg2.style.display = 'none'
    thumbImg2.classList.remove('thumbnail-opacity')
    prodImg4.style.display = 'none'
    thumbImg4.classList.remove('thumbnail-opacity')
    prodImg3.style.display = 'block'
    thumbImg3.classList.add('thumbnail-opacity')
})
thumbImg4.addEventListener('click', () => {

    prodImg1.style.display = 'none'
    thumbImg1.classList.remove('thumbnail-opacity')
    prodImg2.style.display = 'none'
    thumbImg2.classList.remove('thumbnail-opacity')
    prodImg3.style.display = 'none'
    thumbImg3.classList.remove('thumbnail-opacity')
    prodImg4.style.display = 'block'
    thumbImg4.classList.add('thumbnail-opacity')
})

// ============lightbox==============
let overlay = document.querySelector('.overlay')
let lightboxclosebtn = document.querySelector('.lightboxclosebtn')
let overlayPrevbtn = document.querySelector('.overlay-prev')
let overlayNextbtn = document.querySelector('.overlay-next')
let lightbox = document.querySelector('.lightbox')
let lightboxProdImg = document.querySelector('.lightbox-prod-img')
let lightPrdImgs = document.getElementsByClassName('light-prd-imgs')
let lightboxImg1 = document.querySelector('.lightbox-img1')
let lightboxImg2 = document.querySelector('.lightbox-img2')
let lightboxImg3 = document.querySelector('.lightbox-img3')
let lightboxImg4 = document.querySelector('.lightbox-img4')
let lightboxThumbnailImages = document.querySelector('.lightbox-thumbnail-images')
let lightboxThumImg = document.getElementsByClassName('lightbox-thum-img')
let lightboxThumImg1 = document.querySelector('.lightbox-thum-img1')
let lightboxThumImg2 = document.querySelector('.lightbox-thum-img2')
let lightboxThumImg3 = document.querySelector('.lightbox-thum-img3')
let lightboxThumImg4 = document.querySelector('.lightbox-thum-img4')
prodImg1.addEventListener('click', () => {
    console.log('hi')
    if(window.innerWidth>=1013)
    {
        console.log('hi')
        overlay.style.display = 'block'
        lightboxclosebtn.style.display = 'block'
        overlayPrevbtn.style.display = 'block'
        overlayNextbtn.style.display = 'block'
        lightbox.style.display = 'block'
     

    }
    
  


})


window.addEventListener('resize', () => {
if(window.innerWidth>=1013){
   
  
      
}else{
    
    overlay.style.display = 'none'
    lightboxclosebtn.style.display = 'none'
        overlayPrevbtn.style.display = 'none'
        overlayNextbtn.style.display = 'none'
        lightbox.style.display = 'none'
}
})

let k = 0;
lightPrdImgs[0].style.display = 'block'
lightboxThumImg[0].classList.add('thumbnail-opacity')
overlayNextbtn.addEventListener('click', () => {
    if (k < (lightPrdImgs.length - 1)) {
        lightPrdImgs[k].style.display = 'none'
        lightboxThumImg[k].classList.remove('thumbnail-opacity')
        k++
        lightPrdImgs[k].style.display = 'block'
        lightboxThumImg[k].classList.add('thumbnail-opacity')
        k--
        k++
    } else {
        lightPrdImgs[k].style.display = 'none'
        lightboxThumImg[k].classList.remove('thumbnail-opacity')
        k = 0
        lightPrdImgs[k].style.display = 'block'
        lightboxThumImg[k].classList.add('thumbnail-opacity')
    }
})

overlayPrevbtn.addEventListener('click', () => {
    if (k <= (lightPrdImgs.length - 1) && k !== 0) {
        lightPrdImgs[k].style.display = 'none'
        lightboxThumImg[k].classList.remove('thumbnail-opacity')
        k--
        lightPrdImgs[k].style.display = 'block'
        lightboxThumImg[k].classList.add('thumbnail-opacity')
        k++
        k--
    } else {
        lightPrdImgs[k].style.display = 'none'
        lightboxThumImg[k].classList.remove('thumbnail-opacity')
        k = 0
        lightPrdImgs[k].style.display = 'block'
        lightboxThumImg[k].classList.add('thumbnail-opacity')
    }
})




lightboxclosebtn.addEventListener('click', () => {

   
    overlay.style.display = 'none'


})

window.addEventListener('onload', () => {
    if (window.innerWidth >= 1013) {

        prevbtn.style.display = 'none'
        nextbtn.style.display = 'none'
      
    }
    if (window.innerWidth < 1013) {
        
        prevbtn.style.display = 'block'
        nextbtn.style.display = 'block'

    }
})