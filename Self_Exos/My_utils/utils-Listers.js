/* Liste de fonctions utilitaires pour le traitement de listes de données*/

//###################################################################################################################
/* Lister : input= string " number word number word number word ..." :: return 2 strings [... numbers] [...words]    */

//
const clearWhitesIn = ( arrray = [ "Add", "an", "array", ",", "Please!"] ) => {
    let betterArray = arrray.map( item => item.replace(/\s/g,'') ) ;
    console.log( "synthese",betterArray);
    return betterArray ;
}

//
const trimer = (stringo) => {
        let regex = /\s/ ;
        let trimdString = "" ;
        let entered = false ;
        let sideSize = 0 ;
    //
        for (let i =0 ; i < stringo.length ; i++ ) {
        
                if ( !regex.test(stringo[i]) || entered) {
                    trimdString = trimdString.concat(stringo[i]) ;
                    entered = true ;
            //
                } else {
                    sideSize++;
                }
        }
                
        //console.log(sideSize, trimdString)
        delete stringo;
        let trimdArray = [];
        entered = false;
    //
        for (let i = trimdString.length-1 ; i >=0 ; i-- ) {

            if ( !regex.test(trimdString[i]) || entered) {
                trimdArray.unshift(trimdString[i]);
                entered = true ;
            }
        }
    //
        let blankString = trimdArray.join("").trim();
        //console.log("trimer:", blankString);
    return blankString ;
}

// trimer("    der ee 6   de 667 ! d     ")


//
const splitClean = ( string = "add An Array, Please!") => {

    //Settings & Declarations__________

    const longArray = string.split(" ") ;
    //console.log(longArray.length, longArray);

    //Actions & Results_________

    let luckyArray = longArray.map(substring => trimer(substring) )  // CALL trimer 
    //console.log("cleaned", luckyArray);

    return luckyArray ;
}

//
const filterWire = (arrray) => {

    let regex = /\s/;

    // arrray.forEach((item, i)=> {
    //     if (item == undefined) {console.log(i," undefined")}
    //     if (item == '') {console.log(i," empty")}
    //     if (item == '-') {console.log(i,"dashing")}
    //     if (item == !regex.test(item)) {console.log(i,"whitespace")}
    // });
        
    let lArray= arrray.filter( item => (item != undefined && item != '' && item != '-' && item != !regex.test(item)) )
    return lArray
}
//console.log(filterWire(["333", "Bastian", "77", "", "des bus", "256", "regi-tiran", "34", "", "", "du HF Dert"]))



//
const wordGathering = (arrray = [ "Add", "an", "array", ",", "Please!"] ) => {
    //
        for(let i = 0 ; i < arrray.length-1; i++) {
            
            let loto = +arrray[i] ;
            let lotoNext = +arrray[i+1];
            //console.log(loto , lotoNext)

        }
    //
        for(let i = 0 ; i < arrray.length-1; i++) {
            let loto = +arrray[i] ;
            let lotoNext = +arrray[i+1];
            //console.log(loto , lotoNext)
        //
            if( isNaN(loto) && isNaN(lotoNext) ) {

                    let wording = [arrray[i], arrray[i+1]];
                    //console.log("wording", wording)
                    arrray[i+1] = wording.join(" ").trim();
                    //console.log(arrray[i], i) 
                    arrray[i] = "";
                    
                    
            }
        }
    //
        //console.log(arrray);
        return arrray;
}




//----------- fonction qui rassemble les noms composés en les isolants des autres symboles ---------------------

/** Split with NaN In String --- splitNaNIS() */

const splitNaNIS = (stringy) => {

    let arryy = splitClean(stringy) ;
    //console.log("NaNIS:_",arryy);

    let cleanedArr = filterWire(arryy);
    delete arryy;
    //console.log("NaNIS:_",cleanedArr);

    let wordOutNaN = wordGathering(cleanedArr);
    delete cleanedArr;
    //console.log("NaNIS:_",wordOutNaN);

    let cleanedWON =  filterWire(wordOutNaN) ;
    delete wordOutNaN;
    console.log("NaNIS:_",cleanedWON);

    return cleanedWON ;
}

//=================================================================================

// ________demonstration : 

//let gamma = clearWhitesIn(beta);
// expected ["333", "Bastian", "77", "des", "bus", "256", "regi-tiran"]
 
let beta = splitClean("    333 Bastian    77  des bus 256 regi-tiran   34 du  HF Dert   ") ;
// expected ["333", " Bastian ", "   77 ", "des ", " bus ", "256"," regi-tiran"]

//
let dada = filterWire(beta) ;

let delta = wordGathering(dada) ;
// expected ["333", "Bastian", "77", "des bus", "", "256", "regi-tiran"]

let magma =  filterWire(delta);
console.log(magma);

//²²²²²²²²²²²²²²²²²²²²²²²²²²²²²²²²²²²²²²²²²²²²²²²²²


// expected ["333", "Bastian", "77", "des bus", undefined, "256", "regi-tiran"]

// Let's clean this array with a filter :
let builtArray = luckyArray.filter( item=> (item != undefined && item != '' && item != '-' && item != ' ') )
console.log(builtArray);
// expected ["333", "Bastian", "77", "des bus", "256", "regi-tiran"]




// "    333   Bastian   77   des bus     256  regi-tiran  de HR Dert   " 
//["333", "Bastian", "77", "des", "bus", "256", "regi-tiran", "34", "du", "HF", "Dert"]

// "     derer 34 err 4566 der-dzzrzr 67 5 g  hjju r 3 d 2 D U  n   e 8   h  34   9  d   er nier 23   " 