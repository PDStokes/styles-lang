import sass from 'node-sass';
import filterCss from './filterCss';

export default (stylesCorePath, stylesSass) => {

    let compiledCss,
        filteredCss;

    const stylesCore = sass.renderSync({
        file: stylesCorePath,
    });

    stylesSass = stylesCore.css.toString() + stylesSass;

    compiledCss = sass.renderSync({
        data: stylesSass,
        outputStyle: 'expanded',
        indentWidth: 4,
    });

    filteredCss = filterCss(compiledCss.css.toString());

    return filteredCss;
};
