KISSY.add(function(S,require,exports,module){
/*compiled by xtemplate#3.3.3*/
var ret = module.exports = function tpl(undefined){
var t;
var t0;
var t1;
var t2;
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;
var tpl = this;
var root = tpl.root;
var buffer = tpl.buffer;
var scope = tpl.scope;
var runtime = tpl.runtime;
var name = tpl.name;
var pos = tpl.pos;
var data = scope.data;
var affix = scope.affix;
var nativeCommands = root.nativeCommands;
var utils = root.utils;
var callFnUtil = utils["callFn"];
var callCommandUtil = utils["callCommand"];
var rangeCommand = nativeCommands["range"];
var foreachCommand = nativeCommands["foreach"];
var forinCommand = nativeCommands["forin"];
var eachCommand = nativeCommands["each"];
var withCommand = nativeCommands["with"];
var ifCommand = nativeCommands["if"];
var setCommand = nativeCommands["set"];
var includeCommand = nativeCommands["include"];
var parseCommand = nativeCommands["parse"];
var extendCommand = nativeCommands["extend"];
var blockCommand = nativeCommands["block"];
var macroCommand = nativeCommands["macro"];
var debuggerCommand = nativeCommands["debugger"];
function func4(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += ' ';
var id5 = ((t=(affix.cls)) !== undefined ? affix.cls.DISABLED:((t = data.cls) !== undefined ? (t.DISABLED) :scope.resolveLooseUp(["cls","DISABLED"])));
buffer = buffer.writeEscaped(id5);
buffer.data += '';
return buffer;
}
function func1(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n    <a href="#" class="item ';
pos.line = 4;
var id2 = ((t=(affix.sel)) !== undefined ? affix.sel.ITEM:((t = data.sel) !== undefined ? (t.ITEM) :scope.resolveLooseUp(["sel","ITEM"])));
buffer = buffer.writeEscaped(id2);
buffer.data += ' ';
var id3 = ((t=(affix.cls)) !== undefined ? affix.cls.PREV:((t = data.cls) !== undefined ? (t.PREV) :scope.resolveLooseUp(["cls","PREV"])));
buffer = buffer.writeEscaped(id3);
buffer.data += '';
var id6 = ((t=(affix.disabled)) !== undefined ? t:(data.disabled));
buffer = ifCommand.call(tpl, scope, {params:[id6],fn: func4}, buffer);
buffer.data += '" aria-label="上一页"><</a>\n    ';
return buffer;
}
function func7(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n    <a href="#" class="item ';
pos.line = 18;
var id8 = ((t=(affix.sel)) !== undefined ? affix.sel.ITEM:((t = data.sel) !== undefined ? (t.ITEM) :scope.resolveLooseUp(["sel","ITEM"])));
buffer = buffer.writeEscaped(id8);
buffer.data += '" data-page="';
var id9 = ((t=(affix.value)) !== undefined ? t:(data.value));
buffer = buffer.writeEscaped(id9);
buffer.data += '">';
var id10 = ((t=(affix.value)) !== undefined ? t:(data.value));
buffer = buffer.writeEscaped(id10);
buffer.data += '</a>\n    ';
return buffer;
}
function func11(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
pos.line = 5;
var id12 = ((t=(affix.type)) !== undefined ? t:(data.type));
var exp14 = id12;
var id13 = ((t=(affix.itemType)) !== undefined ? affix.itemType.NEXT:((t = data.itemType) !== undefined ? (t.NEXT) :scope.resolveLooseUp(["itemType","NEXT"])));
exp14 = (id12)===(id13);
return exp14;
}
function func18(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += ' ';
var id19 = ((t=(affix.cls)) !== undefined ? affix.cls.DISABLED:((t = data.cls) !== undefined ? (t.DISABLED) :scope.resolveLooseUp(["cls","DISABLED"])));
buffer = buffer.writeEscaped(id19);
buffer.data += '';
return buffer;
}
function func15(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n    <a href="#" class="item ';
pos.line = 6;
var id16 = ((t=(affix.sel)) !== undefined ? affix.sel.ITEM:((t = data.sel) !== undefined ? (t.ITEM) :scope.resolveLooseUp(["sel","ITEM"])));
buffer = buffer.writeEscaped(id16);
buffer.data += ' ';
var id17 = ((t=(affix.cls)) !== undefined ? affix.cls.NEXT:((t = data.cls) !== undefined ? (t.NEXT) :scope.resolveLooseUp(["cls","NEXT"])));
buffer = buffer.writeEscaped(id17);
buffer.data += '';
var id20 = ((t=(affix.disabled)) !== undefined ? t:(data.disabled));
buffer = ifCommand.call(tpl, scope, {params:[id20],fn: func18}, buffer);
buffer.data += '" aria-label="下一页">></a>\n    ';
return buffer;
}
function func21(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
pos.line = 7;
var id22 = ((t=(affix.type)) !== undefined ? t:(data.type));
var exp24 = id22;
var id23 = ((t=(affix.itemType)) !== undefined ? affix.itemType.SKIP:((t = data.itemType) !== undefined ? (t.SKIP) :scope.resolveLooseUp(["itemType","SKIP"])));
exp24 = (id22)===(id23);
return exp24;
}
function func25(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n    <span class="skip-wrap">\n        共 <em>';
pos.line = 9;
var id26 = ((t=(affix.totalPage)) !== undefined ? t:((t = data.totalPage) !== undefined ? t :scope.resolveLooseUp(["totalPage"])));
buffer = buffer.writeEscaped(id26);
buffer.data += '</em> 页\n        到第 <input type="text" class="input ';
pos.line = 10;
var id27 = ((t=(affix.sel)) !== undefined ? affix.sel.SKIP_INPUT:((t = data.sel) !== undefined ? (t.SKIP_INPUT) :scope.resolveLooseUp(["sel","SKIP_INPUT"])));
buffer = buffer.writeEscaped(id27);
buffer.data += '" value="';
var id28 = ((t=(affix.value)) !== undefined ? t:(data.value));
buffer = buffer.writeEscaped(id28);
buffer.data += '" aria-label="页码输入框"/> 页\n        <button class="';
pos.line = 11;
var id29 = ((t=(affix.sel)) !== undefined ? affix.sel.ITEM:((t = data.sel) !== undefined ? (t.ITEM) :scope.resolveLooseUp(["sel","ITEM"])));
buffer = buffer.writeEscaped(id29);
buffer.data += ' ';
var id30 = ((t=(affix.cls)) !== undefined ? affix.cls.SKIP:((t = data.cls) !== undefined ? (t.SKIP) :scope.resolveLooseUp(["cls","SKIP"])));
buffer = buffer.writeEscaped(id30);
buffer.data += '" aria-label="确定跳转">确定</button>\n    </span>\n    ';
return buffer;
}
function func31(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
pos.line = 13;
var id32 = ((t=(affix.type)) !== undefined ? t:(data.type));
var exp34 = id32;
var id33 = ((t=(affix.itemType)) !== undefined ? affix.itemType.DOT:((t = data.itemType) !== undefined ? (t.DOT) :scope.resolveLooseUp(["itemType","DOT"])));
exp34 = (id32)===(id33);
return exp34;
}
function func35(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n    <span class="item dot">...</span>\n    ';
return buffer;
}
function func36(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
pos.line = 15;
var id37 = ((t=(affix.current)) !== undefined ? t:(data.current));
return id37;
}
function func38(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n    <span class="item current">';
pos.line = 16;
var id39 = ((t=(affix.value)) !== undefined ? t:(data.value));
buffer = buffer.writeEscaped(id39);
buffer.data += '</span>\n    ';
return buffer;
}
function func0(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\n    ';
pos.line = 3;
pos.line = 3;
var id40 = ((t=(affix.type)) !== undefined ? t:(data.type));
var exp42 = id40;
var id41 = ((t=(affix.itemType)) !== undefined ? affix.itemType.PREV:((t = data.itemType) !== undefined ? (t.PREV) :scope.resolveLooseUp(["itemType","PREV"])));
exp42 = (id40)===(id41);
buffer = ifCommand.call(tpl, scope, {params:[exp42],fn: func1,inverse: func7,elseIfs: [{test: func11,fn : func15},{test: func21,fn : func25},{test: func31,fn : func35},{test: func36,fn : func38}]}, buffer);
buffer.data += '\n    ';
return buffer;
}


buffer.data += '<div class="vc-pagination">\n    ';
pos.line = 2;
var id43 = ((t=(affix.items)) !== undefined ? t:((t = data.items) !== undefined ? t :scope.resolveLooseUp(["items"])));
buffer = eachCommand.call(tpl, scope, {params:[id43],fn: func0}, buffer);
buffer.data += '\n</div>';
return buffer;
};
ret.TPL_NAME = module.id || module.name;
});