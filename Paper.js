class Paper.js{
    constructor(x,y){

        var options={
            isStatic:false ,
            restitution:0.3 ,
            friction:0,
            density:1.2
        }

        //this.image=loadImage("paper.png");
        this.body=Bodies.rectangle(x,y,10,10,options);

        this.x = x;
        this.y = y;
        this.w = 10;
        this.h = 10;

        World.add(world , this.body);
    }

    display(){
        rectMode(CENTRE);
        fill(125,125,125);
        rect(this.x,this.y,10,10);
        //image(this.image,this.x,this.y);


    }


}