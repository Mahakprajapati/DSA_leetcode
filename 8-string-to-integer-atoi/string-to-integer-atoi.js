/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0, n = s.length, sign = 1, result = 0;
    
    // Skip whitespaces
    while (i < n && s[i] === ' ') i++;
    
    // Sign detection
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // Parse digits
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        result =10*result+(s[i]-'0');
        i++;
    }
    let num = Math.pow(2, 31) ;
     if (result * sign > num - 1){
        return num - 1;
     }else if (result * sign < -num) {
        return -num;
        }
    

    return result * sign;
};