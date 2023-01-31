const fs = require('fs');

let jsonData = fs.readFileSync('user-data.json');
let users = JSON.parse(jsonData);
console.log(users.filter(item => item.age > 18))