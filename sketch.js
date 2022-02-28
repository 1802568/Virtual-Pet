var database
var dog
var dogimg
var dogimg2
var food;
var foodStock;
function preload()
{
	dogimg=loadImage("images/dogimg.png")
  dogimg2=loadImage("images/dogimg1.png")
}

function setup() {
	createCanvas(800, 800);
  
  database=firebase.database()
  dog=createSprite(400,500,10,10)
  dog.addImage("dogimg",dogimg)
  dog.scale=0.3
  food = database.ref('Food').on("value",readStock)

}


function draw() {  
background("green")
text("foodremaining"+foodStock,300,250)
text("Press up to feed doge milk",300,50)
  if (keyWentDown("UP_ARROW")){
writeStock(foodStock);
dog.addImage("dogimg2",dogimg2)
  }
drawSprites();
  


}
function readStock(data){
  foodStock=data.val()

}
function writeStock(x){

if (x<=0){
x=30
}
else{
  x=x-1
}
database.ref('/').update({
  Food:x
})

}
