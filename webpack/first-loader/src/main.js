// import img from './assets/img.webp';
import { multi } from "./math.ts";

console.debug('debug');
console.info('info');
console.log('log');
console.warn('warn');
console.error('error');

const d = multi(2, 3);

Promise.allSettled([
  wait(100),
  wait(110),
]).then(() => {
  console.debug(111)
})

function wait(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, duration)
  })
}