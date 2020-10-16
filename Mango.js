class Mango
{
    constructor(x, y, r)
    {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.body = Bodies.circle(x, y, r, options);
        this.width = r;
        this.height = r;
        this.image = loadImage("Images/mango.png");
        World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        imageMode(RADIUS);
        ellipseMode(CENTER);
        image(this.image, 0, 0, this.width*2, this.height*2);
        pop();
    }
}