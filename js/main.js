jQuery(document).ready(function (e) {
    "use strict";
    function a(a) {
        var t = e(this);
        (a = e.extend({}, a || {}, t.data("countToOptions") || {})), t.countTo(a);
    }
    if (
        (e("#rex-owl-example").owlCarousel({
            singleItem: !0,
            transitionStyle: "fade",
            navigation: !1,
            navigationText: ['<i class="fa fa-angle-left rx-angle-left-slider"></i>', '<i class="fa fa-angle-right rx-angle-right-slider"></i>'],
            pagination: !1,
            responsive: !0,
        }),
        e("#rex-testimonial").owlCarousel({ navigation: !1, singleItem: !0, transitionStyle: "fade", pagination: !0, navigationText: !1, autoPlay: !0 }),
        e("#rex-Client").owlCarousel({
            autoPlay: !1,
            navigation: !0,
            navigationText: ['<i class="fa fa-angle-left rx-angle-left"></i>', '<i class="fa fa-angle-right rx-angle-right"></i>'],
            pagination: !1,
            slideSpeed: 600,
            paginationSpeed: 400,
            items: 6,
            loop: !0,
            responsiveClass: !0,
            responsive: { 0: { items: 1 }, 480: { items: 2 }, 768: { items: 4 }, 1200: { items: 6 } },
        }),
        e("#rx-blog-slider").owlCarousel({
            autoPlay: !0,
            nav: !0,
            navText: !1,
            pagination: !1,
            slideSpeed: 600,
            paginationSpeed: 400,
            dots: !1,
            items: 1,
            itemsDesktop: [1e3, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [600, 1],
            itemsMobile: !1,
        }),
        e(".slimmenu li a").on("click", function () {
            if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
                var a = e(this.hash),
                    t = e(a).data("scrolloffset") ? e(a).data("scrolloffset") : 0;
                if (((a = a.length ? a : e("[name=" + this.hash.slice(1) + "]")), a.length)) return e("html,body").animate({ scrollTop: a.offset().top - t }, 1e3), !1;
            }
        }),
        e(".rex-testimonial").parallax({ imageSrc: "http://placehold.it/2000x1330" }),
        e('a[href="#search"]').on("click", function (a) {
            a.preventDefault(), e("#search").addClass("open"), e('#search > form > input[type="search"]').focus().attr("placeholder", "");
        }),
        e("#search, #search button.close").on("click keyup", function (a) {
            (a.target === this || "close" === a.target.className || 27 === a.keyCode) && e(this).removeClass("open");
        }),
        e("#googleMap").length)
    ) {
        var t = { center: new google.maps.LatLng(19.2035764, 72.8507969), zoom: 18, mapTypeId: google.maps.MapTypeId.ROADMAP };
        var googleMapObject = new google.maps.Map(document.getElementById("googleMap"), t);

        new google.maps.Marker({
            position: { lat: 19.2035764, lng: 72.8507969 },
            map: googleMapObject,
            icon: '/img/map-marker.png',
            title: showroom.name,
        });
    }
    e(".count-title").data("countToOptions", {
        formatter: function (e, a) {
            return e.toFixed(a.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
        },
    });
    e("#achievment").waypoint({
        handler: function (t) {
            e(".timer").each(a), this.destroy();
        },
        offset: 600,
    });
    if (
        (e("form")
            .on("focus", "input,textarea", function () {
                e(this).prev("i.fa").addClass("focus");
            })
            .on("blur", "input,textarea", function () {
                e(this).prev("i.fa").removeClass("focus");
            }),
        e("#rex-sticke-nav").sticky({ topSpacing: 0 }),
        e("body").hasClass("single"))
    ) {
        var n = e("#rex-navigation li a");
        n.each(function () {
            var a = e(this).attr("href");
            e(this).attr("href", "./" + a);
        });
    }
    e(".backtop").hide(),
        e(window).on("scroll", function () {
            e(this).scrollTop() > 400 ? e(".backtop").fadeIn() : e(".backtop").fadeOut();
        }),
        e(".backtop").on("click", function () {
            return e("html, body").animate({ scrollTop: 0 }, 2500), !1;
        }),
        new WOW().init();
    var i = e("#rex-navigation").slimmenu({ resizeWidth: "800", collapserTitle: "", animSpeed: "medium", easingEffect: null, indentChildren: !1, childrenIndenter: !1 }),
        o = e(".rex-navigation-area").find(".menu-collapser");
    o.on("click", function (e) {
        i.toggleClass("nav-collapsed nav-open");
    }),
        e("body").on("click", function (a) {
            var t = e(a.target);
            i.hasClass("nav-open") && !t.closest(o).length && (i.slideToggle(), i.toggleClass("nav-collapsed nav-open"));
        }),
        e(window).load(function () {
            e("div.loading").remove(), e("body").removeClass("loading");
        }),
        e("html").niceScroll();
});
