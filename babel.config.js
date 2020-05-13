module.exports = function (api) {
  api.cache(true);

  const presets = ['@babel/preset-env', '@babel/preset-react'];

  const plugins = ['@babel/transform-runtime']; // polyfil index.js에 안써줘도 됨

  return {
    presets,
    plugins,
  };
};
