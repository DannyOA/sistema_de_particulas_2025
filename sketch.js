let sp = [];

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(5, 5, 90);

  stroke(255, 255, 0, 100);
  strokeWeight(3);
  noFill();

  if (sp.length > 1) {
    for (let i = 0; i < sp.length - 1; i++) {
      line(sp[i].pos.x, sp[i].pos.y, sp[i + 1].pos.x, sp[i + 1].pos.y);
    }
  }

  for (let i = sp.length - 1; i >= 0; i--) {
    const p = sp[i];
    p.update();
    p.display();

    if (p.estaMuerta) {
      sp.splice(i, 1);
    }
  }


  if (frameCount % 2 === 0) {
    sp.push(new Particula(mouseX, mouseY));
  }
}

function mouseClicked() {
  sp.push(new Particula(mouseX, mouseY));
}
