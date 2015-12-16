var fs = require('fs');
var config = require('../../config/config');

function getFiles (){
    this._files =  [];
    this.dir = config.inputPath;
    var files = fs.readdirSync(this.dir);
    for (var i in files){
        var name = files[i];
        this._files.push(name);
    }
}

module.exports = getFiles;