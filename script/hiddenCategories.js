document.addEventListener("DOMContentLoaded", ready);

function ready() {
    //variables

    var region = document.getElementsByClassName("region")[0];
    var choiceRegion = document.getElementsByClassName("popupRegion")[0];
    var buttonClothes = document.getElementsByClassName("buttonClothes")[0];
    var choiceClothes = document.getElementsByClassName("clothes")[0];
    var buttonBoots = document.getElementsByClassName("buttonBoots")[0];
    var choiceBoots = document.getElementsByClassName("boots")[0];
    var buttonAccessories = document.getElementsByClassName("buttonAccessories")[0];
    var choiceAccessories = document.getElementsByClassName("accessories")[0];
    var imgIcon = document.getElementsByClassName("imgIcon")[0];
    var fastFindLocation = document.getElementsByClassName("fastFindLocation")[0];
    var iconMenu = document.getElementsByClassName("iconMenu")[0];
    var pointLocation = document.getElementsByClassName("pointLocation")[0];
    var exit = document.getElementsByClassName("exit")[0];
    var exitPopup = document.getElementsByClassName("exitPopup")[0];



    setPopup(region, choiceRegion);
    setPopup(buttonClothes, choiceClothes);
    setPopup(buttonBoots, choiceBoots);
    setPopup(buttonAccessories, choiceAccessories);
    setPopup(imgIcon, fastFindLocation);
    setPopup(iconMenu, pointLocation);
    setPopup(exit, exitPopup);














}


function setPopup(target, popup) {
    target.addEventListener("mouseover", function (event) {
        popup.style.display = "flex";
        //document.addEventListener("mouseover", closeWindows);
    });

    target.addEventListener("mouseleave", function (event) {
        popup.style.display = "none";
        //document.addEventListener("mouseover", closeWindows);
    });
}