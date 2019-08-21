import filterClasses from './filterClasses';
import parseToSass from './parseToSass';
import compileCss from './compileCss';
import writeCss from './writeCss';
import { existsSync, unlinkSync } from 'fs';

export default (rootPath, cssCorePath, pathPattern, context) => {

    let classList,
        stylesSass,
        compiledCss,
        stylesCorePath;

    stylesCorePath = rootPath + '/node_modules/' + cssCorePath;

    classList = filterClasses(pathPattern);
    const cssLangPath = rootPath + '/app/assets/scss/styles-lang.css' || false;

    if (classList[0]) {
        stylesSass = parseToSass(classList);
        compiledCss = compileCss(stylesCorePath, stylesSass);
        writeCss(compiledCss, rootPath, context);
    } else if (existsSync(cssLangPath)) {
        unlinkSync(cssLangPath);
    }

    // context.extendBuild((config, { isDev, loaders: { scss } }) => {
    //     scss.data += compiledCss;
    //     if (isDev) {
    //         // config.plugins.push(
    //         //     new HotModuleReplacementPlugin()
    //         // );
    //     }
    // });

};
