var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var images = [];
images.length = 10;


for(var i = 1 ; i < images.length ; i++){
    images[i] = new Image();
    images[i].src = 'Run (' + i.toString() + ').png';
}
var i = 1;
setInterval(function(){
    i++;
    if( i >= 10){
        i = 1;
    }
    c.drawImage(images[i],300,350,200,200);
    c.clearRect(300,350,200,200);
    c.drawImage(images[i],300,350,200,200);
},100)
