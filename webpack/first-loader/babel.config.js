module.exports = {
  presets: [
    // [
    //   '@babel/preset-typescript',
    //   {
    //     isTSX: true,
    //     allExtensions: true,
    //   },
    // ],
    [
      '@babel/preset-env',
      {
        // module: false,
        // useBuiltIns: 'usage',
        // corejs: { version: 3, proposals: true },
        debug: true,
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', {
      corejs: {
        version: 3,
        proposals: true,
      },
    }],
    // ['@babel/plugin-proposal-decorators', { legacy: true }],
  ],
};
