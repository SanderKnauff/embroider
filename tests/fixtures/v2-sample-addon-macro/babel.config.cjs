module.exports = {
  plugins: [
    [
      'babel-plugin-ember-template-compilation',
      {
        targetFormat: 'hbs',
        transforms: [],
      },
    ]
  ],

  generatorOpts: {
    compact: false,
  },
};
