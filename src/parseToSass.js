
export default (styleObjects) => {

    return styleObjects.reduce((combinedClassList, classObj) => {
        if (classObj !== null) {
            combinedClassList += ` ${classObj.fullName}:lang(${classObj.lang}) { @extend ${classObj.extendableName} } \n`;
        }

        return combinedClassList;
    }, '');
};
