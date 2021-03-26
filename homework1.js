//1.  Ստեղծել homework իրադարձությունը լսող , որը կկանչի handler :
// handler-ը պետք է արտածի Homeworks.txt պարունակությունը: emit անել homework :

const { EventEmitter } = require('events');
const fs = require('fs');

const handler = new EventEmitter();

handler.on('homework',()=>{
    fs.createReadStream('./Homeworks.txt').pipe(process.stdout);
});

handler.emit('homework');