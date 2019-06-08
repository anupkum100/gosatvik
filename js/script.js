
$(document).ready(function () {
    $('.nav-link[href*="#"]').on('click', function (e) {
        e.preventDefault()
        if (window.innerWidth < 992) {
            $('.navbar-toggler').trigger('click');
        }

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - ($(this).attr('id') === 'contact' ? 0 : 90)
        }, 1000)
    })

    // Cache selectors
    var topMenu = $("#top-menu"),
        topMenuHeight = topMenu.outerHeight() + 150,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

    // Bind to scroll
    $(window).scroll(function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");

        // show hide got to top btn
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
           $("#top_btn").show();
          } else {
            $("#top_btn").hide();
          }
    });

    // function to load low resolution image first and wait for high resolution image to get loaded and than replace
    (() => {
        'use strict';
        // Page is loaded
        const objects = document.getElementsByClassName('asyncImage');
        Array.from(objects).map((item) => {
            // Start loading image
            const img = new Image();
            img.src = item.dataset.src;
            // Once image is loaded replace the src of the HTML element
            img.onload = () => {
                item.classList.remove('asyncImage');
                return item.nodeName === 'IMG' ?
                    item.src = item.dataset.src :
                    item.style.backgroundImage = `url(${item.dataset.src})`;
            };
        });
    })();


    $("#visitus_btn").click(function () {
        $('html,body').animate({ scrollTop: $(document).height() - $(window).height() }, 2000);
    })

    $("#top_btn").click(function () {
        $('html,body').animate({ scrollTop: 0 }, 2000);
    })

})


