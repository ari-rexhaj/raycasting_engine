class ray {

    x1;
    x2;
    y1;
    y2;

    Intersect(wall) { //will take in wall class as parameter, this easiest
        console.log("intersect ran")
        //bla bla if ray hits nothing return length 0
        //if ray hits something return height of column and the walls color array
        //https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection

        //unit circle shenanigans must commence
        
        let x1 = wall.x1;
        let y1 = wall.y1;
        let x2 = wall.x2;
        let y2 = wall.y2;
        
        let x3 = this.x1;
        let y3 = this.y1;
        let x4 = this.x2;
        let y4 = this.y2;

        intersect_x = ( (x1*y2-y1*x2) * (x3-x4) - (x1-x2) * (x3*y4-y3*x4) ) / ( (x1-x2) * (y3-y4) - (y1-y2) * (x3-x4) )
        intersect_y = ( (x1*y2-y1*x2) * (y3-y4) - (y1-y2) * (x3*y4-y3*x4) ) / ( (x1-x2) * (y3-y4) - (y1-y2) * (x3-x4) )
        return [intersect_x,intersect_y]
    }
}