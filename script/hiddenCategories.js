$(document).ready(ready);

function ready() {
    //variables

    var region = $(".region");
    var choiceRegion = $(".popupRegion");
    var buttonClothes = $(".buttonClothes");
    var choiceClothes = $(".clothes");
    var buttonBoots = $(".buttonBoots");
    var choiceBoots = $(".boots");
    var buttonAccessories = $(".buttonAccessories");
    var choiceAccessories = $(".accessories");
    var imgIcon = $(".imgIcon");
    var fastFindLocation = $(".fastFindLocation");
    var iconMenu = $(".iconMenu");
    var pointLocation = $(".pointLocation");
    var exit = $(".exit");
    var exitPopup = $(".exitPopup");

    setPopup(region, choiceRegion);
    setPopup(buttonClothes, choiceClothes);
    setPopup(buttonBoots, choiceBoots);
    setPopup(buttonAccessories, choiceAccessories);
    setPopup(imgIcon, fastFindLocation);
    setPopup(iconMenu, pointLocation);
    setPopup(exit, exitPopup);

}


function setPopup(target, popup) {
    target.on("mouseover", function (event) {
        popup[0].style.display = "flex";
    });

    target.on("mouseleave", function (event) {
        popup[0].style.display = "none";
    });
}