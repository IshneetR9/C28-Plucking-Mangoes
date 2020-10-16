class Launcher
{
    constructor(body, pointB)
    {
        var options = {
            bodyA: body,
            pointB: pointB,
            stiffness: 0.04,
            length: 15
        }
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    fly()
    {
        this.launcher.bodyA = null;
    }

    display()
    {
        if(this.launcher.bodyA)
        {
            strokeWeight(4);
            stroke(255);
            line(this.launcher.bodyA.position.x, this.launcher.bodyA.position.y, this.pointB.x, this.pointB.y);
        }
    }
}