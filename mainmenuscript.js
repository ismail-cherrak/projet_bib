document.getElementById("show").onclick= function(){
    if(document.getElementById("navbar").style.height=="0vh"){
        document.getElementById("navbar").style.height="40vh";
        document.getElementById("mod1cpi").style.height="0px"
        document.getElementById("mod2cpi").style.height="0px"
        document.getElementById("mod3cpi").style.height="0px"
        document.getElementById("mod4cpi").style.height="0px"
        document.getElementById("mod5cpi").style.height="0px";
    }
    else{
        document.getElementById("navbar").style.height="0vh";
    }
}
document.getElementById("1cpi").onclick= function(){
    if(document.getElementById("mod1cpi").style.height=="0px"){
        document.getElementById("mod1cpi").style.height="80px";
        document.getElementById("navbar").style.height="0vh";
        document.getElementById("mod2cpi").style.height="0px";
        document.getElementById("mod3cpi").style.height="0px";
        document.getElementById("mod4cpi").style.height="0px";
        document.getElementById("mod5cpi").style.height="0px";
    }
    else{
        document.getElementById("mod1cpi").style.height="0px";
    }
}
document.getElementById("2cpi").onclick= function(){
    if(document.getElementById("mod2cpi").style.height=="0px"){
        document.getElementById("mod2cpi").style.height="80px"
        document.getElementById("navbar").style.height="0vh"
        document.getElementById("mod1cpi").style.height="0px"
        document.getElementById("mod3cpi").style.height="0px"
        document.getElementById("mod4cpi").style.height="0px"
        document.getElementById("mod5cpi").style.height="0px"
    }
    else{
        document.getElementById("mod2cpi").style.height="0px";
    }
}
document.getElementById("1cs").onclick= function(){
    if(document.getElementById("mod3cpi").style.height=="0px"){
        document.getElementById("mod3cpi").style.height="80px"
        document.getElementById("navbar").style.height="0vh"
        document.getElementById("mod1cpi").style.height="0px"
        document.getElementById("mod2cpi").style.height="0px"
        document.getElementById("mod4cpi").style.height="0px"
        document.getElementById("mod5cpi").style.height="0px"
    }
    else{
        document.getElementById("mod3cpi").style.height="0px";
    }
}
document.getElementById("2cs").onclick= function(){
    if(document.getElementById("mod4cpi").style.height=="0px"){
        document.getElementById("mod4cpi").style.height="80px"
        document.getElementById("navbar").style.height="0vh"
        document.getElementById("mod1cpi").style.height="0px"
        document.getElementById("mod2cpi").style.height="0px"
        document.getElementById("mod3cpi").style.height="0px"
        document.getElementById("mod5cpi").style.height="0px"
    }
    else{
        document.getElementById("mod4cpi").style.height="0px";
    }
}
document.getElementById("3cs").onclick= function(){
    if(document.getElementById("mod5cpi").style.height=="0px"){
        document.getElementById("mod5cpi").style.height="35px"
        document.getElementById("navbar").style.height="0vh"
        document.getElementById("mod1cpi").style.height="0px"
        document.getElementById("mod2cpi").style.height="0px"
        document.getElementById("mod3cpi").style.height="0px"
        document.getElementById("mod4cpi").style.height="0px"
    }
    else{
        document.getElementById("mod5cpi").style.height="0px";
    }
}

document.getElementById("yesnoone").onclick= function(){
    if(document.getElementById("ifelseone").innerHTML=="Order"){
        document.getElementById("sur").style.height="250px";
        document.getElementById("bod").style.opacity="0.6";
        document.getElementById("yes").onclick= function(){
            document.getElementById("sur").style.height="0px";
            document.getElementById("ifelseone").innerHTML="Cancel <br> Order";
            document.getElementById("yesnoone").style.background="red";
            document.getElementById("yesnoone").style.height="50px";
            document.getElementById("bod").style.opacity="1";
        }
        document.getElementById("no").onclick= function(){
            document.getElementById("sur").style.height="0px";
            document.getElementById("bod").style.opacity="1";
        }
    }
    else{
        document.getElementById("ifelseone").innerHTML="Order";
        document.getElementById("yesnoone").style.background="rgb(24, 24, 24)"
        document.getElementById("yesnoone").style.height="40px";
        document.getElementById("bod").style.opacity="1";
    }
}


document.getElementById("yesnotwo").onclick= function(){
    if(document.getElementById("ifelsetwo").innerHTML=="Order"){
        document.getElementById("sur").style.height="250px";
        document.getElementById("bod").style.opacity="0.6";
        document.getElementById("yes").onclick= function(){
            document.getElementById("sur").style.height="0px";
            document.getElementById("ifelsetwo").innerHTML="Cancel <br> Order";
            document.getElementById("yesnotwo").style.background="red";
            document.getElementById("yesnotwo").style.height="50px";
            document.getElementById("bod").style.opacity="1";
        }
        document.getElementById("no").onclick= function(){
            document.getElementById("sur").style.height="0px";
            document.getElementById("bod").style.opacity="1";
        }
    }
    else{
        document.getElementById("ifelsetwo").innerHTML="Order";
        document.getElementById("yesnotwo").style.background="rgb(24, 24, 24)"
        document.getElementById("yesnotwo").style.height="40px";
        document.getElementById("bod").style.opacity="1";
    }
}




document.getElementById("yesnothree").onclick= function(){
    if(document.getElementById("ifelsethree").innerHTML=="Order"){
        document.getElementById("sur").style.height="250px";
        document.getElementById("bod").style.opacity="0.6";
        document.getElementById("yes").onclick= function(){
            document.getElementById("sur").style.height="0px";
            document.getElementById("ifelsethree").innerHTML="Cancel <br> Order";
            document.getElementById("yesnothree").style.background="red";
            document.getElementById("yesnothree").style.height="50px";
            document.getElementById("bod").style.opacity="1";
        }
        document.getElementById("no").onclick= function(){
            document.getElementById("sur").style.height="0px";
            document.getElementById("bod").style.opacity="1";
        }
    }
    else{
        document.getElementById("ifelsethree").innerHTML="Order";
        document.getElementById("yesnothree").style.background="rgb(24, 24, 24)"
        document.getElementById("yesnothree").style.height="40px";
        document.getElementById("bod").style.opacity="1";
    }
}