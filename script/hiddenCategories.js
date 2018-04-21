$(document).ready(ready);

function ready() {

    //region
    var region = $(".region");
    var choiceRegion = $(".popupRegion");
    // menu delivery
    var deliveryFast = $(".deliveryFast");
    var fastDelivery = $(".fastDelivery");
    var iconMenu = $(".iconMenu");
    var destination = $(".destination");
    // exit
    var exit = $(".exit");
    var exitPopup = $(".exitPopup");
    //categories menu
    var buttonClothes = $(".buttonClothes");
    var choiceClothes = $(".clothes");
    var buttonBoots = $(".buttonBoots");
    var choiceBoots = $(".boots");
    var buttonAccessories = $(".buttonAccessories");
    var choiceAccessories = $(".accessories");



    // filters
    var SectionOne = $(".buttonSection-1");
    var popup1 = $(".onPopularity");
    var SectionTwo = $(".buttonSection-2");
    var popup2 = $(".materials");
    var SectionThree = $(".buttonSection-3");
    var popup3 = $(".colour");
    var SectionFour = $(".buttonSection-4");
    var popup4 = $(".size");
    var SectionFive = $(".buttonSection-5");
    var popup5 = $(".brand");
    var SectionSix = $(".buttonSection-6");
    var popup6 = $(".price");
    var SectionSeven = $(".buttonSection-7");
    var popup7 = $(".style");
    var SectionEight = $(".buttonSection-8");
    var popup8 = $(".pattern");




    //region
    setPopup(region, choiceRegion);
    // menu delivery
    setPopup(deliveryFast, fastDelivery);
    setPopup(iconMenu, destination);
    // exit
    setPopup(exit, exitPopup);
    //categories menu
    setPopup(buttonClothes, choiceClothes);
    setPopup(buttonBoots, choiceBoots);
    setPopup(buttonAccessories, choiceAccessories);
    // filters
    setClickedPopup(SectionOne, popup1);
    setClickedPopup(SectionTwo, popup2);
    setClickedPopup(SectionThree, popup3);
    setClickedPopup(SectionFour, popup4);
    setClickedPopup(SectionFive, popup5);
    setClickedPopup(SectionSix, popup6);
    setClickedPopup(SectionSeven, popup7);
    setClickedPopup(SectionEight, popup8);



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