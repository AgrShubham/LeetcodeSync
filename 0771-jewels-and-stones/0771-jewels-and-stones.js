/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count=0;
    const jewelsSize= jewels.length;
    const stonesSize= stones.length;
    for(let i=0; i<jewelsSize; i++){
        for(let j=0; j<stones.length; j++){
            if(stones.charAt(j) === jewels.charAt(i)){
                count++;
            }
        }
    }
    return count;
};