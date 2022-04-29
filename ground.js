class Ground {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    var options = {
      isStatic: true,
    };
    this.ground = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    World.add(world,this.ground);
  }
  display() {
    push();
    fill("yellow");
    rectMode(CENTER);
    rect(this.ground.position.x, this.ground.position.y, this.width, this.height);
    pop();
    console.log(this.width);
  }
}
