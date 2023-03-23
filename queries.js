// const Pool = require('pg').Pool;
// const pool = new Pool({
//     user: 'javy',
//     host: 'localhost',
//     database: 'api',
//     password: 'password',
//     port: 5432
// })

let a = [ 17, 28, 30 ];
let b = [ 99, 16, 8 ];

function compareTriplets(a, b) {
      let alice = 0;
      let bob = 0;
      for (let i in a) {
            console.log("a " + i)
            for (let bi in b) {
                  console.log("b " + bi)
            }
      }


      return [ alice, bob ]
}

console.log(compareTriplets(a, b))