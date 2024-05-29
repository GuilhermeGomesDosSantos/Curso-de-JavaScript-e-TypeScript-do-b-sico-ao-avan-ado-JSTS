const fs = require('fs').promises;
const { stat } = require('fs');
const path = require('path');


/*
// fs.readdir('./')
fs.readdir(path.resolve(__dirname))
    .then(files => console.log(files))
    .catch(e => console.log(e))
*/

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

/*
function walk (files) {
    for (let file of files) {
        console.log(file);
    }
}
readdir('C:\\Users\\guilh\\OneDrive\\Ambiente de Trabalho\\Curso Udemy\\src');
*/


async function walk (files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);
        // console.log(file, stats.isDirectory());

        if (/\.git/g.test(fileFullPath)) continue;
        if (/node_modules/g.test(fileFullPath)) continue;
        
        if (stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }
        
        // if (!/\.css$/g.test(fileFullPath)) continue;
        if (
            !/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)
        ) continue;

        // console.log(file, stats.isDirectory());
        // console.log(fileFullPath, stats.isDirectory());
        console.log(fileFullPath);
    }
}
readdir('C:\\Users\\guilh\\OneDrive\\Ambiente de Trabalho\\Curso Udemy\\src');


