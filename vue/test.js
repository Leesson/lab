import { reactive } from "./reactive.js";
import { effect } from "./effect.js";

const o = reactive({a: 1, b: 2, d: {e: 1}});
const o2 = reactive({c: 1});

// effect(() => {
//   console.debug('effect o.b:', o.b)
// })

// effect(() => {
//   console.debug('effect o2.c:', o2.c)
// })
console.debug('o.b:', o.d.e)
o.d.e = 'e';
// o.b = 'b';
// o2.c = 'c';