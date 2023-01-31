const fs = require('fs')

fs.writeFileSync('second-text.txt','hello world',function (error) {
    if (error) console.log('error ===> ',error)
})