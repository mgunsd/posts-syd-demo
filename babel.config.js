module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            assets: './src/assets',
            components: './src/components',
            commons: './src/components/a-commons',
            context: './src/context',
            hooks: './src/hooks',
            screens: './src/screens',
            styles: './src/styles',
          },
        },
      ],
    ],
  };
};
