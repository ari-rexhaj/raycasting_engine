let ctx = canvas.getContext("2d");
let walls = []

let mouseX = 0
let mouseY = 0

let char = new player()

walls.push(new Wall(1,2,3,4))

function renderWalls(list_of_walls) {
    console.log("render walls")
}
function mouse_position(e)
{
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    char.update(mouseX,mouseY)
}

function gameLoop() {
    
    //setTimeout(gameLoop,1000/60)
}

gameLoop()