class player {
    x;
    y;
    angle;
    amount_rays;
    fov;

    constructor() {
        this.x = innerWidth/2
        this.y = innerHeight/2
        this.angle = -90
        this.amount_rays = 100
        this.fov = 45
    }
}