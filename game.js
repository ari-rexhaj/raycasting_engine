let ctx = canvas.getContext("2d");
let walls = []

let mouseX = 0
let mouseY = 0

let char = new player()

walls.push(new Wall(100,0,400,200))

function renderWalls(list_of_walls) {
    console.log("render walls")
}
//function mouse_position(e)
//{
    //      code runs when mouse is moved, may delete later
    //}

document.addEventListener("keydown",function(e) {
    switch(e.key) {
        
        case "ArrowRight":
            char.angle -= 1
            break

        case "ArrowLeft":
            char.angle += 1
            break
    } 

});


function gameLoop() {
    ctx.clearRect(0,0,innerWidth,innerHeight)
    for(let i = 0; i < char.amount_rays; i++) {

        angle = char.fov - ((char.fov*i)/char.amount_rays)-((char.fov/char.amount_rays)/2)-(char.fov/2)+char.angle

        temp_ray = new ray(char.x,char.y,angle);

        for(let j = 0; j < walls.length; j++) {
            let hit = temp_ray.cast(walls[j])
            if (hit[0] != 0) {

                temp_ray.x2 = hit[0]
                temp_ray.y2 = hit[1]
            }
            else {
                console.log(hit)
            };

        }

        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(char.x,char.y)

        ctx.lineTo(temp_ray.x2,temp_ray.y2);
        ctx.stroke()
    }

    setTimeout(gameLoop,1000/60)
}

gameLoop()