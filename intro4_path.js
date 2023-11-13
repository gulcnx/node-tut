const path = require('path');

console.log(path.sep);



const filePath = path.join('./content' , 'subfolder','test.txt' )
console.log(filePath);

const base = path.basename(filePath)
console.log(base)

const resolve = path.resolve(__dirname, 'content', 'subfolder','test.txt'); //global'de __dirname kullanılır .
console.log(resolve);//its return us to absolute path.
