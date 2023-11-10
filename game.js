let ctx = canvas.getContext("2d");
let walls = []

let mouseX = 0
let mouseY = 0

let char = new player()
let max_length = 100

walls.push(new Wall(1,2,3,4))

function renderWalls(list_of_walls) {
    console.log("render walls")
}
//function mouse_position(e)
//{
    //      code runs when mouse is moved, may delete later
    //}
    
    
    
    function gameLoop() {
    for(let i = 0; i < char.amount_rays; i++) {    
        let temp_ray = new ray(char.x,char.y,i);
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(char.x,char.y)

        if (Math.cos(i)+char.x == temp_ray.x2) {
            console.log("i cream")
        }
        else {
            console.log(" i dont")
        }


        ctx.lineTo(10*temp_ray.x2,10*temp_ray.y2);
        ctx.stroke()
    }

    setTimeout(gameLoop,1000/60)
}

gameLoop()