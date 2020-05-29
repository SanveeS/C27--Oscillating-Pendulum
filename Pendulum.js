class Pendulum {
    constructor(x,y,diameter) {
      var options = {
        restitution:1.0,
        density : 1.0
      }
      this.body = Bodies.circle(x,y,diameter,options);
      this.diameter = diameter;
      World.add(world, this.body);
    }
    display(){
        push();
        var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        circle(0,0,this.body.diameter)
        pop();
    }
  }
