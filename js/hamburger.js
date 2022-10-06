jQuery(function ($) {
    if (window.matchMedia("(max-width: 1025px)").matches) {
        $(".js-hamburger").on("click", function () {
            $(this).toggleClass("is-open");

            $(".c-layer--sidebar").toggleClass("is-open");
            $(".l-sidebar").toggleClass("is-open");
            $("body").toggleClass("is-open");
            $(".p-sns").toggleClass("is-open");

        } else {
            $('.c-layer--sidebar').hide();
            $('.l-sidebar').hide();
        }
    });



