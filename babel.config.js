module.exports = function func(api) {
  api.cache(true);

  const presets = ['@babel/preset-env', '@babel/preset-react'];

  const plugins = [];

  return {
    presets,
    plugins,
  };
};
