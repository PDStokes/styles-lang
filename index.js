/* eslint-disable no-unused-vars */
import sass from 'node-sass';
import fileSearch from './src/fileSearch';

export default function nuxtStylesLang (moduleOptions) {
    console.info(fileSearch(moduleOptions.pathPattern));
}

module.exports.meta = require('./package.json');
