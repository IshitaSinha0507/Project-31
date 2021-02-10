class Umbrella{
    constructor(x,y){
        var options ={
            isStatic : true
        }
        this.image = loadImage("walking_1.png");
        this.umbrealla = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world,this.umbrealla);
    }
    display(){
        var pos = this.umbrealla.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
    }
}