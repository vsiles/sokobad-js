"use strict";

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
const CELL_SIZE = 32;

function draw_cell(x, y, size, color)
{
    let posx = x * size;
    let posy = y * size;
    ctx.beginPath();
    ctx.rect(posx, posy, size, size);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

let map_width;
let map_height;
let map_data;

let player_pos = {
    x: 0,
    y: 0
};

document.addEventListener("keypress", keyPressHandler, false);

function keyPressHandler(e) {
    switch (e.key) {
        case "ArrowDown":
            player_pos.y += 1;
            break;
        case "ArrowUp":
            player_pos.y -= 1;
            break;
        case "ArrowLeft":
            player_pos.x -= 1;
            break;
        case "ArrowRight":
            player_pos.x += 1;
            break;
    }
    // temp
    draw_map();
}

function process_map(map)
{
    map_width = map.width;
    map_height = map.height;
    map_data = map.map;
    for (let j = 0; j < map_height; j++) {
        let line = map_data[j];
        map_data[j] = line;

        for (let i = 0; i < map_width; i++) {
            let cell = line[i];
            if (cell == 's') {
                player_pos.x = i;
                player_pos.y = j;
            }
        }
    }
}

function draw_map()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let j = 0; j < map_height; j++) {
        for (let i = 0; i < map_width; i++) {
            let cell = map_data[j][i];
            let color = "#C0C0C0";
            switch (cell) {
                case '.': color = "#606060"; break;
                case 'b': color = "#663300"; break;
                case 'g': color = "#FFFF33"; break;
                case 'x': color = "#000000"; break;
            }
            draw_cell(i, j, CELL_SIZE, color);
            /* draw player */
            draw_cell(player_pos.x, player_pos.y, CELL_SIZE, "#FF0000");
        }
    }
}


function main_loop(json_data)
{
    process_map(json_data);
    draw_map();
}

$.getJSON('data/maps/map0.json', main_loop
).done(function () {
    console.log("map0 loaded successfully");
    }
).fail(function () {
    alert("Can't load map0.json");
    console.log("Can't loadmap0.json");
    }
);