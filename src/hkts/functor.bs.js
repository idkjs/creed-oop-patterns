// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");

function functor__001($$class) {
  var ids = CamlinternalOO.get_method_labels($$class, [
        "leftFmap",
        "fmap"
      ]);
  var leftFmap = ids[0];
  var fmap = ids[1];
  CamlinternalOO.set_method($$class, leftFmap, (function (self$1, a) {
          return Curry._2(self$1[0][fmap], self$1, (function (param) {
                        return a;
                      }));
        }));
  return (function (env, self) {
      return CamlinternalOO.create_object_opt(self, $$class);
    });
}

var functor_ = /* class */[
  undefined,
  functor__001,
  undefined,
  undefined
];

exports.functor_ = functor_;
/* No side effect */
