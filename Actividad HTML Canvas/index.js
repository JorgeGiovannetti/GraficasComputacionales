const drawKirby = () => {
	const canvas = document.querySelector("#kirby");
	if (!canvas.getContext) return;

	const ctx = canvas.getContext("2d");
	const center = { x: 150, y: 300 };

	// Head
	ctx.fillStyle = "#F593AB";
	ctx.beginPath();
	ctx.arc(center.x, center.y, 80, 0, Math.PI * 2);
	ctx.fill();
	// Head Border
	ctx.lineWidth = 3.0;
	ctx.beginPath();
	ctx.arc(center.x, center.y, 80, 0, Math.PI * 2);
	ctx.stroke();

	// Blush L
	ctx.filter = "blur(2px)";
	ctx.fillStyle = "#F9495C";
	ctx.beginPath();
	ctx.ellipse(center.x - 32, center.y, 10, 4, 0, 0, 2 * Math.PI);
	ctx.fill();
	// Blush R
	ctx.beginPath();
	ctx.ellipse(center.x + 32, center.y, 10, 4, 0, 0, 2 * Math.PI);
	ctx.fill();

	// Mouth
	ctx.filter = "none";
	ctx.lineWidth = 1.4;
	ctx.fillStyle = "black";
	ctx.beginPath();
	ctx.ellipse(center.x, center.y + 10, 8, 6, 0, 0, Math.PI);
	ctx.stroke();

	// Eye L
	const eyeGradientL = ctx.createRadialGradient(
		center.x - 14,
		center.y - 34,
		12,
		center.x - 13,
		center.y - 25,
		24
	);
	eyeGradientL.addColorStop(0, "black");
	eyeGradientL.addColorStop(0.6, "#05448C");
	ctx.fillStyle = eyeGradientL;
	ctx.beginPath();
	ctx.ellipse(center.x - 14, center.y - 25, 7.2, 21, 0, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle = "white";
	ctx.beginPath();
	ctx.ellipse(center.x - 14, center.y - 33, 4.7, 10, 0, 0, 2 * Math.PI);
	ctx.fill();

	// Eye R
	const eyeGradientR = ctx.createRadialGradient(
		center.x + 14,
		center.y - 34,
		12,
		center.x + 13,
		center.y - 25,
		24
	);
	eyeGradientR.addColorStop(0, "black");
	eyeGradientR.addColorStop(0.6, "#05448C");
	ctx.fillStyle = eyeGradientR;
	ctx.beginPath();
	ctx.ellipse(center.x + 14, center.y - 25, 7.2, 21, 0, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle = "white";
	ctx.beginPath();
	ctx.ellipse(center.x + 14, center.y - 33, 4.7, 10, 0, 0, 2 * Math.PI);
	ctx.fill();
};

drawKirby();
