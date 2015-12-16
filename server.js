var convert = require('convert');
var findImg = require('getFiles');

new findImg.getFiles().files_.forEach(function(res){
    new convert.Convert(res).imgConvert();
});