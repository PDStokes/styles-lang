import stylesLang from './src/main';
import { HotModuleReplacementPlugin } from 'webpack';

export default function nuxtStylesLang (moduleOptions) {

    const rootPath = moduleOptions.rootPath || '/',
        pathPattern = moduleOptions.pathPattern;

    let cssCorePath = '';

    for (const item of this.options.css) {
        if (item.includes('styles-core')) {
            cssCorePath = item;
        }
    }

    stylesLang(rootPath, cssCorePath, pathPattern, this);

    // this.extendBuild((config, { isDev }) => {
    //     if (isDev) {
    //         this.options.plugins.push(
    //             new HotModuleReplacementPlugin()
    //         );
    //     }
    // });

    // this.nuxt.hook('render:done', () => {
    //     console.info(module.hot);
    // });

}

module.exports.meta = require('./package.json');

