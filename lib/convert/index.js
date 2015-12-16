var fs = require('fs');
var gm = require('gm');
var config = require('../../config/config');

function Convert(image) {
    this.image = image;
    this.parseImgName = image.split(/(?=\.[^.]+$)/),
    this.name = this.parseImgName[0],
    this.type = this.parseImgName[1];
    this.CreateDirectory();
}

Convert.prototype.CreateDirectory = function(){
    if (!fs.existsSync(config.outPath + this.name)) {
        fs.mkdirSync(config.outPath + this.name);
    }
};

Convert.prototype.imgConvert = function(){
    config.resolutions.forEach(function(res){
        gm(config.inputPath + this.image)
            .resize(res.width, res.height, '^')
            .gravity('Center')
            .crop(res.width, res.height)
            .draw(['rotate 30 image Over '+res.width/3.5+',0 '+res.width+','+res.height/2+' '+config.waterMark])
            .write(config.outPath + this.name + '/'+ this.name +'_' + res.width + 'x' + res.height + this.type, function (err) {
                (!err) ? console.log('image converted with resolution: '+res.width+' / '+ res.height) : console.log(err);
            },this);
    },this)
}

exports.Convert = Convert;