const {readFileSync, writeFileSync} = require('fs');

console.log('start');

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first, second);

writeFileSync('./content/result.txt',
 `Here is the results :${first} and ${second} `,
 {flag : 'a'}
)
console.log('done With this Task');
console.log('starting the next One');