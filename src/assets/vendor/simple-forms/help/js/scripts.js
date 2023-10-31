(function($){
    "use strict";

    $(document).on("click tap", ".js_tab li", function (e) {
        e.preventDefault();
        var target = $(this).parent().data("target"),
            index = $(this).index() + 1;

        $(this).parent().find("li").removeClass("active");
        $(this).addClass("active");

        $(target).find("li").removeClass("active");
        $(target).find('li:nth-child('+index+')').addClass("active");
    });

    $(document).on("click tap", ".js_next_tab", function (e) {
        e.preventDefault();
        var target = $(this).data("target");

        $(target).find("li.active").next().trigger('click');
    });



})(jQuery);