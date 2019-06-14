import _ from 'lodash';

export default (cssString) => {

    let filteredCss = '';

    filteredCss = _.chain(cssString)
        .split('\n\n')
        .filter(item => {
            return item.includes('-lang-');
        })
        .join('\n\n')
        .replace(new RegExp(/[.](\S+\s*)(?:,\s{1})/, 'g'), '')
        .value();

    return filteredCss + '\n';
};
