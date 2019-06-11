import _ from 'lodash';

export default (cssString) => {

    let filteredCss = '';

    filteredCss = _.chain(cssString)
        .value();

    return filteredCss;
};
