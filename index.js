var navItem = document.getElementById("resources-item");
var dropMenu = document.getElementById("drop-menu");
var downIcon = document.getElementById("down-icon");
var upIcon = document.getElementById("up-icon");
navItem.addEventListener("click", showItems);

function showItems(){
    if(dropMenu.style.display == "none"){
        dropMenu.style.display = "inline";
        downIcon.style.display = "none";
        upIcon.style.display = "inline";
    }else{
        dropMenu.style.display = "none";
        downIcon.style.display = "inline";
        upIcon.style.display = "none";
    }     
}
