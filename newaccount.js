document.getElementById("cpi").onclick= function(){
    //change the cpi button background to aqua
    document.getElementById("changebgcpi").style.animation= "changetoaqua";
    document.getElementById("changebgcpi").style.animationDuration= "0.3s";
    document.getElementById("changebgcpi").style.animationFillMode="forwards";
    //change the cs button gb back to blue
    document.getElementById("changebgcs").style.animation="changetoblue";
    document.getElementById("changebgcs").style.animationDuration= "0.3s";
    document.getElementById("changebgcs").style.animationFillMode="forwards";
    //align the email to the bottom 
    document.getElementById("email").style.marginTop="450px";
    document.getElementById("emails").style.marginTop="500px";
    //show the cpi years
    document.getElementById("optcpi").style.animation="showyearopts";
    document.getElementById("optcpi").style.animationDuration="1s";
    document.getElementById("optcpi").style.animationFillMode="forwards";
    //hide the cs years
    document.getElementById("optcs").style.animation="hideyearopts";
    document.getElementById("optcs").style.animationDuration="1s";
    document.getElementById("optcs").style.animationFillMode="forwards";

    //change the first/second year box shadow when clicking on it (the other option will go abck to normal)
    document.getElementById("year1").onclick= function(){
        document.getElementById("year1").style.boxShadow="1px 1px 2px aqua, -1px -1px 2px aqua, -1px 1px 2px aqua, 1px -1px 2px aqua";
        document.getElementById("year2").style.boxShadow="none";
    }
    document.getElementById("year2").onclick= function(){
        document.getElementById("year2").style.boxShadow="1px 1px 2px aqua, -1px -1px 2px aqua, -1px 1px 2px aqua, 1px -1px 2px aqua";
        document.getElementById("year1").style.boxShadow="none";
    }

    document.getElementById("year3").style.boxShadow="none";
    document.getElementById("year4").style.boxShadow="none";
    document.getElementById("year5").style.boxShadow="none";
}

// same thing to the cs button 
document.getElementById("cs").onclick = function(){
    document.getElementById("changebgcs").style.animation= "changetoaqua";
    document.getElementById("changebgcs").style.animationDuration= "0.3s";
    document.getElementById("changebgcs").style.animationFillMode="forwards";
    document.getElementById("changebgcpi").style.animation="changetoblue";
    document.getElementById("changebgcpi").style.animationDuration= "0.3s";
    document.getElementById("email").style.marginTop="450px";
    document.getElementById("emails").style.marginTop="500px";
    document.getElementById("changebgcpi").style.animationFillMode="forwards";
    document.getElementById("optcpi").style.animation="hideyearopts";
    document.getElementById("optcpi").style.animationDuration="1s";
    document.getElementById("optcpi").style.animationFillMode="forwards";
    document.getElementById("optcs").style.animation="showyearopts";
    document.getElementById("optcs").style.animationDuration="1s";
    document.getElementById("optcs").style.animationFillMode="forwards";

    document.getElementById("year3").onclick= function(){
        document.getElementById("year3").style.boxShadow="1px 1px 2px aqua, -1px -1px 2px aqua, -1px 1px 2px aqua, 1px -1px 2px aqua";
        document.getElementById("year4").style.boxShadow="none";
        document.getElementById("year5").style.boxShadow="none";
    }
    document.getElementById("year4").onclick= function(){
        document.getElementById("year4").style.boxShadow="1px 1px 2px aqua, -1px -1px 2px aqua, -1px 1px 2px aqua, 1px -1px 2px aqua";
        document.getElementById("year3").style.boxShadow="none";
        document.getElementById("year5").style.boxShadow="none";
    }
    document.getElementById("year5").onclick= function(){
        document.getElementById("year5").style.boxShadow="1px 1px 2px aqua, -1px -1px 2px aqua, -1px 1px 2px aqua, 1px -1px 2px aqua";
        document.getElementById("year3").style.boxShadow="none";
        document.getElementById("year4").style.boxShadow="none";
    }

    document.getElementById("year1").style.boxShadow="none";
    document.getElementById("year2").style.boxShadow="none";
}
const f=document.getElementById("formulaire");
function verifnom(s){
    return ((!/[^a-zA-Z]/.test(s))&&(s!="")&&(s.length<20)&&(2<s.length))
}
function verifmail(s){
    let regx=  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regx.test(s);
}
const nom=document.getElementsByClassName('names')[0];
const prenom=document.getElementsByClassName('lastnames')[0];
let i;
let mail =document.getElementById('emails');
f.addEventListener('submit',function(e){
    i=0;
    if(!verifnom(nom.value)){
        alert("nom invalide");
        i++;
    }
    if(!verifnom(prenom.value)){
        alert("prenom invalide");
        i++;
    }
    if(!verifmail(mail.value)){
        alert("mail invalide");
        i++;
    }
    
if (i!=0){
    e.preventDefault();
}
})