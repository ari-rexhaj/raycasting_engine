class Wall {

    //a wall is just a line from one point to another, made of arrays. The arrays hold color values to create textures

    x1; //first edge of wall
    y1;

    x2; //second edge of wall
    y2;

    texture;
    texture_length;
    wall_length;

    constructor(x1,y1,x2,y2) {
        this.x1 = x1 
        this.y1 = y1 
        this.x2 = x2 
        this.y2 = y2

        this.texture = []
        let testing_color_array = []
        this.wall_length = distance(this.x1,this.y1,this.x2,this.y2)
        this.texture_length = Math.ceil(this.wall_length/20)


// texture is an array holding arrays of different color values. 
// when a raycast hits a wall, the script will compute which part
// of the wall it hit and give it the correspoding array of colors,
// then it will show the colors creating a texture

        let i = 0
        while(this.texture.length < this.texture_length) {
            while(testing_color_array.length < this.texture_length) {
                testing_color_array.push(i)
                i++
            }
            this.texture.push(testing_color_array)
        }
        //console.log(this.texture)
    }
    give_color(x2,y2) {
        let dist = distance(this.x1,this.y1,x2,y2)
        let index = Math.floor((dist/this.wall_length)*this.texture_length)
        return this.texture[index]
    }
}