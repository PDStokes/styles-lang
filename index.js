import filterClasses from './src/filterClasses';
import parseToSass from './src/parseToSass';
// import filterCss from './src/filterCss';
import sass from 'node-sass';

export default function nuxtStylesLang (moduleOptions) {

    const rootPath = moduleOptions.rootPath || '/';

    const cssPath = () => {
        for (const item of this.options.css) {
            if (item.includes('styles-core')) {
                return item;
            }
        }

        return '';
    };

    let classList = [],
        stylesSass,
        stylesCss;

    classList = filterClasses(moduleOptions.pathPattern);

    if (classList) {
        stylesSass = parseToSass(classList);

        const stylesCore = sass.renderSync({
            file: rootPath + '/node_modules/' + cssPath(),
        });

        stylesSass = stylesCore.css.toString() + stylesSass;

        stylesCss = sass.renderSync({
            data: stylesSass,
        });

        console.info(stylesCss.css.toString());

        // console.info(filterCss(stylesCss.css.toString()));

    }

}

// module.exports.meta = require('./package.json');
