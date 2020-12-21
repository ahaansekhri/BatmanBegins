class Drops{
    constructor(x,y){

        this.body = Bodies.circle(x,y,5)
        World.add(world,this.body);
    }

    update(){
        if(this.body.position.y>800){
            Matter.Body.setPosition(this.body,{x:random(0,600),y:0})
        }
    }

    display(){
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,15,25);
    }    

}