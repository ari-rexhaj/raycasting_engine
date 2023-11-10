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
        this.amount_rays = 50
        this.fov = 45
    }
}