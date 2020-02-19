const moment = require('moment');

const dateFormatConverter = (stringDate) => {

    // on vérifie la strucutre de la string comme un format sécable (-, /, ;, ' ' )
// on constitue un array de string grâce au sécateur
// on trim les éventuelles partie manquantes 
// on convertit en nombre
// si pas d'erreur on commence à vérifier le type de nombre : année si 4 chiffres, ... on display l'interpétatin des chiffres fait.

//on construit les arrays : 




    return asMoment ;
}

const ephemeris =(firstdate,lastdate) => {


    let lastMoment = moment([ 2020, 5, 10]); // dateFormatConverter(lastdate)
    let firstMoment = moment([ 2010, 2, 25]); // dateFormatConverter(firstdate)

    let numberOfDays = lastMoment.diff(firstMoment,"days");

    return numberOfDays ;
}


let testDate = "10/06/2020"
let testOdate = "25/03/2010"

let be = ephemeris(testDate, testOdate);

console;log(be);

