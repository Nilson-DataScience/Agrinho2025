let farmColor, cityColor;
let truckX = 0;

function setup() {
  createCanvas(800, 400);
  farmColor = color(100, 200, 100); // Verde campo
  cityColor = color(200, 100, 100); // Vermelho cidade
}

function draw() {
  // Fundo com gradiente campo-cidade
  let bgColor = lerpColor(farmColor, cityColor, truckX / width);
  background(bgColor);
  
  drawFarm();  // Lado esquerdo (campo)
  drawCity();  // Lado direito (cidade)
  
  // Caminhão se move com sin() para efeito ondulado
  truckX += 1;
  let truckY = height/2 + sin(frameCount * 0.05) * 20;
  drawTruck(truckX, truckY);
  
  // Reinicia ao chegar na cidade
  if (truckX > width) truckX = -50;
}

// ---- FUNÇÕES DE DESENHO ---- //
function drawFarm() {
  // Céu do campo (gradiente azul claro)
  for (let y = 0; y < height/2; y++) {
    let skyColor = lerpColor(color(135, 206, 235), color(255), y / (height/2));
    stroke(skyColor);
    line(0, y, width/2, y);
  }
  
  // Gramado (verde)
  fill(34, 139, 34);
  noStroke();
  rect(0, height/2, width/2, height/2);
  
  // Plantação (fileiras de "plantas")
  fill(0, 100, 0);
  for (let x = 20; x < width/2; x += 30) {
    for (let y = height/2 + 10; y < height - 20; y += 20) {
      triangle(x, y, x - 10, y + 20, x + 10, y + 20);
    }
  }
  
  // Celeiro (vermelho com telhado)
  fill(139, 0, 0);
  rect(width/4 - 40, height/2 - 60, 80, 60);
  fill(160, 82, 45);
  triangle(width/4 - 60, height/2 - 60, width/4 + 60, height/2 - 60, width/4, height/2 - 100);
  
  // Sol (amarelo com animação)
  fill(255, 255, 0);
  let sunY = height/4 + sin(frameCount * 0.02) * 10; // Flutua suavemente
  circle(width/6, sunY, 50);
}

function drawCity() {
  // Céu noturno (gradiente escuro)
  for (let y = 0; y < height/2; y++) {
    let nightColor = lerpColor(color(0, 0, 50), color(25, 25, 112), y / (height/2));
    stroke(nightColor);
    line(width/2, y, width, y);
  }
  
  // Estrada (cinza escuro)
  fill(50);
  rect(width/2, height/2 + 50, width/2, height/2 - 50);
  
  // Prédios (retângulos com janelas)
  for (let x = width/2 + 20; x < width - 20; x += 60) {
    let buildingHeight = random(80, 150);
    fill(random(50, 100)); // Tons de cinza
    rect(x, height/2 - buildingHeight, 40, buildingHeight);
    
    // Janelas (amarelas acesas)
    fill(255, 255, 150);
    for (let y = height/2 - buildingHeight + 10; y < height/2 - 10; y += 15) {
      rect(x + 5, y, 10, 8);
      rect(x + 25, y, 10, 8);
    }
  }
  
  // Lua (branca)
  fill(240);
  circle(width * 5/6, height/4, 40);
}

function drawTruck(x, y) {
  fill(200, 0, 0); // Vermelho
  rect(x, y, 60, 30); // Cabaça do caminhão
  fill(0);
  circle(x + 10, y + 30, 20); // Rodas
  circle(x + 50, y + 30, 20);
  fill(255);
  rect(x + 35, y - 10, 20, 10); // Carga (caixa branca)
}
