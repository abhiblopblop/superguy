class Ball {

    constructor(x,y,w,h){
    
    var options = {isStatic: false, density:2, frictionAir: 0.001}
    this.body = Bodies.rectangle(x,y,w,h,options)
    World.add(world, this.body)
    this.w = w, this.h = h
    this.image = loadImage("images/Superhero-01.png")
    }
    
    display(){
    fill("green")
    imageMode(CENTER)
    image(this.image,this.body.position.x, this.body.position.y, this.w*3, this.h*3)
    }
    
    }