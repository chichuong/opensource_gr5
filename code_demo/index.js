const fs = require('fs');
const testdemo = fs.readFileSync('./txt/test.txt', 'utf-8');
console.log(testdemo);
const textout = `This is new file with contend: ${testdemo}. n\Created on ${Date.now}`;
fs.writeFileSync('./txt/thunghiem.txt', textout);
console.log('file them r !!!')