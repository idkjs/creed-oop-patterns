// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");

function monad__001($$class) {
  var a = CamlinternalOO.new_variable($$class, "");
  var ids = CamlinternalOO.get_method_labels($$class, [
        "rightBind",
        "return",
        "bind"
      ]);
  var rightBind = ids[0];
  var $$return = ids[1];
  var bind = ids[2];
  CamlinternalOO.set_methods($$class, [
        $$return,
        (function (self$1, x) {
            var tmp = self$1[a];
            return Caml_oo_curry.js2(-899608328, 1, tmp, x);
          }),
        rightBind,
        (function (self$1, a, b) {
            return Curry._3(self$1[0][bind], self$1, (function (param) {
                          return b;
                        }), a);
          })
      ]);
  return (function (env, self, a$1) {
      var self$1 = CamlinternalOO.create_object_opt(self, $$class);
      self$1[a] = a$1;
      return self$1;
    });
}

var monad_ = /* class */[
  undefined,
  monad__001,
  undefined,
  undefined
];

exports.monad_ = monad_;
/* No side effect */
