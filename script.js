const c = document.getElementById('c');
const ctx = c.getContext('2d');

ctx.beginPath();
ctx.arc(395, 250, 140, 0, 2 * Math.PI);
ctx.fill();
ctx.arc(195, 150, 40, 0, 2 * Math.PI);
ctx.stroke();
