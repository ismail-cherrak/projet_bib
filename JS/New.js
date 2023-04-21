let nom=document.getElementById("names");
let lastNom=document.getElementById("lastnames");
let mail =document.getElementById("emails");

let btncpi=document.getElementById("cpi");
let btncs=document.getElementById("cs");

let cpiyears=[document.getElementById("year1"),document.getElementById("year2")];
let csyears=[document.getElementById("year3"),document.getElementById("year4"),document.getElementById("year5")];
let submit=document.getElementById("sub");


let i=0;


cpiyears.forEach(function(e){
    e.style.opacity=0;
    e.onclick=function(){
        i++;
    }
})
csyears.forEach(function(e){
    e.style.opacity=0;
    e.onclick=function(){
        i++;
    }
})


btncpi.onclick=function(){
    cpiyears.forEach(function(e){
        e.style.opacity=1;
    }) 
    csyears.forEach(function(e){
        e.style.opacity=0;
    })
}

btncs.onclick=function(){
    cpiyears.forEach(function(e){
        e.style.opacity=0;
    }) 
    csyears.forEach(function(e){
        e.style.opacity=1;
    })
}

let regName = /^[a-zA-Z ]{2,30}$/;

let regMail= /^[a-z]{2}\.[a-z]+@esi\-sba\.dz$/;

let errors=[document.getElementById("errorfname"),document.getElementById("errorlname"),document.getElementById("errorcycle"),document.getElementById("erroryear"),document.getElementById("erroremail")];


submit.onclick=function(){
    if (!regName.test(nom.value)) {
        errors[0].classList.remove("hide");
    }

    if (!regName.test(lastNom.value)) {
        errors[1].classList.remove("hide");
    }
    if (i==0){
        errors[3].classList.remove("hide");
    }

    if (!regMail.test(mail.value)){
        errors[4].classList.remove("hide");
    }


}