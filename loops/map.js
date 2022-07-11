

const config = { ip: '1234.22.11', port: 3000};
console.log(JSON.stringify(config));

const config1 = JSON.stringify({ ip: '1234.22.11', port: 3000});
console.log(JSON.parse(config));

const config = require('./config.json');
console.log(config);

fs.readFile(path, options, callback);  // readFile asynchronous the read the entire file in the memory and pass 3 orgument path, option callback 

