const fs = require('fs');

function mkdir(path) {
    return new Promise((resolve, reject) => {
        fs.mkdir(path, (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
}

function writeFile(path, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
}

module.exports = {
    mkdir,
    writeFile
};
