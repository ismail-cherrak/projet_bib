let booksRanking;
let booksProfRanding;

function afficheRanking(r,place,averageNum){
    switch(Math.round(r)){
        case 0 :
            place.style.marginLeft="00px";
             averageNum.innerHTML=Math.round(r); 
        break;
        case 1 :
            place.style.marginLeft="32px";
             averageNum.innerHTML=Math.round(r);
        break;
        case 2 :
             place.style.marginLeft="64px";
             averageNum.innerHTML=Math.round(r);
        break;
        case 3 :
            place.style.marginLeft="96px";
             averageNum.innerHTML=Math.round(r);
        break;
        case 4 :
             place.style.marginLeft="128px";
             averageNum.innerHTML=Math.round(r);
        break;
        case 5 :
            place.style.marginLeft="160px";
            averageNum.innerHTML=Math.round(r);
        break;
        
    }
}

afficheRanking(2.5,document.getElementsByClassName("roundstu")[0],document.getElementsByClassName("studentsaveragerating")[0]);
 afficheRanking(3.5,document.getElementsByClassName("roundtea")[0],document.getElementsByClassName("teachersaveragerating")[0]);
