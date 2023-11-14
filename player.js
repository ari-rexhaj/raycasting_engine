class player {
    x;
    y;
    angle;
    init_angle;
    amount_rays;
    fov;
    move_speed;
    turn_speed;

    constructor() {
        this.x = innerWidth/2
        this.y = innerHeight/2
        this.init_angle = -90
        this.amount_rays = 50
        this.fov = 90
        this.move_speed = 5
        this.turn_speed = 2
    }
    movement(move_dir) {
        //why does this work
        this.x = this.move_speed*move_dir[1]*Math.cos(-this.init_angle*Math.PI/180)+this.move_speed*move_dir[0]*Math.sin(-this.init_angle*Math.PI/180)+this.x
        this.y = this.move_speed*move_dir[1]*Math.sin(this.init_angle*Math.PI/180)+this.move_speed*move_dir[0]*Math.cos(this.init_angle*Math.PI/180)+this.y
    }
}