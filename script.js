let nav = document.getElementById("mobile-nav")
let menu = document.getElementById("menu-btn")

menu.addEventListener("click",toggleNav);

function toggleNav(){
    menu.classList.toggle("ri-menu-unfold-line")
    if(nav.classList.contains("hidden")){
        nav.classList.remove("hidden")
    }else{
        nav.classList.add("hidden")

    }   
}