document.getElementById("menuBtn").addEventListener("click",function(){
    document.getElementById("burgerMenu").classList.add("show-burger-menu");
    document.getElementById("closeBurgerMenu").classList.add("close-burger-menu");
})
document.getElementById("closeBurgerMenu").addEventListener("click",function(){
    document.getElementById("burgerMenu").classList.remove("show-burger-menu");
    document.getElementById("closeBurgerMenu").classList.remove("close-burger-menu");
})
