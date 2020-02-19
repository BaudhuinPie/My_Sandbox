//===================================== To replace all spaces inside a string =================================================// 
 

/** MDN+ | trimAllKOCh ( [string] [, onlyTips] [, toClean] ) --- trimAllKOCh() for "trimAllKindOfChar()" --- Trim out all the chars (you want) to clean off the string . 
 * 
 * [string] : ob-optional --- default value : "   add A String To TrimAll   " ((a String object))
 * [onlyTips] : optional --- default value : true ((Boolean));
 * [toClean] : optional --- default value : " " ((1 whitespace))
 * 
 * Set [onlyTips] to -false- for filtering all the string and returning it without the char [toClean] .
 * Set [toClean] with the char you d'like to get rid of .
 * 
 * <> Be aware of what you won't ever(?) know from (Mozilla) MDN web docs : Array.protoptype.join() returns always a string starting with... one whitespace ;
 *    And you do not have the option to remove that feature ( Actually --- who could at any time get annoyed by an insidious extra whitespace !? ) 
 * <>
 * " Less options you dump , More cleverness you catch ! --- Not much responsive ? React more !"
 * 
*/

const trimAllKOCh = (string="   add A String To TrimAll   ", onlyTips = true, toClean = " ") => {

    let splittString = string.split("");

    if (!onlyTips) { // Removes every chars  off the string to trim out, & Return.
        //
            let trimedString  = splittString.filter(item => item != toClean).join('').trim(); // join() returns a string with an extra whitespace in front, so we trim it !
            return trimedString ;
        //

    } else { // Removes only the specified chars from the beginning and the end of the string to trim out (not between other chars), & Return.
        //
            for (let i =0 ; splittString[i] === toClean ; i++ ) {
                console.log(splittString[i] === toClean,";", splittString[i], ";", toClean )
                    let z = splittString.shift();
                    delete z ;
            }
        //
            for (let i = splittString.length-1 ; splittString[i] === toClean ; i-- ) {
                console.log(splittString[i] === toClean,";", splittString[i], ";", toClean )
                    let z = splittString.pop();
                    delete z ;
            }
        //
            let trimedString  = splittString.join('').trim();  // join() returns a string with an extra whitespace in front, so we trim it !
            return trimedString ;
        //
    }
}




//======================================================================================// 

// After a good night, I realised how better program could be coded just to achieve the same result... (There is a cost : dumping an option!)  



/** MDN+ | TrimAllWhite( [string] [, onlyTips] ) --- Trim out all the whitespaces in order to clean at the string . 
 * 
 * [string] : ob-optional --- default value : "   add A String To TrimAll   " ((a String object))
 * [onlyTips] : optional --- default value : true ((Boolean));
 * 
 * Set [onlyTips] to -false- for filtering up the string and returning it without the tipped whitespaces . 
 */

const trimAllWhite = (string="   add A String To TrimAll   ", onlyTips = true) => {

    if (!onlyTips) { // Removes all the whitespaces off the string.
        let regex = /\s/g ;
        return string.replace(regex, "") ;

    } else { //  Removes only whitespaces  off string's beginning and string's end to trim out, but not between other chars.
        let needAtLeft = true ;
        let needAtRight = true ; 
        let checkup = 0 ;
        let trimedLeft = "";
        let trimedRight = "";

        do {
            checkup++ ;
            trimedLeft = string.trimStart() ;
            trimedRight = trimedLeft.trimEnd() ;
        //
            if (string.startsWith(" ")) {
                needAtLeft = false ;
                //console.log("needAtLeft", checkup)
            }
        //
            if (string.endsWith(" ")) {
                needAtRight = false ;
                //console.log("needAtRight", checkup)
            }
            console.log(needAtLeft,needAtRight)

        } while ( (checkup < trimedRight.length) && (needAtLeft || needAtRight) )
    
        return trimedRight ;
    }
}