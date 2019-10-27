$(document).ready(function () {
    let search = $(".search"),
        buttonSearch = $(".header_search-img-wrap"),
        headerAddresses = $(".header_addresses");


    search.css({'opacity': '0', 'position': 'absolute', 'z-index': '-10', 'visibility': 'hidden'});

    buttonSearch.on("click", function (event) {
        headerAddresses.css("opacity", "0");

        setTimeout(function () {
            headerAddresses.css("position", "absolute");
            buttonSearch.css("transform", "translateX(40vw)");
            search.css({'visibility': 'visible', 'position': 'relative', 'z-index': '1', 'opacity': '1'});
        }, 500);

        setTimeout(function () {
            search.focus();
        }, 600);


        search.focus().animate({}, function () {
            $(this).on("blur", function () {
                search.css({'opacity': '0'});
                setTimeout(function () {
                    search.css({'position': 'absolute', 'z-index': '-10', 'visibility': 'hidden'});
                    headerAddresses.css({'position': 'relative', 'opacity': '1'});
                }, 500);
                buttonSearch.css("transform", "translateX(0)");
            });
        });
    });

    $("form").on("submit", function (e) {
        e.preventDefault();
    });

    $(".header_numbers-more").on("click", function () {
        $(".list-num").toggle();
    })
});