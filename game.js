let ctx = canvas.getContext("2d");
let walls = []

let mouseX = 0
let mouseY = 0

let char = new player()

walls.push(new Wall(100,0,400,200))
walls.push(new Wall(0,100,200,400))
walls.push(new Wall(0,innerHeight,400,500))
walls.push(new Wall(500,200,100,0))
walls.push(new Wall(500,500,200,0))
walls.push(new Wall(1000,100,1500,250))


let inputs = []

document.addEventListener("keydown",function(e) {   //saves an input to the input list if the key has been pressed
    switch(e.key) {
        case "ArrowRight":
            if(!inputs.includes("ArrowRight")) {
                inputs.push(e.key)
            }
            break
            
        case "ArrowLeft":
            if(!inputs.includes("ArrowLeft")) {
                inputs.push(e.key)
            }
            break
            
        case "w":
            if(!inputs.includes("w")) {
                inputs.push(e.key)
            }
            break
            
        case "s":
            if(!inputs.includes("s")) {
                inputs.push(e.key)
            }
            break
            
        case "a":
            if(!inputs.includes("a")) {
                inputs.push(e.key)
            }
            break
            
        case "d":
            if(!inputs.includes("d")) {
                inputs.push(e.key)
            }
            break
        }
});

document.addEventListener("keyup",function(e) {     //removes an from the input list if input its been released
    for(i = 0; i < inputs.length; i++) {
        if(inputs[i] == e.key) {
            inputs.splice(i,1)
        }
    }
})
                        
function renderWalls(list_of_walls) {
    for(let i = 0; i < walls.length; i++) {
        ctx.moveTo(walls[i].x1,walls[i].y1)
        ctx.lineTo(walls[i].x2,walls[i].y2)
        ctx.stroke() 
    }

}
function distance(x1,y1,x2,y2) {
    let delta_x = (x2-x1)
    let delta_y = (y2-y1)

    return Math.sqrt(delta_x*delta_x+delta_y*delta_y)
}

function player_movement() {
    let move_sum = [0,0]
    for(let i = 0; i < inputs.length;i++) { //inputs are stored in a list. We then check every input that is currently being pressed
        switch (inputs[i]) {
            case "ArrowRight":
                char.angle += char.turn_speed
                break
    
            case "ArrowLeft":
                char.angle -= char.turn_speed
                break

            case "w":
                if(inputs.includes("a") || inputs.includes("d")){
                    //if the input is moving at a 45 degree angle, each half of the input will add one half of the square root of 2 (idk if this is correct but it seems to work fine)
                    move_sum[1] += 0.5
                }
                else{ move_sum[1] += 1}
                break

            case "s":
                if(inputs.includes("a") || inputs.includes("d")){
                    move_sum[1] -= 0.5                                //if the input is moving at a 45 degree angle, each half of the input will add one half of the square root of 2 (idk if this is correct but it seems to work fine)
                }
                else{ move_sum[1] -= 1 }
                break

            case "d":
                if(inputs.includes("w") || inputs.includes("s")){
                    move_sum[0] += 0.5                                //if the input is moving at a 45 degree angle, each half of the input will add one half of the square root of 2 (idk if this is correct but it seems to work fine)
                }
                else{ move_sum[0] += 1}
                break

            case "a":
                if(inputs.includes("w") || inputs.includes("s")){
                    move_sum[0] -= 0.5                                //if the input is moving at a 45 degree angle, each half of the input will add one half of the square root of 2 (idk if this is correct but it seems to work fine)
                }
                else{ move_sum[0] -= 1 }
                break
        }     
    }
    if (move_sum[0] != 0 || move_sum[1] != 0) {
        char.movement(move_sum)
    }
}

function ray_cast() {
    for(let i = 0; i < char.amount_rays; i++) {                                                         //shooting rays happens here, loop for every ray to be shot
        let ray_angle = char.fov - ((char.fov*i)/char.amount_rays)-((char.fov/char.amount_rays)/2)-(char.fov/2)+char.angle  //some math to make the rays shoot with correct spacing

        temp_ray = new ray(char.x,char.y,ray_angle);                                                   //ray is created

        let hit_list = [];                                                                              //is used for later, list of all hits the ray could make
        for(let j = 0; j < walls.length; j++) {                                                         //loop for every wall to find which ray collided with
            let hit = temp_ray.cast(walls[j])       
            if (hit != undefined) {                                                                     //if hit lands on a wall, push to hit_list
                hit_list.push([hit,walls[j]])
            }
        }

        let closest_distance = 10000                                                                    //closest distance is used to measure which hit is closest, therefore the closest distance starts with a ridiculously high number
        let closest_hit = [];                                                                           //where the closest hit that is eventually found will be stored
        let closest_wall = new Wall();
        for(let k = 0; k < hit_list.length; k++) {                                                      //is made such that if no hits are made, the loop will be entirely skipped

            let hit_distance = distance(temp_ray.x1,temp_ray.y1,hit_list[k][0][0],hit_list[k][0][1])    //calculate the distance between ray and hit
            if (hit_distance < closest_distance) {                                                      //if the hit is smaller than closeset distance, become new closest distance and save as closest hit
                closest_hit = hit_list[k][0]
                closest_wall = hit_list[k][1]
                closest_distance = hit_distance
            }
        }
        if (closest_hit.length != 0) {                                                                  //only if closest hit exists, use hit as new end position
            temp_ray.x2 = closest_hit[0]
            temp_ray.y2 = closest_hit[1]
            closest_wall.give_color(closest_hit[0],closest_hit[1])
        }

        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(char.x,char.y)

        ctx.lineTo(temp_ray.x2,temp_ray.y2);
        ctx.stroke()
    }
}

function game_loop() {
    time = Date.now()
    
    ctx.clearRect(0,0,innerWidth,innerHeight)   //drawing must happen after clean
    player_movement()
    ray_cast()                                  //has drawing
    renderWalls(walls)                          //has drawing

    //console.log("script took",Date.now()-time,"ms")
    setTimeout(game_loop,1000/60)
}

game_loop()