"use strict";

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();


function process_map(map)
{
    let width = map.width;
    let height = map.height;
    let data = map.map;
    console.log(`map.width = ${width}`);
    console.log(`map.height = ${height}`);
    for (let i = 0; i < height; i++) {
        let line = data[i];
        console.log(`  ${line}`);
    }
}

$.getJSON('data/maps/map0.json', process_map
).done(function () {
    console.log("map0 loaded successfully");
    }
).fail(function () {
    alert("Can't load map0.json");
    console.log("Can't loadmap0.json");
    }
);
