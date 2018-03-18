/**
 * Input: 'rlrr'
 * Output: [
 *     'RlrrLrll'
 *     'LrrlRllr'
 *     'RrlrLlrl'
 *     'RlrlLrlr'
 *
 *     'LrllRlrr'
 *     'RllrLrrl'
 *     'LlrlRrlr'
 *     'LrlrRlrl' ]
 */

/**
 * "Shifts" the given String by one character.
 *
 * @example getNextCycle('rrll'); //=> 'rllr'
 * @example getNextCycle('rllr'); //=> 'llrr'
 * @example getNextCycle('rllr'); //=> 'llrr'
 *
 * @param {String} rudiment - A rudiment to 'permute'.
 * @returns {String} - The inputted rudiment, wrapped by one character.
 */
const getNextCycle = (rudiment) => rudiment.slice(1) + rudiment[0];

/**
 * @example addAccents('rlrr', 4); //=> 'Rlrr'
 * @example addAccents('rlrr', 3); //=> 'RlrR'
 * @example addAccents('rlrr', 2); //=> 'RlRr'
 * @example addAccents('rlrrlrll', 4); //=> 'RlrrLrll'
 *
 * @param {String} rudiment - A string containing 'l' and 'r' characters.
 * @param {Number} len - Capitalize a character after encountering this many characters.
 * @returns {String} - The inputed `rudiment` String with some accented characters.
 */
const addAccents = (rudiment, accentLen) => {
    const rudimentCharacters = rudiment.toLowerCase().split('');
    return rudimentCharacters
        .map((character, idx) => (idx % accentLen === 0) ? character.toUpperCase() : character)
        .join('');
};

/**
 * Flips 'l' with 'r', and flips 'L' with 'R'.
 *
 * @example flipHands('lr'); //=> 'rl'
 * @example flipHands('rlrr'); //=> 'lrll'
 * @example flipHands('Rlrr'); //=> 'Lrll'
 *
 * @param {String} rudiment
 * @returns {String} - `rudiment` but with the left and right hands swapped.
 */
const flipHands = (rudiment) => rudiment
    .replace(/r/g, 'x').replace(/l/g, 'r').replace(/x/g, 'l')
    .replace(/R/g, 'X').replace(/L/g, 'R').replace(/X/g, 'L');

/**
 * @param {String} x
 * @returns {Boolean} - If zeroth and last index are same character (case-sensitive).
 */
const getIsAmbidextrous = (x) => !!x && x[0] === x[x.length - 1];

/**
 * @param {String} rudiment - A string like 'rlrr'.
 * @returns {Array[String]} - A list of Strings.
 */
const getRudimentDisplacements = (rudiment) => {
    const len = rudiment.length;
    const isAmbidextrous = getIsAmbidextrous(rudiment);

    if (isAmbidextrous) {
        rudiment += flipHands(rudiment);
    }

    let permutations = [];

    [...Array(len)].forEach(() => {
        permutations.push(addAccents(rudiment, len));
        rudiment = getNextCycle(rudiment);
    });

    if (isAmbidextrous) {
        permutations = permutations.concat(permutations.map(flipHands));
    }
    return permutations;
};
module.exports = {
    getRudimentDisplacements,
    getIsAmbidextrous
};
