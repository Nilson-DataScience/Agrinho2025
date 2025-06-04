let fruits = [];

function setup() {
  createCanvas(600, 400);
  // Cria frutas no campo
  for (let i = 0; i < 10; i++) {
    fruits.push({ x: random(50, 250), y: random(200, 350), collected: false });
  }
}

function draw() {
  background(220);
  
  // --- CAMPO --- //
  fill(100, 200, 100); // Verde gramado
  rect(0, height/2, width/2, height/2);
  
  // Desenha árvore
  drawTree(100, height/2); // (x, base da árvore)

  
  // --- FRUTAS --- //
  for (let fruit of fruits) {
    if (!fruit.collected) {
      fill(255, 0, 0); // Vermelho para frutas
      circle(fruit.x, fruit.y, 20);
    }
  }
}

function drawTree(x, y) {
  // Tronco (marrom)
  fill(139, 69, 19); // Cor de madeira
  rect(x - 10, y - 80, 20, 80);
    // Folhagem (verde em camadas)
  fill(34, 139, 34); // Verde folha
  ellipse(x, y - 100, 60, 60); // Centro
  ellipse(x - 25, y - 90, 40, 40); // Esquerda
  ellipse(x + 25, y - 90, 40, 40); // Direita
  ellipse(x, y - 130, 50, 50); // Topo
}
  
function drawTree2(x, y) {
  // Tronco (marrom)
  fill(139, 69, 19); // Cor de madeira
  rect(x - 50, y - 80, 20, 80);
  
  // Folhagem (verde em camadas)
  fill(34, 139, 34); // Verde folha
  ellipse(x, y - 100, 60, 60); // Centro
  ellipse(x - 25, y - 90, 40, 40); // Esquerda
  ellipse(x + 25, y - 90, 40, 40); // Direita
  ellipse(x, y - 130, 50, 50); // Topo
}

function mouseClicked() {
  // Verifica se clicou em uma fruta
  for (let fruit of fruits) {
    if (dist(mouseX, mouseY, fruit.x, fruit.y) < 20) {
      fruit.collected = true;
    }
  }
}
