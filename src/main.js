import filterClasses from './filterClasses';
import parseToSass from './parseToSass';
import compileCss from './compileCss';
import writeCss from './writeCss';

export default (rootPath, cssCorePath, pathPattern, context) => {

    let classList,
        stylesSass,
        compiledCss,
        stylesCorePath;

    stylesCorePath = rootPath + '/node_modules/' + cssCorePath;

    classList = filterClasses(pathPattern);

    if (classList) {
        stylesSass = parseToSass(classList);
        compiledCss = compileCss(stylesCorePath, stylesSass);
        writeCss(compiledCss, rootPath, context);
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
