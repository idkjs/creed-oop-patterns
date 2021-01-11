let foo = hasMethodBar => hasMethodBar#@bar();

// foo({"baz": [@bs] (() => "fails to compile!")});

foo({"bar": (.) => "works"}) |> Js.log;

let foos =(string, hasMethodBar) => hasMethodBar#@bar(string)();

foos("works2",{"bar": (. string,()) => "works" ++ string}) |> Js.log;
