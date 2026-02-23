const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function(){
    
    document.body.classList.toggle("dark");
});


const changeBtn = document.getElementById("changeTextBtn");
const heroHeading = document.getElementById("heroHeading");

changeBtn.addEventListener("click", function(){
    
    heroHeading.textContent = "Discover Your Perfect Nail Shade";
});



const toggleBtn = document.getElementById("toggleProductsBtn");


const productContainer = document.querySelector(".product-container");

toggleBtn.addEventListener("click", function(){

    if(productContainer.style.display === "none"){
        
        productContainer.style.display = "grid";

       
        toggleBtn.textContent = "Hide Products";

    } else {
       
        productContainer.style.display = "none";

      
        toggleBtn.textContent = "Show Products";
    }

});