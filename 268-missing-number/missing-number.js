/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n=nums.length;
    let xor1=0;
    let xor2=0;

    for(let i=0;i<n;i++){
        xor1^=i;
        xor2^=nums[i];
    }
    xor1^=n;

    return xor1^xor2;
};