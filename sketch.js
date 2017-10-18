function setup() {
    regular_bag = loadImage("./assets/skittles-regular-bag.png");
    large_bag = loadImage("./assets/skittles-family-size.jpeg");
}

function draw() {
    //this function is called 60 times per second
    //ellipse(x,y,width,height);
    ellipse(30, 30, 50, 50);
    image(regular_bag, 5, 5);
    image(large_bag, , 415, 5);
}
