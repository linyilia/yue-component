// 元素获取
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
// 设定画布大小
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
// 页面缩放改变画布大小
window.addEventListener("resize", resizeCanvas);

function clickSite(e) {
  // 获取当前鼠标的坐标
  let x = e.clientX;
  let y = e.clientY;
  // 绘制
  addFires(x, y);
}
document.addEventListener("click", clickSite);


function tick() {
  // 设置拖影
  ctx.globalCompositeOperation = "destination-out";
  ctx.fillStyle = "rgba(0,0,0," + 10 / 100 + ")";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "lighter";
  // 更新画布
  drawFires();
  requestAnimationFrame(tick);
}
tick();

function drawFires(x,y) {
    
  // 初始半径，以及粒子数量
  let count = 10;
  let radius = 10;
//   firework.radius *= 1 - firework.speed / 120;
  for (let i = 0; i < count; i++) {
    // 渲染出当前数据
    // 下面是点数学题
    // moveX，moveY是粒子开始的坐标，画个三角形，角度半径知道很容易就得出方程
    let angle = (360 / count) * i;
    let radians = (angle * Math.PI) / 180;
    let moveX = x + Math.cos(radians) * radius;
    let moveY = y + Math.sin(radians) * radius;
    // 开始路径
    ctx.beginPath();
    ctx.arc(moveX, moveY, 2, Math.PI * 2, false);
    // 结束
    ctx.closePath();
    ctx.fillStyle = "#ff0000";
    ctx.fill();
  }
 
}
let hue = Math.random() * 360;
let hueVariance = 60;
function setColors(firework) {
  firework.hue =
    Math.floor(Math.random() * (hue + hueVariance - (hue - hueVariance))) +
    (hue - hueVariance);
  firework.brightness = Math.floor(Math.random() * 21) + 50;
  firework.alpha = (Math.floor(Math.random() * 60) + 40) / 100;

  let moveX = Math.cos(firework.radians) * firework.radius;
let moveY = Math.sin(firework.radians) * firework.radius + 1;
firework.x += moveX;
firework.y += moveY;
// 更新数据,让圆扩散开来
firework.radius *= 1 - firework.speed / 120
firework.alpha -= 0.01;
// 如果透明度小于0就删除这个粒子
if (firework.alpha <= 0) {
    fireworks.splice(i, 1);
    // 跳过这次循环，不进行绘制
    continue;
}
}
setInterval(() => {
    // 可以多调用几次用来增加烟花的数量
    addFires(Math.random() * canvas.width, Math.random() * canvas.height)
    addFires(Math.random() * canvas.width, Math.random() * canvas.height)
}, 500)
function addFires(x,y){
   drawFires(x,y)
}
