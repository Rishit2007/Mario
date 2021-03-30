class Box{
    constructor(x,y,width,height){
      var options={
       
             
      }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("Mario.png");
        this.width = width;
        this.heigth = height;
        World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x, pos.y-50, 150, 150);
      
    }
};