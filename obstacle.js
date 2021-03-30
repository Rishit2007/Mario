class Obstacle{
    constructor(x,y,width,height,options){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image1 = loadImage("obstacle1.png");
       // this.image2 = loadImage("obstacle2.png");
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image1, pos.x,520,80,125);
        //rectMode(CENTER);
        //rect( pos.x,pos.y,this.width,this.height);

    }
};