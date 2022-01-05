var canvas= new fabric.Canvas('myCanvas');

block_image_width=30;
block_image_height=30;

playerx=10;
playery=10;

var playerobject="";
var block_image_object="";

function playerupdate()
{
fabric.Image.fromURL("player.png", function(Img)

{
playerobject=Img;

playerobject.scaleToWidth(150);
playerobject.scaleToHeight(140);
playerobject.set({
    top:playery,
    left:playerx
});

canvas.add(playerobject);

});

}
