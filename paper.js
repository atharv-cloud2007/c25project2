class Paper
 {
    constructor(x,y,width,height) {
      var options = {
          'restitution':0,
          'friction':2.3,
          'density':1.0
      }
      this.width=width
      this.height=height 
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image=loadImage("paperImage.png")
      World.add( world,this.body);
     
    }
    display(){
      var pos=this.body.position
      imageMode(CENTER)
      image(this.image,pos.x,pos.y,this.width,this.height)
    }
  };
  