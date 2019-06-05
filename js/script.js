
$(document).ready(function () {
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()
            // $(".nav-item").removeClass('active');
            // $(e.target).parent('.nav-item').addClass('active');

        if (window.innerWidth < 992) {
            $('.navbar-toggler').trigger('click');
        }

        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top - 100,
            },
            1000
        )
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
    });

})


