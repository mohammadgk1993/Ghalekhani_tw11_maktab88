const fs = require('fs')

fs.writeFileSync('third-text.txt','hello world',function (error) {
    if (error) console.log('error ===> ',error)
})

fs.unlinkSync('third-text.txt')