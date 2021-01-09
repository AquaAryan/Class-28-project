class Rock {

constructor(x,y,radius){
    var options={
        isStatic:false,
        Restitution:0,
        friction:1,
        density:1.2
        }

this.body=Bodies.circle(x,y,radius,options)
this.x=x
this.y=y
this.radius=radius
this.image=loadImage("stone.png")
World.add(world,this.body)
}

display(){

var pos=this.body.position
push()
translate(pos.x,pos.y)
fill(180)
imageMode(CENTER)
image(this.image,0,0,this.radius,this.radius)
pop()
}







}