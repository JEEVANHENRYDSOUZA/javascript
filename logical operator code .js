
const dolphins=(96+108+89)/3;
const koalas=(88+91+110)/3;
if(dolphins>koalas && dolphins >=100){
    console.log("winner is dolphins")
    console.log(dolphins);
}
else if(dolphins===koalas && dolphins>=100 && koalas>=100){
    console.log("draw")
}
else{if(koalas>=100){console.log("winner is koalas");}
     console.log("no winner");           
    
}
