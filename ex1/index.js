const fs = require('fs')

fs.writeFileSync('text.txt','hello world',function (error) {
    if (error) console.log('error ===> ',error)
})

fs.appendFileSync('text.txt',' ,welcome to maktab sharif', function(error) {
    if (error) console.log('error ===> ',error)
})