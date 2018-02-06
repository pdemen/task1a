const testFolder = process.argv[2] || "./";
const fs = require('fs');

function walk(currentDirPath, callback) {
  let fs = require('fs'),
    path = require('path');
  fs.readdir(currentDirPath, function (err, files) {
    if (err) {
      throw new Error(err);
    }
    files.forEach(function (name) {
      let filePath = path.join(currentDirPath, name);
      let stat = fs.statSync(filePath);
      if (stat.isFile()) {
        callback(filePath, stat);
      } else if (stat.isDirectory()) {
        walk(filePath, callback);
      }
    });
  });
}

const simpleCallback = (fp, stat) => {
  console.log(fp + '\t' + (stat.size / 1024).toFixed(2) + 'Kb');
};

walk(testFolder, simpleCallback);
