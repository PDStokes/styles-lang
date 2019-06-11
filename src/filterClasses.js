import _ from 'lodash';
import fileSearch from './fileSearch';

export default (appDir) => {
    const classes = fileSearch(appDir);
    const acceptedLang = ['de', 'en', 'es', 'fr', 'it', 'no', 'pl', 'pt', 'tr'];

    return _.chain(classes)
        .flatten()
        .map(item => {
            return _.split(item, ' ');
        })
        .flatten()
        .uniq()
        .filter(item => {
            return item.includes('-lang-');
        })
        .map(item => {
            let fullName = '.' + item,
                extendableName = '.' + item.slice(0, item.indexOf('-lang')),
                lang = item.slice(item.indexOf('lang-') + 5),
                classObj;

            let validateLang = function (lang) {
                if (acceptedLang.includes(lang)) {
                    return {fullName, extendableName, lang};
                } else {
                    throw 'Error: Invalid Language Tag: ' + lang;
                }
            };

            try {
                classObj = validateLang(lang);
            } catch (e) {
                classObj = null;
                console.warn(e);
            }

            return classObj;
        })
        .value();
};
