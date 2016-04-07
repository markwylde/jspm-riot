var compiler = require('riot-compiler');

exports.translate = function(load) {
    return compiler.compile('import riot from \'riot\'\n' + load.source);
};
