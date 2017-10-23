function setup() {
    createCanvas(1000, 1000);
    regular_bag = loadImage("https://raw.githubusercontent.com/dealien/Candy-Stats/master/assets/skittles-regular-bag.png");
    large_bag = loadImage("https://raw.githubusercontent.com/dealien/Candy-Stats/master/assets/skittles-family-size.jpeg");
    frameRate(15);

}

function draw() {
    image(regular_bag, 5, 5, 200, 160);
    image(large_bag, 215, 5, 200, 200);
    skittles_gen()
}

function skittles_gen() {
    var candy_count = 10;
    var green = color(140, 196, 94)
    var red = color(196, 68, 68)
    var yellow = color(255, 251, 15)
    var orange = color(255, 170, 2)
    var purple = color(90, 40, 112)

    for (i = 0; i < candy_count; i++) {
        x = Math.floor(Math.random() * 800) + 30;
        y = Math.floor(Math.random() * 350) + 250;

        chance = Math.random();
        if (chance < 0.2459016393) {
            fill(purple)
        } else if (chance < 0.4098360656) {
            fill(orange)
        } else if (chance < 0.6721311475) {
            fill(red)
        } else if (chance < 0.8524590164) {
            fill(green)
        } else {
            fill(yellow)
        }

        ellipse(x, y, 50);
        fill(255, 255, 255);
        textSize(32);
        text("S", x - 11, y + 11);
    }
}
