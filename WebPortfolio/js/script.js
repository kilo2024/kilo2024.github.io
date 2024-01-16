/*This is the main javascript */

window.onload=function(){

    var imageNumber=1;

     function changeImage(){
 imageNumber++;

 document.getElementById("bestwork").src="images/"+imageNumber+".png";
 console.log(imageNumber);
 if(imageNumber>=5){
 imageNumber=0;
 }

 }
 window.setInterval(changeImage, 2000);

 }

