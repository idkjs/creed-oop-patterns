// open Higher;
// let foldMap = (m: monoid_('m), f: foldable_('f), g, fo) =>
//   f#foldr((a, b) => m#mappend(g(m, a), b), m#mempty, fo);

// let m = monoid_l();

// Js.log @@
// foldMap(
//   m,
//   foldable_l(),
//   (m, a) => m#mappend(L.inj @@ Cons(a, Null), m#mempty),
//   L.inj @@ Cons(2, Null)
// );

// Js.log @@ foldMap(monoid_l(), foldable_l(), (m, _: int) => m#mempty, L.inj @@ Cons(1, Null));

// let foo: type f a b. (functor_(f), a => b, app(a, f)) => app(b, f) = (f, g, a) => f#fmap(g, a);

// Js.log @@ foo(functor_e(), (x) => x + 1, E.inj(Right(1)));

let foo = hasMethodBar => hasMethodBar#@bar();

// foo({"baz": [@bs] (() => "fails to compile!")});

foo({"bar": (.) => "works"}) |> Js.log;