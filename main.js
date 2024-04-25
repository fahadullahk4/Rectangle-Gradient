var rect = document.querySelector(".center");
var text = document.querySelector("h1");
gsap.from (rect, {
    x: "-60%",
    duration: 2,
    stagger: 2,
})
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
		gsap.to(text, {
			color: `rgb(${redColor}, 0, 0)`,
			ease: Power4,
			opacity: 1,
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
		gsap.to(text, {
			color: `rgb( 0, 0, ${blueColor})`,
			ease: Power4,
			opacity: 1,
		});
	}
});

rect.addEventListener("mouseleave", () => {
	gsap.to(rect, {
		backgroundColor: "#fff",
	});
	gsap.to(text, {
		color: "#fff",
	});
});
