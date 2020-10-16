class Tree
{
    constructor(x, y, width, height)
    {
        var options = {
            isStatic: true
        }
        this.tree = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.tree);
    }
    display()
    {
        fill(0);
        rectMode(CENTER);
        rect(this.tree.position.x, this.tree.position.y, this.width, this.height);
    }
}