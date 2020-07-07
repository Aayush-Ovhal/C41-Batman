class BM{
    constructor(x,y,r1,r2){

      var options ={
        'isStatic':true
      }
      this.body = Bodies.rectangle(100,350,20,50,options);
      this.width = r1;
      this.height = r2;
      this.image = loadImage("batman.png");
      World.add(world,this.body);
    }

    display(){
        this.pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,100,350,this.width,this.height);
        pop();

    }
}