KISSY.add('kg/vc-pagination/1.1.0/custom-render',["./custom","kg/xtemplate/3.3.3/runtime"],function(S ,require, exports, module) {


var tpl = require("./custom");
var XTemplateRuntime = require("kg/xtemplate/3.3.3/runtime");
var instance = new XTemplateRuntime(tpl);
module.exports = function(){
return instance.render.apply(instance,arguments);
};
});