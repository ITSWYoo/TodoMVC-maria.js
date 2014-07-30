/**
 * 앞 뒤 공백을 제거하여 반환한다.
 * @param {string} str
 * @returns {string}
 */
nts.trim = function(str) {
    return str.replace(/^\s+|\s+$/g, '');
};

/**
 * 문자 '&'와 '<'을 이스케이프하여 반환한다.
 * @param {string} str
 * @returns {string}
 */
nts.escapeHTML = function(str){
    return str.replace('&', '&amp;').replace('<', '&lt;');
};

/**
 * 정수가 엔터키에 해당하는지 검증하여 반환한다.
 * @param {number} keyCode
 * @returns {boolean}
 */
nts.isEnterKeyCode = function(keyCode){
    return keyCode === 13;
};