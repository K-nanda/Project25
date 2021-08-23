class Paper{
    constructor(x,y,r){

        var options={
            isStatic:false ,
            restitution:0.3 ,
            friction:0,
            density:1.2
        }

        this.image=loadImage("paper.png");
        

        this.x = x;
        this.y = y;
        this.r = r;

        this.body=Bodies.circle(this.x,this.y,this.r,options);

        World.add(world , this.body);
    }

    display(){
        var paperPOS = this.body.position ;
        push();
        translate(paperPOS.x , paperPOS.y);

        imageMode(CENTER);
        image(this.image , 0 , 0 , this.r , this.r);
        pop();
    }


}
