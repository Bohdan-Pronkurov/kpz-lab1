let x;
let y;

let xspeed;
let yspeed;

let item;

let r, g, b;

function preload() {
    item = loadImage("frame.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    x = random(width);
    y = random(height);
    xspeed = 5;
    yspeed = 5;
    pickColor();
}

function pickColor() {
    r = random(100, 256);
    g = random(100, 256);
    b = random(100, 256);

}

function draw() {
    background(100);
    tint(r, g, b);
    image(item, x, y);


    x = x + xspeed;
    y = y + yspeed;

    if (x + item.width >= width) {
        xspeed = -xspeed;
        x = width - item.width;
        pickColor();
    } else if (x <= 0) {
        xspeed = -xspeed;
        x = 0;
        pickColor();
    }

    if (y + item.height >= height) {
        yspeed = -yspeed;
        y = height - item.height;
        pickColor();
    } else if (y <= 0) {
        yspeed = -yspeed;
        y = 0;
        pickColor();
    }
}
