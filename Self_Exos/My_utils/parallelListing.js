/** LORSQUE 2 nombres se suivent = problème => $$$ rassembler en une seule unité ; consoleLog cette valeur et sa position $$$$$$$$$ */
/** verrouiller les foncitons qui prennent des arrays de trnasiont en entrée ( ou bien les rendre static ???) */
/** $$$$$ rajouter une fonctinon filterPoint() pour tout ce qui concerne les dots. ; ! : ? , etc... */
// $$$$$$$$$$$$rajouter le _ à filterwire() !!!!!!!!!!!! $$$$$$$$$$$$$$$
//=============================================================================
class Ex {
    constructor ( thing) {
        this._thing = thing;
    }

    get itsValue() {
        console.log(this._thing);
    }
    /**
     * @param {any} newest
     */
    set resetValue(newest) {
        this._thing = newest ;
    }
    set changeValue(moreee) {
        this.resetValue = moreee;
    }
    
    set addValue(moree) {
        this._thing.push(moree) ;
    }

    pusher(datra) {
        this._thing.push(datra);
    }

    _pushing (dtr) {
        this._thing.push(dtr) ;
    }

    set hidePush(val) {
        this._thing._pushing = val;
    }

}

let be = new Ex(["a","b"]) ;
be.resetValue = ["c","D"];
be.changeValue = ["E","f"];
be.addValue = "GG";
be.pusher("k");
be.hidePush = "hideme";
be.itsValue;
//========================================================



class StriRarrList extends Array {

    constructor(string) {
        super(string);
    }

    //
    clearWhitesIn = ( arrray = [ "Add", "an", "array", ",", "Please!"] ) => {
            let betterArray = arrray.map( item => item.replace(/\s/g,'') ) ;
            console.log( "synthese",betterArray);
            return betterArray ;
    }


    //
    trimer = (stringo) => {
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

    //
    splitClean = ( string = "add An Array, Please!") => {

            //Settings & Declarations__________

            const longArray = string.split(" ") ;
            //console.log(longArray.length, longArray);

            //Actions & Results_________

            let luckyArray = longArray.map(substring => this.trimer(substring) )  // CALL trimer 
            //console.log("cleaned", luckyArray);

            return luckyArray ;
    }

    //
    filterWire = (arrray) => {

            let regex = /\s/;

            // arrray.forEach((item, i)=> {
            //     if (item == undefined) {console.log(i," undefined")}
            //     if (item == '') {console.log(i," empty")}
            //     if (item == '-') {console.log(i,"dashing")}
            //     if (item == !regex.test(item)) {console.log(i,"whitespace")}
            // });
            item = arrray[0] ;
                if (item == undefined) {console.log(" undefined")}
                if (item == '') {console.log(" empty")}
                if (item == '-') {console.log("dashing")}
                if (item == regex.test(item)) {console.log("whitespace")}
                
            let lArray= arrray.filter( item => (item != undefined && item != '' && item != '-' && item != regex.test(item)) )
            return lArray
}

    //
    wordGathering = (arrray = [ "Add", "an", "array", ",", "Please!"] ) => {
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

    /** Split with NaN In String --- splitNaNIS() */
    //
    splitNaNIS = (stringy) => {

            let arryy = this.splitClean(stringy) ;
            console.log("NaNIS:_",arryy);

            let cleanedArr = this.filterWire(arryy);
            delete arryy;
            console.log("NaNIS:_",cleanedArr);

            let wordOutNaN = this.wordGathering(cleanedArr);
            delete cleanedArr;
            console.log("NaNIS:_",wordOutNaN);

            let cleanedWON =  this.filterWire(wordOutNaN) ;
            delete wordOutNaN;
            console.log("NaNIS:_",cleanedWON);

            return cleanedWON ;
    }

    // ================================================================= séparer les nombres des noms composés :

    //
    catchNum = (rArray = [ "Add an Array", "at catchNum !"]) => {

            let numList = rArray.filter( item => {
                loto = +item ;
                return !isNaN(loto) ; // watch out !
            })
            console.log(numList);
            return numList ;
    }

    //
    catchNaN = (rArray = [ "Add an Array", "at catchNum !"]) => {

            let NaNList = rArray.filter( item => {
                loto = +item ;
                return isNaN(loto) ;  // watch out !
            })
            console.log(NaNList);
            return NaNList ;
    }

}
// Fin de class

// ================================= garder les noms composés  :

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
    item = arrray[0] ;
        if (item == undefined) {console.log(" undefined")}
        if (item == '') {console.log(" empty")}
        if (item == '-') {console.log("dashing")}
        if (item == regex.test(item)) {console.log("whitespace")}
        
    let lArray= arrray.filter( item => (item != undefined && item != '' && item != '-' && item != regex.test(item)) )
    return lArray
}

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

/** Split with NaN In String --- splitNaNIS() */
//
const splitNaNIS = (stringy) => {

    let arryy = splitClean(stringy) ;
    console.log("NaNIS:_",arryy);

    let cleanedArr = filterWire(arryy);
    delete arryy;
    console.log("NaNIS:_",cleanedArr);

    let wordOutNaN = wordGathering(cleanedArr);
    delete cleanedArr;
    console.log("NaNIS:_",wordOutNaN);

    let cleanedWON =  filterWire(wordOutNaN) ;
    delete wordOutNaN;
    console.log("NaNIS:_",cleanedWON);

    return cleanedWON ;
}

// ================================================================= séparer les nombres des noms composés :

//
const catchNum = (rArray = [ "Add an Array", "at catchNum !"]) => {

    let numList = rArray.filter( item => {
        loto = +item ;
        return !isNaN(loto) ; // watch out !
    })
    console.log(numList);
    return numList ;
}

//
const catchNaN = (rArray = [ "Add an Array", "at catchNum !"]) => {

    let NaNList = rArray.filter( item => {
        loto = +item ;
        return isNaN(loto) ;  // watch out !
    })
    console.log(NaNList);
    return NaNList ;
}



// exécution pour garder les noms composé dans l'array ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let wideString = "something" // tomodify !

let wideArray = splitNaNIS(wideString);


// exécution pour séparer nombre et noms en deux listes ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let NumbersList = catchNum(wideArray) ;

let NaNList = catchNaN(wideArray) ;


/**
 *   1 A-Bomb 2 Abe Sapien 4 Abomination 5 Abraxas 6 Absorbing Man 8 Adam Strange 10 Agent Bob 11 Agent Zero 12 Air-Walker 13 Ajax 14 Alan Scott 18 Alien 19 Allan Quatermain 20 Amazo 21 Ammo 23 Angel 25 Angel Dust 27 Angela 28 Animal Man 29 Annihilus 30 Ant-Man 34 Anti-Venom 35 Apocalypse 36 Aquababy 38 Aquaman 39 Arachne 40 Archangel 42 Ardina 43 Ares 44 Ariel 46 Arsenal 47 Astro Boy 48 Atlas 50 Atom 52 Atom Girl 56 Aurora 57 Azazel 58 Azrael 61 Banshee 63 Batgirl 69 Batman 72 Battlestar 75 Beast 76 Beast Boy 80 Beyonder 82 Big Daddy 83 Big Man 84 Bill Harken 85 Billy Kincaid 86 Binary 87 Bionic Woman 88 Bird-Brain 89 Bird-Man 91 Birdman 92 Bishop 93 Bizarro 95 Black Adam 96 Black Bolt 99 Black Cat 100 Black Flash 101 Black Goliath 104 Black Mamba 106 Black Panther 109 Blackout 110 Blackwing 112 Blade 113 Blaquesmith 114 Bling! 115 Blink 119 Blob 120 Bloodaxe 121 Bloodhawk 123 Blue Beetle 127 Boba Fett 128 Bolt 129 Bomb Queen 130 Boom-Boom 131 Boomer 136 Brainiac 138 Brother Voodoo 140 Buffy 142 Bumblebee 144 Bushido 146 Callisto 149 Captain America 150 Captain Atom 152 Captain Cold 156 Captain Marvel 160 Captain Planet 161 Captain Universe 163 Cat 165 Catwoman 168 Cerebra 172 Cheetah 175 Chromos 176 Chuck Norris 177 Citizen Steel 180 Cloak 181 Clock King 183 Colin Wagner 185 Colossus 186 Copycat 189 Crimson Crusader 191 Crystal 192 Curse 194 Cyborg 196 Cyclops 197 Cypher 199 Danny Cooper 200 Daphne Powell 201 Daredevil 202 Darkhawk 203 Darkman 206 Darkstar 208 Darth Vader 212 Deadman 213 Deadpool 217 Demogoblin 218 Destroyer 222 Doctor Doom 226 Doctor Strange 227 Domino 228 Donatello 233 Dr Manhattan 235 Ego 236 Elastigirl 237 Electro 239 Elle Bishop 241 Emma Frost 242 Enchantress 243 Energy 245 Ethan Hunt 247 Evil Deadpool 249 Exodus 251 Falcon 253 Faora 257 Firebird 258 Firelord 260 Firestorm 262 Fixer 263 Flash 268 Forge 271 Frenzy 273 Galactus 276 Garbage Man 278 General Zod 279 Genesis 280 Ghost Rider 282 Giant-Man 285 Gladiator 287 Godzilla 288 Gog 289 Goku 290 Goliath 294 Gorilla Grodd 296 Gravity 298 Green Arrow 299 Green Goblin 303 Groot 304 Guardian 307 Han Solo 308 Hancock 310 Harry Potter 311 Havok 312 Hawk 313 Hawkeye 316 Hawkman 317 Hawkwoman 320 Heat Wave 321 Hela 324 Hellstorm 325 Hercules 326 Hiro Nakamura 327 Hit-Girl 329 Hollow 331 Howard the Duck 332 Hulk 333 Human Torch 334 Huntress 335 Husk 336 Hybrid 337 Hydro-Man 338 Hyperion 339 Iceman 340 Impulse 341 Indiana Jones 342 Indigo 343 Ink 344 Invisible Woman 345 Iron Fist 346 Iron Man 348 Isis 349 Jack Bauer 350 Jack of Hearts 351 Jack-Jack 352 James Bond 355 Jason Bourne 364 Jim Powell 366 Johann Krauss 368 John Stewart 370 Joker 372 Jubilee 373 Judge Dredd 379 Kang 381 Katniss Everdeen 383 Kick-Ass 387 Killer Frost 389 King Kong 390 King Shark 391 Kingpin 392 Klaw 393 Kool-Aid Man 396 Krypto 397 Kyle Rayner 399 Lady Bullseye 402 Leech 403 Legion 404 Leonardo 405 Lex Luthor 408 Lightning Lord 409 Living Brain 411 Liz Sherman 413 Lobo 414 Loki 416 Luke Cage 417 Luke Campbell 418 Luke Skywalker 419 Luna 422 Machine Man 423 Magneto 425 Magus 429 Man-Wolf 431 Mantis 433 Marvel Girl 437 Matt Parkman 438 Maverick 439 Maxima 440 Maya Herrera 441 Medusa 443 Mephisto 445 Metallo 446 Metamorpho 447 Meteorite 448 Metron 450 Michelangelo 457 Mister Freeze 462 Mockingbird 464 Mogo 466 Moloch 467 Molten Man 468 Monarch 469 Monica Dawson 473 Morph 474 Moses Magnum 475 Mr Immortal 476 Mr Incredible 478 Multiple Man 479 Mysterio 480 Mystique 485 Naruto Uzumaki 486 Nathan Petrelli 487 Nebula 489 Nick Fury 491 Nightwing 492 Niki Sanders 493 Nina Theroux 495 Northstar 496 Nova 498 Odin 499 Offspring 500 Omega Red 505 Oracle 506 Osiris 509 Parademon 514 Penguin 515 Phantom 517 Phoenix 518 Plantman 519 Plastic Lad 520 Plastic Man 523 Polaris 524 Power Girl 525 Power Man 526 Predator 527 Professor X 528 Professor Zoom 529 Psylocke 530 Punisher 531 Purple Man 532 Pyro 533 Q 534 Quantum 536 Quicksilver 538 Ra's Al Ghul 539 Rachel Pirzad 540 Rambo 541 Raphael 542 Raven 543 Ray 545 Red Arrow 546 Red Hood 549 Red Robin 550 Red Skull 554 Renata Soliz 556 Rhino 558 Riddler 559 Rip Hunter 561 Robin 567 Rogue 568 Ronin 570 Sabretooth 571 Sage 572 Sandman 573 Sasquatch 574 Sauron 575 Savage Dragon 581 Scorpion 584 Shadow King 586 Shadowcat 587 Shang-Chi 588 Shatterstar 591 Shocker 595 Silk 596 Silk Spectre 598 Silver Surfer 601 Sinestro 602 Siren 605 Skaar 606 Snake-Eyes 607 Snowbird 611 Space Ghost 612 Spawn 613 Spectre 615 Speedy 618 Spider-Girl 620 Spider-Man 623 Spider-Woman 627 Spock 628 Spyke 630 Star-Lord 631 Stardust 632 Starfire 634 Static 635 Steel 636 Stephanie Powell 638 Storm 639 Stormtrooper 641 Superboy 643 Supergirl 644 Superman 645 Swamp Thing 646 Swarm 647 Sylar 648 Synch 653 Taskmaster 654 Tempest 655 Thanos 656 The Cape 658 Thing 659 Thor 661 Thunderbird 664 Thunderstrike 667 Tigra 669 Titan 670 Toad 671 Toxin 674 Trickster 675 Trigon 677 Triton 678 Two-Face 679 Ultragirl 680 Ultron 681 Utgard-Loki 682 Vagabond 684 Valkyrie 685 Vanisher 686 Vegeta 687 Venom 690 Venompool 692 Vibe 693 Vindicator 695 Violator 697 Vision 699 Vixen 700 Vulcan 701 Vulture 702 Walrus 706 Warp 709 Watcher 710 Weapon XI 711 White Canary 712 White Queen 714 Winter Soldier 715 Wiz Kid 717 Wolverine 720 Wonder Woman 721 Wondra 722 Wyatt Wingfoot 724 X-Man 726 Yellowjacket 728 Ymir 729 Yoda 730 Zatanna 731 Zoom 
 * 
 * 
 */