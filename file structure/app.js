/*
for fs module we mostly use to read and write resp files...
for synchronous read & writing we use readFileSync and writeFileSync
for async readFile and writeFile...
*/

const fs = require('fs');
const res = fs.readFileSync('./folder/first.txt','utf-8')
console.log(res);
console.log("reading completed");


// Writing to 'first.txt' synchronously
try {
    fs.writeFileSync('./folder/first.txt', 'Hello worldhjhjhj', 'utf-8', { flag: 'a' });
    console.log("Written successfully");
} catch (err) {
    console.error("Error writing file:", err);
}
