function showcycle(){
    var typeSelect= document.getElementById("typeSelect");
    if (typeSelect.value === "Student"){
        document.getElementById("cycle").classList.remove("hiddenn");
        document.getElementById("cycleSelect").classList.remove("hiddenn");
        document.getElementById("cycle").style.animation="show 1s forwards";
        document.getElementById("cycleSelect").style.animation="show 1s forwards";
    
    document.getElementById("password").style.marginTop="690px"
    document.getElementById("passwords").style.marginTop="740px"    
    document.getElementById("email").style.marginTop="550px"
    document.getElementById("emails").style.marginTop="600px"
    }
}
function showCycleType() {
    var cycleSelect = document.getElementById("cycleSelect");
    var cycleTypeDiv = document.getElementById("cycleTypeDiv");
    var cycleTypeSelect = document.getElementById("cycleTypeSelect");
    cycleTypeSelect.innerHTML = "";
    if (cycleSelect.value === "CPI") {
      cycleTypeDiv.classList.remove("hidden");
      cycleTypeSelect.style.animation="show 1s forwards";
      var option1 = document.createElement("option");
      option1.text = "1CPI";
      option1.value = "1CPI";
      cycleTypeSelect.add(option1);
      var option2 = document.createElement("option");
      option2.text = "2CPI";
      option2.value = "2CPI";
      cycleTypeSelect.add(option2);
      
      
    } else if (cycleSelect.value === "CS") {
      cycleTypeDiv.classList.remove("hidden");
      cycleTypeSelect.style.animation="show 1s forwards";
      var option1 = document.createElement("option");
      option1.text = "1CS";
      option1.value = "1CS";
      cycleTypeSelect.add(option1);
      var option2 = document.createElement("option");
      option2.text = "2CS";
      option2.value = "2CS";
      cycleTypeSelect.add(option2);
      var option3 = document.createElement("option");
      option3.text = "3CS";
      option3.value = "3CS";
      cycleTypeSelect.add(option3);
    } else {
      cycleTypeDiv.classList.add("hidden");
    }
  }
  
        

    document.querySelector(".student").onclick = function(){
        document.querySelector(".student").boxShadow="1px 1px 1px rgb(255, 149, 0), -1px -1px 1px rgb(255, 149, 0), -1px 1px 1px rgb(255, 149, 0), 1px -1px 1px rgb(255, 149, 0)";
        document.querySelector(".teacher").boxShadow="none";
    }

    document.querySelector(".teacher").onclick = function(){
        document.querySelector(".teacher").boxShadow="1px 1px 1px rgb(255, 149, 0), -1px -1px 1px rgb(255, 149, 0), -1px 1px 1px rgb(255, 149, 0), 1px -1px 1px rgb(255, 149, 0)";
        document.querySelector(".student").boxShadow="none";
    }
        
        
let regName = /^[a-zA-Z ]{2,30}$/;

let regMail= /^[a-z]{2}\.[a-z]+@esi\-sba\.dz$/;

let errors=[document.getElementById("errorfname"),document.getElementById("errorlname"),document.getElementById("errorcycle"),document.getElementById("erroryear"),document.getElementById("erroremail")];
let err=Array.from(errors);
function hi(){

  
var nom=document.getElementById("names").value;
var lastNom=document.getElementById("lastnames").value;
var mail =document.getElementById("emails").value;
var password=document.getElementById("password").value;



    if (nom==="") {
        errors[0].classList.remove("hide");
        alert("nom");
        return false;
    }

    if (!regName.test(lastNom)) {
        errors[1].classList.remove("hide");
        alert("prenom");
        return false;
    }

    if (!regMail.test(mail)){
        errors[4].classList.remove("hide");
        alert("email");
        return false;
    }

    if(password===""){
      document.getElementById("errorpassword").classList.remove("hide");
      alert("mot de passe");
      return false;
    }
    if (regName.test(nom) && regName.test(lastNom) &&  regMail.test(mail) && password !=="" ){
      alert("hello");
      return true ;
    }

}


function validerForm(){
  var nom=document.getElementById("names").value;
  var lastNom=document.getElementById("lastnames").value;
  var mail =document.getElementById("emails").value;
  var password=document.getElementById("passwords").value;
  
  var regex = /^[a-zA-Z]{2,}$/;

  if (!nom.match(regex)) {
    document.getElementById("errorfname").classList.remove("hide");
     return false;
  }
  //  else{
  //   document.getElementById("errorfname").classList.add("hide");
  //  }
  
   if(!lastNom.match(regex)){
    document.getElementById("errorlname").classList.remove("hide");
     return false;
   }
  //  else{
  //   document.getElementById("errorlname").classList.add("hide");
  //  }

  var regexMail = /^[a-zA-Z]{1,2}\.[a-zA-Z]+@esi-sba\.dz$/;

  if (!mail.match(regexMail)) {
    document.getElementById("erroremail").classList.remove("hide");
    return false;
  }
  // else{
  //   document.getElementById("errormail").classList.add("hide");
  //  }

  if (password===''){
    document.getElementById("errorpassword").classList.remove("hide");
    return false;
  }
  // // else{
  // //   document.getElementById("errorpassword").classList.add("hide");
  // // }
  
  
  alert("Utilisateur ajouté ");
  return true ;
}
