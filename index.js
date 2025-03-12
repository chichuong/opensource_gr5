const fs = require('fs');
//blocking

// const input = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(input)
// const output = `this is people how i not know ${input}`;
// fs.writeFileSync('./txt/output.txt', output);
// console.log('New file')

//non-blocking
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2)
        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
            console.log(data3);

            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                console.log('done')
            })
        })
    });
});
console.log('idk')