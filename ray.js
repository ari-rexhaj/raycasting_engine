class ray {


    x1;
    y1;

    x2;
    y2;

    angle;
    max_length;

    constructor(x1,y1,angle) {
        this.x1 = x1
        this.y1 = y1
        this.max_length = innerWidth*innerHeight
        this.angle = angle

        this.x2 = this.max_length*Math.cos(angle*Math.PI/180)+this.x1;
        this.y2 = this.max_length*Math.sin(angle*Math.PI/180)+this.y1;
    }

    cast(wall) { //will take in wall class as parameter, this easiest

        //bla bla if ray hits nothing return length 0
        //if ray hits something return height of column and the walls color array
        //https://en.wikipedia.org/w iki/Line%E2%80%93line_intersection

        //unit circle shenanigans must commence
        
        let x1 = wall.x1;
        let y1 = wall.y1;
        let x2 = wall.x2;
        let y2 = wall.y2;
        
        let x3 = this.x1;
        let y3 = this.y1;
        let x4 = this.x2;
        let y4 = this.y2;

        const denominator = (x1-x2) * (y3-y4) - (y1-y2) * (x3-x4)
        if (denominator == 0) {
            return;
        }

        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denominator;
        const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denominator;

        if (t > 0 && t < 1 && u > 0) {
            let intersect_x = x1 + t * (x2 - x1);
            let intersect_y = y1 + t * (y2 - y1); 
            this.x2 = intersect_x
            this.y2 = intersect_y
            return [intersect_x,intersect_y]
        }
        else {
            return;
        }
    }
}