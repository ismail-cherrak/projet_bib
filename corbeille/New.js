let nom=document.getElementById("names");
let lastNom=document.getElementById("lastnames");
let mail =document.getElementById("emails");

let btncpi=document.getElementById("cpi");
let btncs=document.getElementById("cs");

let cpiyears=[document.getElementById("year1"),document.getElementById("year2")];
let csyears=[document.getElementById("year3"),document.getElementById("year4"),document.getElementById("year5")];
let myYears=[document.getElementById("year1"),document.getElementById("year2"),document.getElementById("year3"),document.getElementById("year4"),document.getElementById("year5")];
let submit=document.getElementById("sub");
let i=0;
document.getElementById("email").style.display = 'none';
document.getElementById("cpi").onclick= function(){

    //change the cpi button background to yellow
    document.getElementById("changebgcpi").style.animation= "changetoyellow";
     document.getElementById("changebgcpi").style.animationDuration= "0.3s";
     document.getElementById("changebgcpi").style.animationFillMode="forwards";
    //change the cs button gb back to brown
    document.getElementById("changebgcs").style.animation="changetobrown";
    document.getElementById("changebgcs").style.animationDuration= "0.3s";
    document.getElementById("changebgcs").style.animationFillMode="forwards";
    //align the email to the bottom 
    document.getElementById("email").style.display = 'block';
    document.getElementById("email").style.animation="emailslide";
    document.getElementById("email").style.animationDuration="1s";
    document.getElementById("email").style.animationFillMode="forwards";
    document.getElementById("emails").style.animation="emailsslide";
    document.getElementById("emails").style.animationDuration="1s";
    document.getElementById("emails").style.animationFillMode="forwards";
    //show the cpi years:

    //first year:
    document.getElementById("year1").style.animation="firstyear";
    document.getElementById("year1").style.animationDuration="1s";
    document.getElementById("year1").style.animationFillMode="forwards";

    //second year:
    document.getElementById("year2").style.animation="secondyear";
    document.getElementById("year2").style.animationDuration="1s";
    document.getElementById("year2").style.animationFillMode="forwards";
    //third year
    document.getElementById("year3").style.animation="reversethirdyear";
    document.getElementById("year3").style.animationDuration="1s";
    document.getElementById("year3").style.animationFillMode="forwards";

    //fourth year
    document.getElementById("year4").style.animation="reversefourthyear";
    document.getElementById("year4").style.animationDuration="1s";
    document.getElementById("year4").style.animationFillMode="forwards";

     //fifth year
    document.getElementById("year5").style.animation="reversefifthyear";
    document.getElementById("year5").style.animationDuration="1s";
    document.getElementById("year5").style.animationFillMode="forwards";
}
    
    
    
 // when I click on a year it adds one and changes the style
   myYears.forEach(function(e){
    e.onclick= function(){
        e.style.boxShadow="1px 1px 2px yellow, -1px -1px 2px yellow, -1px 1px 2px yellow, 1px -1px 2px yellow";
        e.style.boxShadow="none";
        i++;
        alert(i);
    }
   })


   
    document.getElementById("cs").onclick= function(){

        //change the cpi button background to yellow
        document.getElementById("changebgcs").style.animation= "changetoyellow";
         document.getElementById("changebgcs").style.animationDuration= "0.3s";
         document.getElementById("changebgcs").style.animationFillMode="forwards";
        //change the cs button gb back to brown
        document.getElementById("changebgcpi").style.animation="changetobrown";
        document.getElementById("changebgcpi").style.animationDuration= "0.3s";
        document.getElementById("changebgcpi").style.animationFillMode="forwards";
        //align the email to the bottom 
        document.getElementById("email").style.display = 'block';
        document.getElementById("email").style.animation="emailslide";
        document.getElementById("email").style.animationDuration="1s";
        document.getElementById("email").style.animationFillMode="forwards";
        document.getElementById("emails").style.animation="emailsslide";
        document.getElementById("emails").style.animationDuration="1s";
        document.getElementById("emails").style.animationFillMode="forwards";
        //show the cpi years:
    
        //first year:
        document.getElementById("year1").style.animation="reversefirstyear";
        document.getElementById("year1").style.animationDuration="1s";
        document.getElementById("year1").style.animationFillMode="forwards";
    
        //second year:
        document.getElementById("year2").style.animation="reversesecondyear";
        document.getElementById("year2").style.animationDuration="1s";
        document.getElementById("year2").style.animationFillMode="forwards";
        //third year
        document.getElementById("year3").style.animation="thirdyear";
        document.getElementById("year3").style.animationDuration="1s";
        document.getElementById("year3").style.animationFillMode="forwards";
    
        //fourth year
        document.getElementById("year4").style.animation="fourthyear";
        document.getElementById("year4").style.animationDuration="1s";
        document.getElementById("year4").style.animationFillMode="forwards";
    
         //fifth year
        document.getElementById("year5").style.animation="fifthyear";
        document.getElementById("year5").style.animationDuration="1s";
        document.getElementById("year5").style.animationFillMode="forwards";   
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

    if ((regName.test(nom.value))&&(regName.test(lastNom.value))&&(i==0)&&(regMail.test(mail.value))){
        errors.forEach(function(e){
            e.classList.add("hide");
        })
    }


}