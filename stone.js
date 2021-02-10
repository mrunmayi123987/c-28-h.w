class Stone{
    constructor(x,y){
        var options={
      'isStatic':false,
      'restitution':0,
      'friction':1,
      'density':1.2
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("images/stone.png");
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        //pos.x = mouseX;
     // pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke('blue')
        fill('red')
       // rectMode(CENTER)
        //rect(0, 0, this.width, this.height);
   imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}