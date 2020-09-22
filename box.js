class Box       // Blueprint for all the box objects we will make in the angry birds game
{
    constructor(x,y,width,height) // defines default properties of the objects to be created.
    {


        var options = {
            restitution: 1  
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body)



    }

    display()
    {

        var pos = this.body.position
        rectMode(CENTER)
        fill("white")
        rect(pos.x, pos.y, this.width, this.height)
        
    }

}