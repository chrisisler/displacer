/**
 * The length that a symmetric rudiment should be split at equal to its string length?
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

const getNextCycle = (str) => str.slice(1) + str[0];
const addAccents = (str, len) => str.toLowerCase().split('').map((c, idx) => (idx % len === 0) ? c.toUpperCase() : c).join('');
const flipHands = (str) => str
    .replace(/r/g, 'x').replace(/l/g, 'r').replace(/x/g, 'l')
    .replace(/R/g, 'X').replace(/L/g, 'R').replace(/X/g, 'L');

function permuteRudiment(rudiment) {
    const len = rudiment.length;
    const isAlternating = rudiment[0] === rudiment[rudiment.length - 1];

    if (isAlternating) rudiment += flipHands(rudiment);

    let permutations = [];

    Array(...Array(len)).forEach(() => {
        permutations.push(addAccents(rudiment, len));
        rudiment = getNextCycle(rudiment);
    });
    if (isAlternating) {
        permutations = permutations.concat(permutations.map(flipHands));
    }
    console.log('permutations is:', permutations);
    return permutations;
}
permuteRudiment('rlrr');
