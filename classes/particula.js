class Particula {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);

    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(1, 3));

    this.tVida = int(random(120, 250));
    this.tVidaInicial = this.tVida;

    this.estaMuerta = false;

    this.diam = random(50, 85);      // tamaño general de la estrella
    this.gravedad = createVector(0, 0.05);
    this.velAngular = random(-0.1, 0.1);

    this.c = color(255, 230, 0, 230); // amarillo brillante

    this.rotacion = random(360);      // rotación propia
    this.velRotacion = random(-2, 2); // velocidad de giro
  }

  update() {
    if (!this.estaMuerta) {
      this.vel.add(this.gravedad);
      this.vel.rotate(this.velAngular);
      this.pos.add(this.vel);
      this.tVida -= 1;

      this.rotacion += this.velRotacion;

      if (this.tVida <= 0) {
        this.estaMuerta = true;
      }
    }
  }

  // Dibujar estrella con vértices
  drawStar(x, y, r1, r2, npoints) {
    let angle = 360 / npoints;
    let halfAngle = angle / 2;

    beginShape();
    for (let a = 0; a < 360; a += angle) {
      let sx = x + cos(a) * r2;
      let sy = y + sin(a) * r2;
      vertex(sx, sy);

      sx = x + cos(a + halfAngle) * r1;
      sy = y + sin(a + halfAngle) * r1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

  display() {
    noStroke();
    fill(this.c);

    let diamFinal = map(this.tVida, this.tVidaInicial, 0, this.diam, 0);
    diamFinal = max(0, diamFinal);

    let outer = diamFinal / 2; // punta larga
    let inner = diamFinal / 5; // punta interna

    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.rotacion);
    this.drawStar(0, 0, inner, outer, 5);
    pop();
  }
}
