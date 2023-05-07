let mod= [document.getElementById("mod1cpi"),document.getElementById("mod2cpi"),document.getElementById("mod3cpi"),document.getElementById("mod4cpi"),document.getElementById("mod5cpi"),];
let modcpi=Array.from(mod);
let year=document.getElementsByClassName("annees");
let tab=[0,0,0,0,0];
let years=Array.from(year);
let j=0;

//when you click on years they appear
years.forEach(function(ele){
    ele.addEventListener("click" , function(){
    tab[years.indexOf(ele)]++;
    if (tab[years.indexOf(ele)] % 2 === 0){
        modcpi.forEach(function(e){
            e.classList.add("hide");
        })
    }
    else{
        modcpi.forEach(function(e){
            e.classList.add("hide");
        })
        modcpi[years.indexOf(ele)].classList.remove("hide");
    }
      
        
    })
});
let i=1;

//navbar
document.getElementById("show").addEventListener("click",function(){
    i++;
    if(i % 2 ===0){document.getElementById("navbar").classList.remove("hide");}
    else{document.getElementById("navbar").classList.add("hide");};
    
   
}); 

//book state and function

let etat=0;//availabel=0;notavailable=1;waiting=2;ready to take=3;taken=4

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


a(etat); 


//rating 
let booksRating =0.0;



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
putRating(4);

let booksNumber=7;
let sl=document.getElementById("scroll_left");
let sr=document.getElementById("scroll_right");


    if (booksNumber <=4){
        sl.style.opacity=0;
        sr.style.opacity=0;
    }
    else{
        sl.style.opacity=0;
    }

   let nn=booksNumber; 



sr.onclick=function(){
    booksNumber-=4;
    
    if (booksNumber <=4){
        sr.style.opacity=0;
        sl.style.opacity=1;
    }
    else{
        sl.style.opacity=1;
    }
}
sl.onclick=function(){
    booksNumber+=4;
    if (booksNumber <nn){
        sl.style.opacity=1;
        sr.style.opacity=1;
    }
    else{
        sr.style.opacity=1;
        sl.style.opacity=0;
    }
}

    