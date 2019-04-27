const openMenu = () => {
    $("nav").fadeIn(500);
}

const closeMenu = () => {
    $("nav").fadeOut(500);
}

$("a.open-menu").click(function(e) {
    e.preventDefault();
    openMenu();
})

$("a.close-menu").click(function(e) {
    e.preventDefault();
    closeMenu();
})

$("nav").click(function(){
    closeMenu();
})

$(".nav-home").click(function () {
    closeMenu();
})

$(".nav-about").click(function () {
    closeMenu();
})

$(".nav-work").click(function () {
    closeMenu();
})

$(".nav-contact").click(function(){
    closeMenu();
})

$(".skill-container").hover(function(){
    $(this).children(".icon-description").toggleClass("icon-display");
})