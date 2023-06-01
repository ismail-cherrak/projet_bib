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

