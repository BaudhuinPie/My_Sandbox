// // utilitaires

 

// const gTN = (obj) => document.getElementsByTagName(obj) ;
// const gID = (obj) => document.getElementById(obj) ;
// const gCL = (obj) => document.getElementsByClassName(obj) ;



// const team = ['Antoine', 'Astrid', 'Benoît', 'Célestine', 'Charles-Elie', 'Dinu', 'Etienne', 'François', 'Ghislain', 'Gregory', 'Marine', 'Marouan', 'Maxime', 'Nicolas', 'Pierre', 'Steve', 'Sydney', 'William' ] ;

// const tap = gID("findName");
// const helplist = gID("listNames") ;

// const olLi = (tm) => {
//     let i = 0 ;
//     if ( typeof tm[i] == 'string') {
//         var lili = ['<li class="namesList">There are :</li>'] ;
//         while ( i < tm.length) {
            
//              lili.push(`<li class="namesList"><a href= '#${tm[i]}' >${tm[i]}</a></li>`) ; 
//                 i++ ;
//         } 
//         helplist.innerHTML =  `${ lili.join('') }` ; 
//     } else {
//              helplist.style.display = 'none' ;
//     }
    
// } 

// olLi(team) ;

// *************************************************************************************************************************************

// This code let appear the names in a list named popList if there the pad key pressed is different then BACKSPACE. 

const namesList_keyEvent = (event) =>  { 

    let inputVI = event.currentTarget.value  ;  inputVI = inputVI.toLowerCase();  /* inputVI : input-Very-Important*/
    let popList = gCL('namesList') ;
    let clef = '' ;

    let parrrent = gID('findName').parentElement ;
    parrrent.style.alignItems = 'flex-start' ; 

    // the pressed key is an event, The event has an ID natively called key when the event origin is pad or mouse. 
    if (!event.key) { clef = 'Backspace' } else { clef = event.key } // This code shape set a default value which is the same for no-event and BACKSPACE pad.key
    if (clef == 'Backspace') {

        parrrent.style.alignItems = 'center' ; 
        for (i = 0; i < popList.length; i++) {
                popList[i].style.display = 'none'; // Otherwise than below, no items is display.
        }
    } else { // Only when there is an event & this event is different then BACKSPACE, the code below is executed & display popList items. Otherwise, watch over ^
        for (i = 0; i < popList.length; i++) { 
                itToShow = popList[i].innerHTML.toLowerCase() ; 
                if ( !itToShow.includes(inputVI)  ) { 
                    popList[i].style.display = 'none'; 
                } 
                else { 
                    popList[i].style.display = "list-item";                  
                } 
        }
    }
    // Conclusion : when you enter a word, you press this other key which produce a new event. Get its key value to control a condition on the input value displayed (either other kind of box, i.e. recover and clear its innerHTML, etc.).

} 
//**************************************************************************************************************************************************************** */
// const nav = gTN('nav')[0] ;

// nav.onclick  = function() { 
//     nav.style.backgroundColor = 'rgba(250,250,250,0.2)'; 
// } ;

// gID('findName').onkeyup = namesList_keyEvent ; 

// const unFog = () => {
//     nav.style.backgroundColor = 'rgb(0,0,0)' ; /////////////////////////////////////////////////////////
//     let parrrent = gID('findName').parentElement ;
//     parrrent.style.alignItems = 'flex-start' ;
//     gID('findName').value = null ;
//     const poppy = gCL('namesList') ;
//     setTimeout ( function() {  for (i = 0; i < poppy.length; i++) {
//             poppy[i].style.display = 'none'; 
//             }
//        }, 300 ) ;
    
// } 




const printer = () => { gTN('p')[0].innerHTML= gID('findName').value } ;  //
// gTN('p')[0].innerHTML,  white_voiding_list(gID('findName').value , gTN('ol')[0])
