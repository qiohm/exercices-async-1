/*
Ecrivez un programme qui copie le fichier file1.txt vers le fichier file2.txt en
utilisant les api synchrones du module fs de node.js
*/
import fs from 'fs'

console.log('START OF PROGRAM')

try {
    fs.copyFileSync('./file1.txt', './file2.txt')
    console.log('file1.txt was copied to file2.txt synchronously')
} catch (e) {
    console.error(e)
}

console.log('END OF PROGRAM')
