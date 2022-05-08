'use strict';
const calc_Average=(score1,score2,score3)=>{
    return (score1+score2+score3)/3;
}

const koalas=calc_Average(10,20,30);
const dolphin=calc_Average(40,50,60);


const checkwinner=(koalas,dolphin)=>{

    if(koalas>dolphin){
        const printing=`${koalas} vs ${dolphin}`;
        console.log(printing);


    }
    else{ const printing2=`${koalas} vs ${dolphin}`;

        console.log(printing2);
    }
}



checkwinner(dolphin,koalas);
