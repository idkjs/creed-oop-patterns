// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var List$CreedOopPatterns = require("./containers/list.bs.js");

function foldMap(m, f, g, fo) {
  return Caml_oo_curry.js4(76555601, 3, f, (function (a, b) {
                return Caml_oo_curry.js3(-998804985, 1, m, Curry._2(g, m, a), b);
              }), Caml_oo_curry.js1(79728384, 2, m), fo);
}

var m = List$CreedOopPatterns.monoid_list(undefined);

function foo(hasMethodBar) {
  return hasMethodBar.bar();
}

console.log(({
          bar: (function () {
              return "works";
            })
        }).bar());

exports.foldMap = foldMap;
exports.m = m;
exports.foo = foo;
/* m Not a pure module */
