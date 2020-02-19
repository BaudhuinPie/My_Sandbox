import React from 'react-scripts';

const Csvparsy = (fileCVS) => {
    const csv = require('csv-parser')
    const fs = require('fs')
    const results = [];

    fs.createReadStream(fileCVS)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      return results ;
    });      
}
export default Csvparsy ;

// console.log(results);
// // [
// //   { NAME: 'Daffy Duck', AGE: '24' },
// //   { NAME: 'Bugs Bunny', AGE: '22' }
// // ]


 
