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
    // сделать на клик 
    var ion = $(".buttonSection1");
    var ionPopup = $(".onPopularity");

    var io = $(".buttonSection2");
    var ionPopu = $(".materials");

    /* var io = $(".buttonSection3");
    var ionPopu = $(".Colour");

    var io = $(".buttonSection4");
    var ionPopu = $(".size");

    var io = $(".buttonSection5");
    var ionPopu = $(".brand");

    var io = $(".buttonSection6");
   var ionPopu = $(".price");

    var io = $(".buttonSection7");
    var ionPopu = $(".style");

    var io = $(".buttonSection8");
    var ionPopu = $(".pattern");*/





    setPopup(region, choiceRegion);
    setPopup(buttonClothes, choiceClothes);
    setPopup(buttonBoots, choiceBoots);
    setPopup(buttonAccessories, choiceAccessories);
    setPopup(imgIcon, fastFindLocation);
    setPopup(iconMenu, pointLocation);
    setPopup(exit, exitPopup);

    setClickedPopup(ion, ionPopup);
    setClickedPopup(io, ionPopu);



}

function setClickedPopup(target, popup) {
    target.on('click', function (event) {
        popup[0].style.display = "flex";
        event.stopPropagation();
    });

    popup.on('click', function (event) {
        event.stopPropagation();
    });

    $(document).on('click', function () {
        popup[0].style.display = 'none';
    });
}


function setPopup(target, popup) {
    target.on("mouseover", function (event) {
        popup[0].style.display = "flex";
    });

    target.on("mouseleave", function (event) {
        popup[0].style.display = "none";
    });



}