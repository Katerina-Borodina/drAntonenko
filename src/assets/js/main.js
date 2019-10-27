$(document).ready(function() {
    $(".search").hide();
    $(".header_search-img-wrap").on("click", function(event){
        $(".header_addresses").css("display", "none");
        $(".header_search-img-wrap").css("transform", "translateX(40vw)");
        $(".search").show().focus().animate({
        }, function(){
            $(this).on("blur", function(){
                $(".search").animate({
                    "display": "none"
                }, 100).fadeOut();
                $(".header_addresses").css("display", "flex");
                $(".header_search-img-wrap").css("transform", "none");
            });
        });
    });
    $("form").on("submit", function(e){
        e.preventDefault();
    });

    $(".header_numbers-more").on("click", function () {
        $(".list-num").toggle();
    })
});