(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["base.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["tab"], 
[], 
function (l_tab, kwargs) {
frame = frame.push(true);
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("tab", l_tab);
var t_2 = "";t_2 += "\n<nav class=\"nav\">\n  <ul class=\"nav-list\">\n    ";
frame = frame.push();
var t_5 = runtime.contextOrFrameLookup(context, frame, "navs");
if(t_5) {var t_4 = t_5.length;
for(var t_3=0; t_3 < t_5.length; t_3++) {
var t_6 = t_5[t_3];
frame.set("nav", t_6);
frame.set("loop.index", t_3 + 1);
frame.set("loop.index0", t_3);
frame.set("loop.revindex", t_4 - t_3);
frame.set("loop.revindex0", t_4 - t_3 - 1);
frame.set("loop.first", t_3 === 0);
frame.set("loop.last", t_3 === t_4 - 1);
frame.set("loop.length", t_4);
t_2 += "\n    <li class=\"nav-item\">\n      <a href=\"";
t_2 += runtime.suppressValue(runtime.memberLookup((t_6),"path"), env.opts.autoescape);
t_2 += "\"";
if((runtime.memberLookup((t_6),"name") == l_tab)) {
t_2 += " class=\"active\"";
;
}
t_2 += ">\n        ";
t_2 += runtime.suppressValue(runtime.memberLookup((t_6),"name"), env.opts.autoescape);
t_2 += "\n      </a>\n    </li>\n    ";
;
}
}
frame = frame.pop();
t_2 += "\n  </ul>\n</nav>\n";
;
frame = frame.pop();
return new runtime.SafeString(t_2);
});
context.addExport("nav");
context.setVariable("nav", macro_t_1);
output += "\n\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <title>BootCSS</title>\n    <link rel=\"stylesheet\" href=\"./bootcss.css\">\n    <link rel=\"stylesheet\" href=\"./site.css\">\n  </head>\n  <body class=\"sans-serif\">\n    <section class=\"brand\">\n      <div class=\"container\">\n        <h1 class=\"site-name\">\n          ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
output += "\n        </h1>\n        ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("nav"))(env, context, frame, runtime, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += t_7;
output += "\n      </div>\n    </section>\n    <section class=\"main\">\n      <div class=\"container\">\n        ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("main"))(env, context, frame, runtime, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
output += t_9;
output += "\n      </div>\n    </section>\n  </body>\n</html>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_nav(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_main(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n        ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_nav: b_nav,
b_main: b_main,
root: root
};

})();
})();
