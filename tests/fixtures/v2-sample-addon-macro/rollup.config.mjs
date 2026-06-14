import { babel } from '@rollup/plugin-babel';
import { Addon } from '@embroider/addon-dev/rollup';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';

const addon = new Addon({
  srcDir: 'src',
  destDir: 'dist',
});

const rootDirectory = dirname(fileURLToPath(import.meta.url));
const babelConfig = resolve(rootDirectory, './babel.config.cjs');

export default {
  output: addon.output(),

  plugins: [
    addon.publicEntrypoints(['components/**/*.js']),

    addon.appReexports([
      'components/**/*.js',
    ]),

    addon.dependencies(),

    babel({
      extensions: ['.js', '.gjs'],
      babelHelpers: 'bundled',
      configFile: babelConfig,
    }),

    addon.hbs(),
    addon.gjs(),

    addon.clean(),
  ],
};
