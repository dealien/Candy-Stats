function setup() {
    var candy_count = 20;
    createCanvas(1000, 1000);
    regular_bag = loadImage("https://raw.githubusercontent.com/dealien/Candy-Stats/master/assets/skittles-regular-bag.png");
    large_bag = loadImage("https://raw.githubusercontent.com/dealien/Candy-Stats/master/assets/skittles-family-size.jpeg");
    for (i = 0; i < candy_count; i++) {
        x = Math.floor(Math.random() * 800) + 1
        y = Math.floor(Math.random() * 350) + 251
        ellipse(x, y, 50);
    }
}

function draw() {
    //this function is called 60 times per second
    image(regular_bag, 5, 5, 200, 160);
    image(large_bag, 215, 5, 200, 200);

}
