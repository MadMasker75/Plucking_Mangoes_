class Tree {
    constructor(x,y,width,height){
      var options = {
        isStatic : true
     }
     this.x = x;
     this.y = y;
     this.width = 450;
     this.height = 580;

     this.body = Bodies.rectangle(x,y,width,height,options);
     this.image = loadImage("tree.png");
     
     World.add(world, this.body);
    }
    /*constructor(x,y){
      super(x,y,450,580);
      this.image = loadImage("tree.png");
    }*/
    display() {
      var pos = this.body.position;
      rectMode(CENTER);
      //fill("grey");
      image(this.image,pos.x, pos.y, this.width, this.height);
      }
      /*display() {
        super.display();
      }*/
}