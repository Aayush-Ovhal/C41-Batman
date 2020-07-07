class Drop{
    constructor(x,y,width,height){
     var options = {
        'restitution':0.5,
        'friction':0.1,
        'density':0.7
     }

     this.bottom = false;

     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     World.add(world,this.body);
    }

    update(){
       this.pos = this.body.position;
       if(this.pos.y >= 400){
          this.bottom = true;
       }

       if(this.bottom){
          this.pos.y = random(0,400);;
       }
    }

    display(){
       this.pos = this.body.position;
       fill(0,0,255);
       ellipse(this.pos.x,this.pos.y,this.width,this.height);
    }
}