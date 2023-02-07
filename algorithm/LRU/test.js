const LRU = require('./index.js');

const lru = new LRU(2);
log('new instance');

lru.put('1', 1);
log('put 1');

lru.put('2', 2);
log('put 2');

lru.put('3', 3);
log('put 3');

let val = lru.get('1');
log('get 1');
console.debug(val)

val = lru.get('2');
log('get 2');
console.debug(val)

function log(name) {
  console.log()
  console.debug('-----', name || '', '-----')
  const hashMap = lru.linkedHashMap.hashMap;
  const obj = {};
  Array.from(hashMap.keys()).forEach(k => {
    obj[k] = hashMap.get(k).val;
  });
  console.log('hashMap', hashMap.size, JSON.stringify(obj, null, 2))

  let node = lru.linkedHashMap.head.next;
  let text = 'head --> ';
  while(node && node.key !== 'head' && node.key !== 'tail') {
    text += `${node.val} --> `;
    node = node.next;
  }
  text += 'tail';

  console.log('link', text)
}
