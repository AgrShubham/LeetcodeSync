/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let count=0;
    let subs="";
    s=s.trim();
    if(s.length === 1){
        return 1;
    }
    let i=s.length-1;
    while(s[i]!== " " && i>=0){
        count++;
        i--;
        subs= s.charAt(i) + subs;
    }
    return count;
};