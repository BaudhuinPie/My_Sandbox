const http  = require('http');
require('dotenv').config();

/*******EXO ASYNC******/

// const filesAround = require('fs');

// console.log("Read the directory : Start !")

// const foundFiles = filesAround.readdirSync('.');
// console.log(foundFiles);
// console.log("Read the directory : Done !");

// console.log("Content reading ?");
// for(let file of foundFiles) {
//     if( filesAround.lstatSync(file).isDirectory() ) continue;
//     const content = filesAround.readFileSync(file, 'utf8');
//     console.log('----got this-----')
//     console.log(content)
// }
// console.log('Read file content - Done');


/** */
//Get the average of a number set
const average = (numSet) => {
    let sum = 0;
    for (let i = 0; i < numSet.length; i++) {
        sum += numSet[i];
    }
    return sum / numSet.length;
  }
  
  // Produce an array of random numbers as long as the range allowed.
  const randomStats = (range) => { 
    let store = []
    for (let i= 0 ; i < range ; i++) {
      let nufl = Math.random() * 100 ; // 'nufl' is the short name of num-float (a float number).
      store.push(Math.ceil(nufl)) ; // A percentage intiger is add into the array.
    }
    return store ;
  }
  
  // Transforms an array of numbers into relative area of values ready for circle graphs.
//   const relief = (statSet, intervals) => {
//     const top = Math.max(...statSet) ; // fix the relative 100% limit as the top number of the set.
//     const relValSet = statSet.map(val => (Math.ceil((val/top)*100)) ) ; // all values get turned into percentages.
//         const reducer = (accumulator, currentValue) => accumulator + currentValue;
//     const relValSum = relValSet.reduce(reducer) ;
//     const slot = 100 / intervals ; // a slot gathers and lands every vals inside its scope on floor.
//     const valWeights = [] ; // the set of floors to be completed.
//     console.log("here valWeights :", valWeights)
//     for( let i = 0 ; i < intervals ; i++) {
//       let size = relValSet.filter( relVal => (i*10 < relVal)&&(relVal <= (i+1)*10) )
//       console.log("size ", size);
//       valWeights.push(size.length) ; // the number of val on each floor is registered in a raw #floor-length 
//     };
//     //Render the datas like planet shades properties
//     const planet = {
//       radius : top ,
//       ground : relValSet,
//       level : average(relValSet),
//       //flength : valWeights,
//       mass : relValSet.length,
//       volume : relValSum/100,
//       dimPly : 100/relValSum   // gives the excentricity value of the ground set.
//      };
//      return planet ; 
//   }
const relief = (statSet, intervals) => {
    const top = Math.max(...statSet) ; // fix the relative 100% limit as the top number of the set.
    const relValSet = statSet.map(val => (Math.ceil((val/top)*100)) ) ; // all values get turned into percentages.
     const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const relValSum = relValSet.reduce(reducer) ;
    const slot = 100 / intervals ; // a slot gathers and lands every vals inside its scope on floor.
    const valWeights = [] ; // the set of floors to be completed.
    const floorSet = [...relValSet] ;
    // je forEach(toutes les valeurs , je réassigne et je compte si dans le scope défini)
    // j'ajoute le compte etje change de scope
    // rebelote//
    for( let i = 0 ; i < intervals ; i++) {
      let count = 0 ;
      let inScope = (i*10 < relVal)&&(relVal <= (i+1)*10) ;
      floorSet.forEach(num =>  {if (inScope) {
          sizing += 1 ;
          return (i+1)*10 ;
      } else { return num}})
      valWeigths.push(count)
    }

  
  // Compute the stats of a planet object in order to draw a circle graph.
  const planetForming = (planet, boardId, howBig) => {
    
    const anglesRange =  20 //planet.flength.length ;
    const slotAngle =  2/anglesRange ;
    let elevation = 100 ;
    // const box = document.getElementById(boardId);
    // if(box.getContext) {
    //   const circle = box.getContext('2d');
    //   const xCenter = box.width / 2 ;
    //   const yCenter = box.height / 2 ;
    //   const tip = 0 ;
    //   circle.beginPath();
    //   for(let v = 0 ; v < anglesRange ; v++){ // Produces every points along the circle at each elevation. 
    //     elevation = planet.ground[v]
    //     circle.arc(xCenter, yCenter, elevation*howBig, tip * Math.PI, (tip+0.01) * Math.PI, false);
    //     tip += slotAngle ;
    //   }
    //   circle.lineWidth = 2;
    //   circle.strokeStyle = '#FFFFFF';
    //   circle.stroke();
    //}
  }
    // const planet20 = relief(randomStats(20), 5);
    // planetForming(planet20, "circle-stats", 1);
    // console.log('hello');

function* moving(numSet, iterations){
    let prevFlow = numSet ;
    console.log("numset>", numSet)
    for (let y= 0 ; y < iterations ; y++){
      console.log("y : ", y , " prevFlow > " , prevFlow)
       let flowedSet = prevFlow.map(num => num + (num*(Math.random()-0.5)).round() )
       //prevFlow = flowedSet ;
       console.log(flowedSet)
       yield flowedSet ;
    }
  }
  
  const shine = (numSet) => {
    const bounce = setInterval( () => {
      let flow = moving(numSet, 10).next() 
      console.log (flow.value)
      if(flow.done) clearInterval(bounce)
      
                                      
                                      },2000)
  }
  
  const planet20 = relief(randomStats(20), 8);
  moving(planet20) ;
  //shine(planet20);
  planetForming(planet20, "circle-stats", 1, 1);

/** */

/****SERVER SIDE*******/

// Read environment properties
const port = process.env.PORT || 3000 ;
const hostname = process.env.HOST ;

const userName = process.env.MY_NAME ;
const city = process.env.MY_CITY ;
const lang = process.env.MY_LANGUAGE ;

// return JSON regardless nature type. 
const server = http.createServer( (req, res) => {
    res.statusCode(200);
    res.setHeader("content-type", "application/json");
    res.end('{"message" : "Hello World"}');
})

// start server listenning for connections 
server.listen(port, hostname, () => 
    console.log(`Server launched on ${port} from ${hostname}. >> I am ${userName}, wilder in ${city}, and I love ${lang} !`)
)