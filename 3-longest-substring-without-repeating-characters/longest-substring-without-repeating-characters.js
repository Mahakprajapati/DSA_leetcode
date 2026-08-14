/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxlen = 0
    let map = new Map();

    let i = 0, j = 0;
    let n = s.length;

    while (j < n) {

       if(map.has(s[j])){
        if (map.get(s[j]) >= i && map.get(s[j]) <= j) {
                i = map.get(s[j]) + 1;
                map.set(s[j], j);
            }
       }
       
        map.set(s[j], j);
        maxlen = Math.max(maxlen, j - i + 1);
        j++;
    }

    return maxlen;
};