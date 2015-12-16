var convert = require('./lib/convert');
var findImg = require('./lib/getFiles');

new findImg()._files.forEach(function(res){
    new convert.Convert(res).imgConvert();
});