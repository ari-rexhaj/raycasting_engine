class player {
    x;
    y;
    angle;
    amount_rays;
    fov;
    move_speed;
    turn_speed;

    constructor() {
        this.x = innerWidth/2
        this.y = innerHeight/2
        this.angle = -90
        this.amount_rays = 20
        this.fov = 200
        this.move_speed = 5
        this.turn_speed = 2
    }
    movement(move_dir) {
        //why does this work
        let old_x = this.x
        let old_y = this.y
        this.x = this.move_speed*move_dir[1]*Math.cos(this.angle*Math.PI/180)+this.move_speed*move_dir[0]*Math.sin(-this.angle*Math.PI/180)+this.x
        this.y = this.move_speed*move_dir[1]*Math.sin(this.angle*Math.PI/180)+this.move_speed*move_dir[0]*Math.cos(this.angle*Math.PI/180)+this.y
    }
}