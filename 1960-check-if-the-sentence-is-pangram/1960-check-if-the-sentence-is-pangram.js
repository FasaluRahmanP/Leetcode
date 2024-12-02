/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const uniqueletter=new Set()
    for(let i=0;i<sentence.length;i++){
        uniqueletter.add(sentence[i])
    }
    return uniqueletter.size===26
};