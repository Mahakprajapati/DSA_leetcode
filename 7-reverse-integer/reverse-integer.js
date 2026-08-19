/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNeg = false;
    if(x<0){
        isNeg = true;
        x*=-1;
    }

    let res = 0;

    while(x>0){
        res = (res*10)+(x%10);
        x=Math.floor(x/10);
    }

    if(res>(Math.pow(2,31))-1){
        return 0;
    }

    return isNeg ? -res :res;
};