class EmptyPlugin {
  constructor() {
    console.debug('EmptyPlugin constructor')
  }

  apply(compiler) {
    console.debug('EmptyPlugin apply');

    // emit 为 AsyncSeriesHook(异步串行)钩子，可以接受同步和异步钩子
    compiler.hooks.emit.tap('EmptyPlugin', (compilation) => {
      console.debug('EmptyPlugin apply: 给 emit 事件注册一个同步钩子');
    })

    compiler.hooks.emit.tapAsync('EmptyPlugin', (compilation, callback) => {
      console.debug('EmptyPlugin apply: 给 emit 事件注册一个异步钩子');
      setTimeout(() => {
        console.debug('EmptyPlugin apply emit tapAsync 执行完毕');
        callback();
      }, 100);
    })

    compiler.hooks.emit.tapPromise('EmptyPlugin', (compilation) => {
      return new Promise((resolve) => {
        console.debug('EmptyPlugin apply: 给 emit 事件注册一个Promise钩子');
        setTimeout(() => {
          console.debug('EmptyPlugin apply emit tapPromise 执行完毕');
          resolve();
        }, 200);
      })
    })

    // make 为 AsyncParallelHook(异步并行)钩子，可以接受同步和异步钩子
    compiler.hooks.make.tap('EmptyPlugin', (compilation) => {
      console.debug('EmptyPlugin apply: 给 make 事件注册一个同步钩子');
      compilation.hooks.seal.tap('EmptyPlugin', () => {
        console.debug('EmptyPlugin apply: 给 make 事件中的compilation seal注册一个同步钩子');
      })
    })

    compiler.hooks.make.tapAsync('EmptyPlugin', (compilation, callback) => {
      console.debug('EmptyPlugin apply: 给 make 事件注册一个异步钩子');
      setTimeout(() => {
        console.debug('EmptyPlugin apply make tapAsync 执行完毕');
        callback();
      }, 100);
    })

    compiler.hooks.make.tapPromise('EmptyPlugin', (compilation) => {
      return new Promise((resolve) => {
        console.debug('EmptyPlugin apply: 给 make 事件注册一个Promise钩子');
        setTimeout(() => {
          console.debug('EmptyPlugin apply make tapPromise 执行完毕');
          resolve();
        }, 200);
      })
    })
  }
}

module.exports = EmptyPlugin;
