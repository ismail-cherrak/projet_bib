let mod= [document.getElementById("mod1cpi"),document.getElementById("mod2cpi"),document.getElementById("mod3cpi"),document.getElementById("mod4cpi"),document.getElementById("mod5cpi"),];
let modcpi=Array.from(mod);
let year=document.getElementsByClassName("annees");
let years=Array.from(year);

years.forEach(function(ele){
    ele.addEventListener("mouseover" , function(){
        modcpi.forEach(function(e){
            e.classList.add("hide");
        })
        modcpi[years.indexOf(ele)].classList.remove("hide");  
    })
});
let i=1;
document.getElementById("show").addEventListener("click",function(){
    i++;
    if(i % 2 ===0){document.getElementById("navbar").classList.remove("hide");}
    else{document.getElementById("navbar").classList.add("hide");};
    
   
}); 