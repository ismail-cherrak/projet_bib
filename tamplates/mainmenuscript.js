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



/*the order code is unique for each book, depending on its status (available or not) and shows the "etes vous sur" bar*/


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


document.getElementById("yesnofour").onclick= function(){
    if(document.getElementById("ifelsefour").innerHTML=="Order"){
        document.getElementById("sur").style.height="250px";
        document.getElementById("bod").style.opacity="0.6";
        document.getElementById("yes").onclick= function(){
            document.getElementById("sur").style.height="0px";
            document.getElementById("ifelsefour").innerHTML="Cancel <br> Order";
            document.getElementById("yesnofour").style.background="red";
            document.getElementById("yesnofour").style.height="50px";
            document.getElementById("bod").style.opacity="1";
        }
        document.getElementById("no").onclick= function(){
            document.getElementById("sur").style.height="0px";
            document.getElementById("bod").style.opacity="1";
        }
    }
    else{
        document.getElementById("ifelsefour").innerHTML="Order";
        document.getElementById("yesnofour").style.background="rgb(24, 24, 24)"
        document.getElementById("yesnofour").style.height="40px";
        document.getElementById("bod").style.opacity="1";
    }
}

/* rating phase*/

if(document.getElementById("the_average_ratingone").innerHTML=="1"){
    document.getElementById("barone").style.width="20px";}

    else if(document.getElementById("the_average_ratingone").innerHTML=="2"){
        document.getElementById("barone").style.width="40px";
    }

    else if(document.getElementById("the_average_ratingone").innerHTML=="3"){
        document.getElementById("barone").style.width="60px";
    }   

     else if(document.getElementById("the_average_ratingone").innerHTML=="4"){
        document.getElementById("barone").style.width="80px";
    }   

     else if(document.getElementById("the_average_ratingone").innerHTML=="5"){
        document.getElementById("barone").style.width="100px";
    }
    else{
        document.getElementById("barone").style.width="0px";
    }


    if(document.getElementById("the_average_ratingtwo").innerHTML=="1"){
        document.getElementById("bartwo").style.width="20px";}
    
        else if(document.getElementById("the_average_ratingtwo").innerHTML=="2"){
            document.getElementById("bartwo").style.width="40px";
        }
    
        else if(document.getElementById("the_average_ratingtwo").innerHTML=="3"){
            document.getElementById("bartwo").style.width="60px";
        }   
    
         else if(document.getElementById("the_average_ratingtwo").innerHTML=="4"){
            document.getElementById("bartwo").style.width="80px";
        }   
    
         else if(document.getElementById("the_average_ratingtwo").innerHTML=="5"){
            document.getElementById("bartwo").style.width="100px";
        }
        else{
            document.getElementById("bartwo").style.width="0px";
        }



        if(document.getElementById("the_average_ratingthree").innerHTML=="1"){
            document.getElementById("barthree").style.width="20px";}
        
            else if(document.getElementById("the_average_ratingthree").innerHTML=="2"){
                document.getElementById("barthree").style.width="40px";
            }
        
            else if(document.getElementById("the_average_ratingthree").innerHTML=="3"){
                document.getElementById("barthree").style.width="60px";
            }   
        
             else if(document.getElementById("the_average_ratingthree").innerHTML=="4"){
                document.getElementById("barthree").style.width="80px";
            }   
        
             else if(document.getElementById("the_average_ratingthree").innerHTML=="5"){
                document.getElementById("barthree").style.width="100px";
            }
            else{
                document.getElementById("barthree").style.width="0px";
            }


            if(document.getElementById("the_average_ratingfour").innerHTML=="1"){
                document.getElementById("barfour").style.width="20px";}
            
                else if(document.getElementById("the_average_ratingfour").innerHTML=="2"){
                    document.getElementById("barfour").style.width="40px";
                }
            
                else if(document.getElementById("the_average_ratingfour").innerHTML=="3"){
                    document.getElementById("barfour").style.width="60px";
                }   
            
                 else if(document.getElementById("the_average_ratingfour").innerHTML=="4"){
                    document.getElementById("barfour").style.width="80px";
                }   
            
                 else if(document.getElementById("the_average_ratingfour").innerHTML=="5"){
                    document.getElementById("barfour").style.width="100px";
                }
                else{
                    document.getElementById("barfour").style.width="0px";
                }

/*state phase*/


if(document.getElementById("stateone").innerHTML=="Available"){
    document.getElementById("stateone").style.color="green";
    document.getElementById("yesnoone").style.cursor="pointer";
    document.getElementById("stateone").style.fontSize="16px";
    document.getElementById("stateone").style.fontWeight="bold";
}
else{
    document.getElementById("stateone").style.color="red";
    document.getElementById("stateone").style.fontSize="16px";
    document.getElementById("stateone").style.fontWeight="bold";
    document.getElementById("stateone").style.marginTop="292px";
    document.getElementById("yesnoone").onclick=false;
}

if(document.getElementById("statetwo").innerHTML=="Available"){
    document.getElementById("statetwo").style.color="green";
    document.getElementById("yesnotwo").style.cursor="pointer";
    document.getElementById("statetwo").style.fontSize="16px";
    document.getElementById("statetwo").style.fontWeight="bold";
}
else{
    document.getElementById("statetwo").style.color="red";
    document.getElementById("statetwo").style.fontSize="16px";
    document.getElementById("statetwo").style.fontWeight="bold";
    document.getElementById("statetwo").style.marginTop="292px";
    document.getElementById("yesnotwo").onclick=false;
}

if(document.getElementById("statethree").innerHTML=="Available"){
    document.getElementById("statethree").style.color="green";
    document.getElementById("yesnothree").style.cursor="pointer";
    document.getElementById("statethree").style.fontSize="16px";
    document.getElementById("statethree").style.fontWeight="bold";
}
else{
    document.getElementById("statethree").style.color="red";
    document.getElementById("statethree").style.fontSize="16px";
    document.getElementById("statethree").style.fontWeight="bold";
    document.getElementById("statethree").style.marginTop="292px";
    document.getElementById("yesnothree").onclick=false;
}

if(document.getElementById("statefour").innerHTML=="Available"){
    document.getElementById("statefour").style.color="green";
    document.getElementById("yesnofour").style.cursor="pointer";
    document.getElementById("statefour").style.fontSize="16px";
    document.getElementById("statefour").style.fontWeight="bold";
}
else{
    document.getElementById("statefour").style.color="red";
    document.getElementById("statefour").style.fontSize="16px";
    document.getElementById("statefour").style.fontWeight="bold";
    document.getElementById("statefour").style.marginTop="292px";
    document.getElementById("yesnofour").onclick=false;
}