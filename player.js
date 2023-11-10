class player {
    x;
    y;
    angle;
    amount_rays;
    fov;

    constructor() {
        this.x = innerWidth/2
        this.y = innerHeight/2
        this.angle = 0
        this.amount_rays = 1
        this.fov = 45
    }

    update(x,y) {
        for(let i = 0; i < this.amount_rays; i++) {
            ctx.strokeStyle = "black";
            ctx.beginPath();
            ctx.moveTo(this.x,this.y)
            ctx.lineTo(x,y);
            ctx.stroke()
            console.log(x,y)
        }
    }
}