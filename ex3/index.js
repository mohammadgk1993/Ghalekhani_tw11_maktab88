const fs = require('fs')

fs.writeFileSync('text.txt','hello world',function (error) {
    if (error) console.log('error ===> ',error)
})

if (fs.existsSync('text.txt')) {
    console.log('The file is already exist')
} else {
    console.log('The file is not exist')
}