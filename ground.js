class Ground {
    constructor(x,y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,800,30,options);
      World.add( world,this.body);
      Matter.Body.setStatic(this.body,true)
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0,0,this.width,this.height);
      pop();
    }
  };
  