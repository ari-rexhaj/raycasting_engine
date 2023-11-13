class Wall {

    //a wall is just a line from one point to another, made of arrays. The arrays hold color values to create textures

    x1; //first edge of wall
    y1;

    x2; //second edge of wall
    y2;

    texture;

    constructor(x1,y1,x2,y2) {
        this.x1 = x1 
        this.y1 = y1 
        this.x2 = x2 
        this.y2 = y2

        this.texture = []
        let testing_color_array = []

// texture is an array holding arrays of different color values. 
// when a raycast hits a wall, the script will compute which part
// of the wall it hit and give it the correspoding array of colors,
// then it will show the colors creating a texture

        while(this.texture.length < 10) {
            while(testing_color_array.length < 10) {
                testing_color_array.push("red")
            }
            this.texture.push(testing_color_array)
        }
        console.log(this.texture)
    }
}