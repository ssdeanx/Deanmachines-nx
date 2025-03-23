import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

const config = [
  js.configs.recommended,
  ...compat.config({
    extends: ['./.eslintrc.json']
  })
];

export default config;
