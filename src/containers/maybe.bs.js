// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");
var Monad$CreedOopPatterns = require("../hkts/monad.bs.js");
var Higher$CreedOopPatterns = require("../higher.bs.js");
var Functor$CreedOopPatterns = require("../hkts/functor.bs.js");
var Applicative$CreedOopPatterns = require("../hkts/applicative.bs.js");

var shared = [
  "pure",
  "apply"
];

var O = Higher$CreedOopPatterns.Newtype1({ });

var $$class = CamlinternalOO.create_table([
      "fmap",
      "leftFmap"
    ]);

var fmap = CamlinternalOO.get_method_label($$class, "fmap");

var inh = CamlinternalOO.inherits($$class, 0, ["fmap"], ["leftFmap"], Functor$CreedOopPatterns.functor_, true);

var obj_init = inh[0];

CamlinternalOO.set_method($$class, fmap, (function (self$1, g, o) {
        if (o !== undefined) {
          return Caml_option.some(Curry._1(g, Caml_option.valFromOption(o)));
        }
        
      }));

function obj_init$1(env) {
  var self = CamlinternalOO.create_object_opt(undefined, $$class);
  Curry._1(obj_init, self);
  return CamlinternalOO.run_initializers_opt(undefined, self, $$class);
}

CamlinternalOO.init_class($$class);

var functor_o = obj_init$1(undefined);

var $$class$1 = CamlinternalOO.create_table([
      "pure",
      "liftA2",
      "apply"
    ]);

var ids = CamlinternalOO.get_method_labels($$class$1, shared);

var pure = ids[0];

var apply = ids[1];

var inh$1 = CamlinternalOO.inherits($$class$1, 0, shared, ["liftA2"], Applicative$CreedOopPatterns.applicative_, true);

var obj_init$2 = inh$1[0];

CamlinternalOO.set_methods($$class$1, [
      pure,
      (function (self$2, a) {
          return Caml_option.some(a);
        }),
      apply,
      (function (self$2, f, a) {
          if (f !== undefined && a !== undefined) {
            return Caml_option.some(Curry._1(f, Caml_option.valFromOption(a)));
          }
          
        })
    ]);

function obj_init$3(env) {
  var self = CamlinternalOO.create_object_opt(undefined, $$class$1);
  Curry._2(obj_init$2, self, functor_o);
  return CamlinternalOO.run_initializers_opt(undefined, self, $$class$1);
}

CamlinternalOO.init_class($$class$1);

var applicative_o = obj_init$3(undefined);

var $$class$2 = CamlinternalOO.create_table([
      "bind",
      "return",
      "rightBind"
    ]);

var bind = CamlinternalOO.get_method_label($$class$2, "bind");

var inh$2 = CamlinternalOO.inherits($$class$2, 0, ["bind"], [
      "return",
      "rightBind"
    ], Monad$CreedOopPatterns.monad_, true);

var obj_init$4 = inh$2[0];

CamlinternalOO.set_method($$class$2, bind, (function (self$3, f, m) {
        if (m !== undefined) {
          return Curry._1(f, Caml_option.valFromOption(m));
        }
        
      }));

function obj_init$5(env) {
  var self = CamlinternalOO.create_object_opt(undefined, $$class$2);
  Curry._2(obj_init$4, self, applicative_o);
  return CamlinternalOO.run_initializers_opt(undefined, self, $$class$2);
}

CamlinternalOO.init_class($$class$2);

var monad_o = obj_init$5(undefined);

exports.O = O;
exports.functor_o = functor_o;
exports.applicative_o = applicative_o;
exports.monad_o = monad_o;
/* O Not a pure module */
