// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");

function foldable__001($$class) {
  var ids = CamlinternalOO.get_method_labels($$class, [
        "toList",
        "null",
        "length",
        "foldr",
        "foldl"
      ]);
  var toList = ids[0];
  var $$null = ids[1];
  var length = ids[2];
  var foldr = ids[3];
  var foldl = ids[4];
  CamlinternalOO.set_methods($$class, [
        foldl,
        (function (self$1, g) {
            return Curry._2(self$1[0][foldr], self$1, (function (a, b) {
                          return Curry._2(g, b, a);
                        }));
          }),
        $$null,
        (function (self$1) {
            return Curry._3(self$1[0][foldr], self$1, (function (param, param$1) {
                          return true;
                        }), false);
          }),
        toList,
        (function (self$1) {
            return Curry._3(self$1[0][foldr], self$1, (function (a, b) {
                          return /* :: */[
                                  a,
                                  b
                                ];
                        }), /* [] */0);
          }),
        length,
        (function (self$1) {
            return Curry._3(self$1[0][foldr], self$1, (function (param, b) {
                          return 1 + b | 0;
                        }), 0);
          })
      ]);
  return (function (env, self) {
      return CamlinternalOO.create_object_opt(self, $$class);
    });
}

var foldable_ = /* class */[
  undefined,
  foldable__001,
  undefined,
  undefined
];

exports.foldable_ = foldable_;
/* No side effect */
