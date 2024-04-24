var rect = document.querySelector(".center");
rect.addEventListener("mousemove", function (dets) {
	var rectangleLocation = rect.getBoundingClientRect();
	var locationInsideRectangle = dets.clientX - rectangleLocation.left;

	if (locationInsideRectangle < rectangleLocation.width / 2) {
		var redColor = gsap.utils.mapRange(
			0,
			rectangleLocation.width / 2,
			255,
			0,
			locationInsideRectangle
		);
		gsap.to(rect, {
			backgroundColor: `rgb(${redColor}, 0, 0)`,
			ease: Power4,
		});
	} else {
		var blueColor = gsap.utils.mapRange(
			rectangleLocation.width / 2,
			rectangleLocation.width,
			0,
			255,
			locationInsideRectangle
		);
		gsap.to(rect, {
			backgroundColor: `rgb( 0, 0, ${blueColor})`,
			ease: Power4,
		});
	}
});

rect.addEventListener("mouseleave", () => {
	gsap.to(rect, {
		backgroundColor: "#fff",
	});
});
