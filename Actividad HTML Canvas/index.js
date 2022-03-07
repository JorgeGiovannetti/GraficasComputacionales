const drawKirby = () => {
  const canvas = document.querySelector("#kirby");
  if (!canvas.getContext) return;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#f0f0f0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const center = { x: 100, y: 100 };
  ctx.lineCap = 'round';

  // Foot R
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  ctx.arc(center.x, center.y + 78, 8, Math.PI / 2, Math.PI);
  ctx.moveTo(center.x, center.y + 78 + 8);
  ctx.lineTo(center.x + 60, center.y + 78 + 8);
  ctx.bezierCurveTo(center.x + 80, center.y + 78 + 4, center.x + 80, center.y + 65, center.x + 50, center.y + 50);
  ctx.lineTo(center.x - 8, center.y + 78);
  ctx.fillStyle = "#D40909";
  ctx.fill();
  ctx.stroke();

  // Arm L
  ctx.beginPath();
  ctx.moveTo(center.x - 85, center.y + 25);
  ctx.bezierCurveTo(center.x - 105, center.y + 20, center.x - 95, center.y - 35, center.x - 62, center.y - 50);
  ctx.fillStyle = "#F593AB";
  ctx.fill();
  ctx.stroke();

  // Arm R
  ctx.beginPath();
  ctx.moveTo(center.x + 80, center.y);
  ctx.bezierCurveTo(center.x + 95, center.y - 40, center.x + 80, center.y - 90, center.x + 35, center.y - 70);
  ctx.closePath();
  ctx.fillStyle = "#F593AB";
  ctx.fill();
  ctx.stroke();

  // Head
  ctx.fillStyle = "#F593AB";
  ctx.beginPath();
  ctx.arc(center.x, center.y, 80, 0, Math.PI * 2);
  ctx.fill();
  // Head Border
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  ctx.arc(center.x, center.y, 80, -Math.PI / 16, Math.PI + Math.PI / 32);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(center.x, center.y, 80, Math.PI + Math.PI / 6, Math.PI * 2 - Math.PI / 3);
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

  // Foot L
  ctx.lineWidth = 3.5;
  ctx.save();
  ctx.beginPath();
  ctx.translate(center.x - 50, center.y + 50);
  ctx.rotate(Math.PI / 3.5);
  ctx.translate(-center.x + 50, -center.y - 50);
  ctx.ellipse(center.x - 50, center.y + 50, 50, 30, 0, 0, 2 * Math.PI);
  ctx.fillStyle = "#D40909";
  ctx.fill();
  ctx.stroke();
  ctx.restore();
};

drawKirby();
