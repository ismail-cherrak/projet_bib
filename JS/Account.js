var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };
let username="Username";
let useryear="Useryear";
// had les variables anis khaldi 7ot fihom name w year bsh ybanou 
document.getElementById("fullname").innerHTML=username;
document.getElementById("useryear").innerHTML=useryear + " Student";
let booksRating =4.0;
let availabilityOptions=[2,3] //orderded book are waiting or ready to take
let availability=availabilityOptions[0];


let booksordered=[document.getElementById("bookone"),document.getElementById("booktwo"),document.getElementById("bookthree"),document.getElementById("bookfour"),document.getElementById("bookfive")]




booksordered.forEach(function(ele){
    
})

let nbreBooksCommande;
function afficheCommande(n){
for (let i = 0; i < n; i++) {
    booksordered[i].innerHTML=`
   
 `  
}    
for (let j = 0; j < n; j++) {
    booksordered[j].onclick=function(){
        location.href="../HTML/Book Title.html";
    }

    for (let k = n; k < 5; k++) {
        booksordered[k].onclick=function(){
            location.href="../HTML/Main-menu.html";
        }
    
    
}
}
}
afficheCommande(nbreBooksCommande);



function a(n){
    switch(n){
        case 0:
            document.getElementById("state").innerHTML="Available";
            document.getElementById("state").style.color="green";
            document.getElementById("state").style.textShadow="0px 0px 4px green";
            document.getElementById("ifelse").style.cursor="pointer";
            document.getElementById("ifelse").innerHTML="order";
            document.getElementById("ifelse").style.color="aqua";
            document.getElementById("ifelse").onclick=function(){
               document.querySelector("body").style.opacity=0.8;
               document.getElementById("sur").classList.remove("hide");
               document.getElementById("outone").onclick=function(){
                etat=2;
                a(2);
                document.getElementById("sur").classList.add("hide");
                document.querySelector("body").style.opacity=1;
               }
               document.getElementById("outtwo").onclick=function(){
                document.getElementById("sur").classList.add("hide");
                document.querySelector("body").style.opacity=1;
               }
            }
            break;
        case 1:
                document.getElementById("state").innerHTML="Not Available";
                document.getElementById("state").style.color="red";
                document.getElementById("ifelse").style.opacity="0.5";
        break;
        case 2:
            document.getElementById("state").innerHTML="Waiting";
            document.getElementById("state").style.color="yellow";
            document.getElementById("ifelse").innerHTML="Cancel";
            document.getElementById("ifelse").style.color="red";
            document.getElementById("ifelse").style.cursor="pointer";
            document.getElementById("ifelse").onclick=function(){
                document.querySelector("body").style.opacity=0.8;
                document.getElementById("sur").classList.remove("hide");
                document.getElementById("outone").onclick=function(){
                 etat=0;
                 a(0);
                 document.getElementById("sur").classList.add("hide");
                 document.querySelector("body").style.opacity=1;
                }
                document.getElementById("outtwo").onclick=function(){
                 document.getElementById("sur").classList.add("hide");
                 document.querySelector("body").style.opacity=1;
                }
             }
             break;
        case 3:
            document.getElementById("state").innerHTML="Ready to take";
            document.getElementById("state").style.color="blue";
            document.getElementById("ifelse").innerHTML="Cancel";
            document.getElementById("ifelse").style.color="red";
            document.getElementById("ifelse").style.cursor="pointer";
            document.getElementById("ifelse").onclick=function(){
                document.querySelector("body").style.opacity=0.8;
                document.getElementById("sur").classList.remove("hide");
                document.getElementById("outone").onclick=function(){
                 etat=0;
                 a(0);
                 document.getElementById("sur").classList.add("hide");
                 document.querySelector("body").style.opacity=1;
                }
                document.getElementById("outtwo").onclick=function(){
                 document.getElementById("sur").classList.add("hide");
                 document.querySelector("body").style.opacity=1;
                }
             }
             break;
        case 4:
            //time left
             document.getElementById("yesno").style.opacity="0";

            
}
}
a(availability); 


//rating 



function putRating(r){
    
    switch(Math.round(r)){
        case 0 :
            document.getElementById("round").style.marginLeft="00px";
            document.getElementById("the_average_rating").innerHTML=Math.round(r); 
        break;
        case 1 :
            document.getElementById("round").style.marginLeft="12px";
            document.getElementById("the_average_rating").innerHTML=Math.round(r);
        break;
        case 2 :
            document.getElementById("round").style.marginLeft="24px";
            document.getElementById("the_average_rating").innerHTML=Math.round(r);
        break;
        case 3 :
            document.getElementById("round").style.marginLeft="36px";
            document.getElementById("the_average_rating").innerHTML=Math.round(r);
        break;
        case 4 :
            document.getElementById("round").style.marginLeft="48px";
            document.getElementById("the_average_rating").innerHTML=Math.round(r);
        break;
        case 5 :
            document.getElementById("round").style.marginLeft="60px";
            document.getElementById("the_average_rating").innerHTML=Math.round(r);
        break;
        
    }
    
}
