$("document").ready(function () {
	/* For the sticky navigation */
	$(".js--section-about-us").waypoint(
		function (direction) {
			if (direction == "down") {
				$("nav").addClass("sticky");
			} else {
				$("nav").removeClass("sticky");
			}
		},
		{
			offset: "10px;",
		}
	);

	/* Scroll on buttons */
	$(".js--scroll-to-services").click(function () {
		$("html, body").animate(
			{ scrollTop: $(".js--section-services").offset().top - 500 },
			1000
		);
	}),
		$(".js--scroll-to-gallery").click(function () {
			$("html, body").animate(
				{ scrollTop: $(".js--section-gallery").offset().top - 400 },
				1000
			);
		});

	/* Mobile nav */
	$(".js--nav-icon").click(function () {
		var nav = $(".js--main-nav");
		var icon = $(".js--nav-icon");

		nav.slideToggle(200);
		if (icon.hasClass("ion-nav-icon-round")) {
			icon.addClass("ion-close-round");
			icon.removeClass("ion-nav-icon-round");
		} else {
			icon.addClass("ion-nav-icon-round");
			icon.removeClass("ion-close-round");
		}
	});
});
