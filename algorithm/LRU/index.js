/**
 * Latest Recently Used
 * O(1) 时间复杂度 get/put
 * 这就需要：
 *  1. 缓存数据是按照最近访问时间排序的，数组特性
 *  2. 能够不用遍历即访问到任意节点，hashMap 特性
 * 最简单想到的是栈，读取数据时将该数据放到栈顶，然后超出maxSize时移除栈底数据，但这样操作效率是O(n)
 * 另外是hasMap，但数据是无序的
 * 然后是链表，但是链表不能快速访问到任意节点
 * 所以就需要一种结合数组和hashMap特性的混合结构，类似于java中的 LinkedHashMap
 */
module.exports = class LRU {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.linkedHashMap = new LinkedHashMap();
  }

  get(key) {
    if (!this.linkedHashMap.has(key)) {
      return;
    }

    const val = this.linkedHashMap.get(key)
    this.linkedHashMap.moveToTail(key);
    return val;
  }

  put(key, val) {
    if (this.linkedHashMap.getSize() === this.maxSize) {
      this.linkedHashMap.removeHead();
    }

    this.linkedHashMap.put(key, val);
  }
}

/**
 * 哈希链表
 */
const EMPTY = void 0;
const HEAD_VAL = -1;
const TAIL_VAL = -1;
class LinkedHashMap {
  constructor() {
    this.hashMap = new Map();

    // 初始化访问序列双向列表，越靠后的数据访问时间越近
    // head 和 tail 为固定的头尾节点，方便链表操作
    this.head = new LinkNode('head', HEAD_VAL);
    this.tail = new LinkNode('tail', TAIL_VAL);

    this.head.next = this.tail;
    this.tail.pre = this.head;
  }

  has(key) {
    return this.hashMap.has(key);
  }

  getSize() {
    return this.hashMap.size;
  }

  get(key) {
    const node = this.hashMap.get(key);
    // 如果key存在，将key节点提取到最近访问的位置并返回节点数据
    if (node) return node.val;
    // 如果key不存在，返回 Empty
    return EMPTY;
  }

  put(key, val) {
    let node = new LinkNode(key, val);
    // 如果key已存在，删除
    if (this.hashMap.has(key)) {
      this.remove(key);
    }
    
    node.pre = this.tail.pre;
    node.next = this.tail;
    this.tail.pre.next = node;
    this.tail.pre = node;

    this.hashMap.set(key, node);
  }

  remove(key) {
    const node = this.hashMap.get(key);

    if (!node) return;

    this.hashMap.delete(key);

    node.pre.next = node.next;
    node.next.pre = node.pre;
  }

  removeHead() {
    const key = this.head.next.key;
    this.remove(key);
  }

  moveToTail(key) {
    const node = this.hashMap.get(key);
    this.remove(key);
    this.put(key, node.val);
  }
}

/**
 * 双向列表节点
 */
class LinkNode {
  constructor(key, val, pre = null, next = null) {
    this.key = key;
    this.val = val;
    this.pre = pre;
    this.next = next;
  }
}