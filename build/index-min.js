KISSY.add("kg/vc-pagination/1.1.0/index",["base","kg/xtemplate/3.3.3/runtime","node"],function(e,a,t,n){var r,s,i=a("base"),l=a("kg/xtemplate/3.3.3/runtime"),o=a("node");r=function(e){var a=e=function t(e){function a(e,a,t){var n=e.data,r=e.affix;a.data+=" ";var s=(g=r.cls)!==t?r.cls.DISABLED:(g=n.cls)!==t?g.DISABLED:e.resolveLooseUp(["cls","DISABLED"]);return a=a.writeEscaped(s),a.data+="",a}function n(e,n,r){var s=e.data,i=e.affix;n.data+='\n    <a href="#" class="item ',T.line=4;var l=(g=i.sel)!==r?i.sel.ITEM:(g=s.sel)!==r?g.ITEM:e.resolveLooseUp(["sel","ITEM"]);n=n.writeEscaped(l),n.data+=" ";var o=(g=i.cls)!==r?i.cls.PREV:(g=s.cls)!==r?g.PREV:e.resolveLooseUp(["cls","PREV"]);n=n.writeEscaped(o),n.data+="";var p=(g=i.disabled)!==r?g:s.disabled;return n=w.call(t,e,{params:[p],fn:a},n),n.data+='" aria-label="上一页"><</a>\n    ',n}function r(e,a,t){var n=e.data,r=e.affix;a.data+='\n    <a href="#" class="item ',T.line=18;var s=(g=r.sel)!==t?r.sel.ITEM:(g=n.sel)!==t?g.ITEM:e.resolveLooseUp(["sel","ITEM"]);a=a.writeEscaped(s),a.data+='" data-page="';var i=(g=r.value)!==t?g:n.value;a=a.writeEscaped(i),a.data+='">';var l=(g=r.value)!==t?g:n.value;return a=a.writeEscaped(l),a.data+="</a>\n    ",a}function s(e,a,t){var n=e.data,r=e.affix;T.line=5;var s=(g=r.type)!==t?g:n.type,i=s,l=(g=r.itemType)!==t?r.itemType.NEXT:(g=n.itemType)!==t?g.NEXT:e.resolveLooseUp(["itemType","NEXT"]);return i=s===l}function i(e,a,t){var n=e.data,r=e.affix;a.data+=" ";var s=(g=r.cls)!==t?r.cls.DISABLED:(g=n.cls)!==t?g.DISABLED:e.resolveLooseUp(["cls","DISABLED"]);return a=a.writeEscaped(s),a.data+="",a}function l(e,a,n){var r=e.data,s=e.affix;a.data+='\n    <a href="#" class="item ',T.line=6;var l=(g=s.sel)!==n?s.sel.ITEM:(g=r.sel)!==n?g.ITEM:e.resolveLooseUp(["sel","ITEM"]);a=a.writeEscaped(l),a.data+=" ";var o=(g=s.cls)!==n?s.cls.NEXT:(g=r.cls)!==n?g.NEXT:e.resolveLooseUp(["cls","NEXT"]);a=a.writeEscaped(o),a.data+="";var p=(g=s.disabled)!==n?g:r.disabled;return a=w.call(t,e,{params:[p],fn:i},a),a.data+='" aria-label="下一页">></a>\n    ',a}function o(e,a,t){var n=e.data,r=e.affix;T.line=7;var s=(g=r.type)!==t?g:n.type,i=s,l=(g=r.itemType)!==t?r.itemType.SKIP:(g=n.itemType)!==t?g.SKIP:e.resolveLooseUp(["itemType","SKIP"]);return i=s===l}function p(e,a,t){var n=e.data,r=e.affix;a.data+='\n    <span class="skip-wrap">\n        共 <em>',T.line=9;var s=(g=r.totalPage)!==t?g:(g=n.totalPage)!==t?g:e.resolveLooseUp(["totalPage"]);a=a.writeEscaped(s),a.data+='</em> 页\n        到第 <input type="text" class="input ',T.line=10;var i=(g=r.sel)!==t?r.sel.SKIP_INPUT:(g=n.sel)!==t?g.SKIP_INPUT:e.resolveLooseUp(["sel","SKIP_INPUT"]);a=a.writeEscaped(i),a.data+='" value="';var l=(g=r.value)!==t?g:n.value;a=a.writeEscaped(l),a.data+='" aria-label="页码输入框"/> 页\n        <button class="',T.line=11;var o=(g=r.sel)!==t?r.sel.ITEM:(g=n.sel)!==t?g.ITEM:e.resolveLooseUp(["sel","ITEM"]);a=a.writeEscaped(o),a.data+=" ";var p=(g=r.cls)!==t?r.cls.SKIP:(g=n.cls)!==t?g.SKIP:e.resolveLooseUp(["cls","SKIP"]);return a=a.writeEscaped(p),a.data+='" aria-label="确定跳转">确定</button>\n    </span>\n    ',a}function u(e,a,t){var n=e.data,r=e.affix;T.line=13;var s=(g=r.type)!==t?g:n.type,i=s,l=(g=r.itemType)!==t?r.itemType.DOT:(g=n.itemType)!==t?g.DOT:e.resolveLooseUp(["itemType","DOT"]);return i=s===l}function c(e,a){e.data,e.affix;return a.data+='\n    <span class="item dot">...</span>\n    ',a}function d(e,a,t){var n=e.data,r=e.affix;T.line=15;var s=(g=r.current)!==t?g:n.current;return s}function v(e,a,t){var n=e.data,r=e.affix;a.data+='\n    <span class="item current">',T.line=16;var s=(g=r.value)!==t?g:n.value;return a=a.writeEscaped(s),a.data+="</span>\n    ",a}function f(e,a,i){var f=e.data,m=e.affix;a.data+="\n    ",T.line=3,T.line=3;var I=(g=m.type)!==i?g:f.type,E=I,h=(g=m.itemType)!==i?m.itemType.PREV:(g=f.itemType)!==i?g.PREV:e.resolveLooseUp(["itemType","PREV"]);return E=I===h,a=w.call(t,e,{params:[E],fn:n,inverse:r,elseIfs:[{test:s,fn:l},{test:o,fn:p},{test:u,fn:c},{test:d,fn:v}]},a),a.data+="\n    ",a}{var g,t=this,m=t.root,I=t.buffer,E=t.scope,T=(t.runtime,t.name,t.pos),h=E.data,P=E.affix,y=m.nativeCommands,S=m.utils,_=(S.callFn,S.callCommand,y.range,y.foreach,y.forin,y.each),w=(y["with"],y["if"]);y.set,y.include,y.parse,y.extend,y.block,y.macro,y["debugger"]}I.data+='<div class="vc-pagination">\n    ',T.line=2;var x=(g=P.items)!==e?g:(g=h.items)!==e?g:E.resolveLooseUp(["items"]);return I=_.call(t,E,{params:[x],fn:f},I),I.data+="\n</div>",I};return a.TPL_NAME=n.id||n.name,e}(),s=function(e){var a=o.all,t=i,n=l,s=r,p={DISABLED:"disabled",NEXT:"next",PREV:"prev",ITEM:"item",SKIP:"skip"},u={ITEM:"J_Item",SKIP_INPUT:"J_SkipInput"},c={PREV:"prev",NEXT:"next",DOT:"dot",SKIP:"skip",PAGE:"page"},d={sum:function(e){for(var a=0,t=0,n=e.length;n>t;t++)a+=parseInt(e[t]);return a}},v=t.extend({initializer:function(){var e=this;return e.set("$container",a(e.get("$container"))),e._render(),e._bind(),e},_pushItemByRange:function(e,a,t,n){for(var r=e;a>=r;r++)t.push({value:r,current:n===r,type:c.PAGE})},_render:function(){var e=this;if(e.get("autoRender")){var a=e.get("totalPage"),t=e.get("currentPage"),r=e.get("continuity"),s=e.get("showNextAndPrev"),i=e.get("showNumbers"),l=e.get("showSkip"),o=[];if(i)if(0===r.length||d.sum(r)+2>a)e._pushItemByRange(1,a,o,t);else{var v,f=r[0],g=r[1],m=r[2],I=r[3];if(f+g+1>=t)e._pushItemByRange(1,t,o,t);else if(f>0&&e._pushItemByRange(1,f,o,t),o.push({type:c.DOT}),g>0){var E=t-g;v=a-m-I-t,0>v&&(E+=v),e._pushItemByRange(1>E?1:E,t,o,t)}if(m+I>=a-t)e._pushItemByRange(t+1,a,o,t);else{if(m>0){var T=t+m;v=t-1-f-g,0>v&&(T-=v),e._pushItemByRange(t+1,T>a?a:T,o,t)}o.push({type:c.DOT}),I>0&&e._pushItemByRange(a-I+1,a,o,t)}}s&&(o.push({type:c.NEXT,disabled:t===a}),o.unshift({type:c.PREV,disabled:1===t})),l&&o.push({type:c.SKIP,value:t}),e.get("$container").html(new n(e.get("tpl")).render({totalPage:a,items:o,itemType:c,cls:p,sel:u}))}},_bind:function(){var e=this,t=e.get("$container");t.delegate("click tap","."+u.ITEM,function(t){t.halt(),e._eventHandle(a(t.currentTarget))})},_eventHandle:function(e){var a=this;e.hasClass(p.DISABLED)||a.get("freeze")||(e.hasClass(p.SKIP)&&a.get("$skipNumInput")[0].focus(),a.skip(a._getPageByTarget(e)))},_getPageByTarget:function(e){var a=this,t=1;return t=e.hasClass(p.NEXT)?a.get("currentPage")+1:e.hasClass(p.PREV)?a.get("currentPage")-1:e.hasClass(p.SKIP)?a.get("$skipNumInput").val():parseInt(e.attr("data-page"))},_validate:function(e){var a=this,t=a.get("totalPage"),n=parseInt(e),r=!0;return(isNaN(n)||n>t||1>n)&&(a.fire("skip:error",{page:e}),r=!1),r},skip:function(e){{var a=this,t=parseInt(e);a.get("totalPage")}if(a._validate(e)){var n=a.fire("before:skip",{page:t});n!==!1&&(a.set("currentPage",t),a._render(),a.fire("skip",{page:t}))}},show:function(){this.get("$container").show()},hide:function(){this.get("$container").hide()},destroy:function(){var e=this,a=e.get("$container");a.detach("click"),a.remove()}},{ATTRS:{$container:{value:"#J_VCPagination"},$skipNumInput:{value:"",getter:function(){return a("."+u.SKIP_INPUT,this.get("$container"))}},currentPage:{value:1},totalPage:{value:10},tpl:{value:s},showNextAndPrev:{value:!0},showNumbers:{value:!0},showSkip:{value:!0},continuity:{value:[2,2,2,0]},autoRender:{value:!0},freeze:{value:!1}}});return e=v}(),n.exports=s});