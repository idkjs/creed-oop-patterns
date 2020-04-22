// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");
var Higher$CreedOopPatterns = require("../src/higher.bs.js");

var shared = [
  "ident",
  "compose"
];

var shared$1 = [
  "compose",
  "ident"
];

function id(x) {
  return x;
}

function category_001($$class) {
  CamlinternalOO.get_method_labels($$class, shared);
  return (function (env, self) {
      return CamlinternalOO.create_object_opt(self, $$class);
    });
}

var category = /* class */[
  undefined,
  category_001,
  undefined,
  undefined
];

var Fun = Higher$CreedOopPatterns.Newtype2({ });

var $$class = CamlinternalOO.create_table(shared$1);

var ids = CamlinternalOO.get_method_labels($$class, shared);

var ident = ids[0];

var compose = ids[1];

var inh = CamlinternalOO.inherits($$class, 0, shared, 0, category, true);

var obj_init = inh[0];

CamlinternalOO.set_methods($$class, [
      ident,
      (function (self$2) {
          return id;
        }),
      compose,
      (function (self$2, f, g) {
          return (function (x) {
              return Curry._1(g, Curry._1(f, x));
            });
        })
    ]);

function obj_init$1(env) {
  var self = CamlinternalOO.create_object_opt(undefined, $$class);
  Curry._1(obj_init, self);
  return CamlinternalOO.run_initializers_opt(undefined, self, $$class);
}

CamlinternalOO.init_class($$class);

var category_fun = obj_init$1(undefined);

var Ip = Higher$CreedOopPatterns.Newtype2({ });

var $$class$1 = CamlinternalOO.create_table(shared$1);

var ids$1 = CamlinternalOO.get_method_labels($$class$1, shared);

var ident$1 = ids$1[0];

var compose$1 = ids$1[1];

var inh$1 = CamlinternalOO.inherits($$class$1, 0, shared, 0, category, true);

var obj_init$2 = inh$1[0];

CamlinternalOO.set_methods($$class$1, [
      ident$1,
      (function (self$3) {
          return {
                  ip: id
                };
        }),
      compose$1,
      (function (self$3, f, g) {
          return {
                  ip: (function (x) {
                      return Curry._1(g.ip, Curry._1(f.ip, x));
                    })
                };
        })
    ]);

function obj_init$3(env) {
  var self = CamlinternalOO.create_object_opt(undefined, $$class$1);
  Curry._1(obj_init$2, self);
  return CamlinternalOO.run_initializers_opt(undefined, self, $$class$1);
}

CamlinternalOO.init_class($$class$1);

var category_ip = obj_init$3(undefined);

var CL = Higher$CreedOopPatterns.Newtype3({ });

var class_tables = /* Cons */[
  undefined,
  undefined,
  undefined
];

function category_cat_left(param) {
  if (!class_tables[0]) {
    var $$class = CamlinternalOO.create_table(shared$1);
    var env = CamlinternalOO.new_variable($$class, "");
    var ids = CamlinternalOO.get_method_labels($$class, shared);
    var ident = ids[0];
    var compose = ids[1];
    var inh = CamlinternalOO.inherits($$class, 0, shared, 0, category, false);
    var obj_init = inh[0];
    CamlinternalOO.set_methods($$class, [
          ident,
          (function (self$4) {
              return /* Ident */0;
            }),
          compose,
          (function (self$4, f, j) {
              if (j) {
                return /* Compose */[
                        Curry._3(self$4[0][compose], self$4, f, j[0]),
                        j[1]
                      ];
              } else {
                return f;
              }
            })
        ]);
    var env_init = function (env$1) {
      var self = CamlinternalOO.create_object_opt(undefined, $$class);
      Curry._2(obj_init, env$1[1], self);
      self[env] = env$1[0];
      return CamlinternalOO.run_initializers_opt(undefined, self, $$class);
    };
    CamlinternalOO.init_class($$class);
    class_tables[0] = env_init;
  }
  return Curry._1(class_tables[0], [
              undefined,
              undefined
            ]);
}

function observe(cat, param) {
  if (param) {
    return Caml_oo_curry.js3(57915666, 1, cat, observe(cat, param[0]), param[1]);
  } else {
    return Caml_oo_curry.js1(930693872, 2, cat);
  }
}

function promote(c) {
  return /* Compose */[
          /* Ident */0,
          c
        ];
}

exports.id = id;
exports.category = category;
exports.Fun = Fun;
exports.category_fun = category_fun;
exports.Ip = Ip;
exports.category_ip = category_ip;
exports.CL = CL;
exports.category_cat_left = category_cat_left;
exports.observe = observe;
exports.promote = promote;
/* Fun Not a pure module */
