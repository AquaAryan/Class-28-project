class Tree{

constructor(x,y){

this.x=x
this.y=y
 this.height=600
this.width=450
this.thickness=100
this.bottombody=Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true})

this.leftbody=Bodies.rectangle(0,this.y-this.height/2,this.thickness,this.height,{isStatic:true})

this.rightbody=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true})

World.add(world,this.bottombody)

World.add(world,this.rightbody)

World.add(world,this.leftbody)

this.image=loadImage("tree.png")
}


display(){
var posbottom=this.bottombody.position
push()
fill(255)
translate(posbottom.x,posbottom.y+10)
imageMode(CENTER)
image(this.image,0,-this.height/2+120,300,500)
pop()
}

}





