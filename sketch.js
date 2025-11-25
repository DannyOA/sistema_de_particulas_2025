let sp = [];

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20, 30, 80); // azul con transparencia

  // Dibujar líneas entre estrellas
  stroke(255, 255, 0, 100);
  strokeWeight(1);
  noFill();
  if (sp.length > 1) {
    for (let i = 0; i < sp.length - 1; i++) {
      line(sp[i].pos.x, sp[i].pos.y, sp[i + 1].pos.x, sp[i + 1].pos.y);
    }
  }

  // Actualizar y mostrar partículas
  for (let i = sp.length - 1; i >= 0; i--) {
    const p = sp[i];
    p.update();
    p.display();

    if (p.estaMuerta) {
      sp.splice(i, 1);
    }
  }

  // Generar estrellas continuamente siguiendo el mouse
  sp.push(new Particula(mouseX, mouseY));
}

function mouseClicked() {
  // Genera una estrella adicional donde se haga click
  sp.push(new Particula(mouseX, mouseY));
}
