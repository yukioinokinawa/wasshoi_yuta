jQuery(function ($) {
    $(".js-hamburger").on("click", function () {
        console.log("test");
        $(this).toggleClass("is-open");
        $(".c-layer--sidebar").toggleClass("is-open")
        $(".l-sidebar").toggleClass("is-open");
    });
});