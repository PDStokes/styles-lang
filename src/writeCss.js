import fs from 'fs';

export default (compiledCss, rootPath, context) => {

    const fileName = rootPath + '/app/assets/scss/styles-lang.css';

    try {
        fs.writeFile(fileName, compiledCss, (err) => {
            if (err) {
                throw 'Styles Lang: File Write Failed: ' + err;
            } else {
                if (!context.options.css.includes(fileName)) {
                    context.options.css.push(fileName);
                }
            }
        });
    } catch (e) {
        console.warn(e);
    }

};
