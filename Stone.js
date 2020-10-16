class Stone
{
    constructor(x, y, r)
    {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.stone = Bodies.circle(x, y, r, options);
        this.width = r;
        this.height = r;
        World.add(world, this.stone);
        this.image = loadImage("Images/stone.png");
    }
    display()
    {
        var pos = this.stone.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.stone.angle);
        imageMode(RADIUS);
        image(this.image, 0, 0, this.width*2, this.height*2);
        pop();
    }
}