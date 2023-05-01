let mod= [document.getElementById("mod1cpi"),document.getElementById("mod2cpi"),document.getElementById("mod3cpi"),document.getElementById("mod4cpi"),document.getElementById("mod5cpi"),];
let modcpi=Array.from(mod);
let tab=[0,0,0,0,0];
let year=document.getElementsByClassName("annees");
let years=Array.from(year);


// years.forEach(function(ele){
//     ele.addEventListener("mouseenter" , function(){
//         modcpi.forEach(function(e){
//             e.classList.add("hide");
//         })
//         modcpi[years.indexOf(ele)].classList.remove("hide");  
//     })
    
// });

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
document.getElementById("show").addEventListener("click",function(){
    i++;
    if(i % 2 ===0){document.getElementById("navbar").classList.remove("hide");}
    else{document.getElementById("navbar").classList.add("hide");};
    
   
}); 


let plus=[document.getElementsByClassName("bookone")[0],document.getElementsByClassName("booktwo")[0],document.getElementsByClassName("bookthree")[0],document.getElementsByClassName("bookfour")[0],document.getElementsByClassName("bookfive")[0]]
let pluses=Array.from(plus);
pluses.forEach(element => {
    element.onclick=function(){
        
    }
});

