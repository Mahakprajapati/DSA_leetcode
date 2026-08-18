/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let n = nums.length;
    let j = 0;
    let minlen = Number.MAX_SAFE_INTEGER;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += nums[i];

        while (sum >= target ) {
            minlen = Math.min(minlen, i - j + 1);
            sum -= nums[j];
            j++;
        }
    }

    return minlen === Number.MAX_SAFE_INTEGER ? 0 : minlen;
};