/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let copynums = nums;
    copynums.sort((a, b) => a - b);
    let res = [];
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let j = i + 1;
        let k = n - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } else {
                res.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;

                while (nums[j] === nums[j - 1] && j < k) {
                    j++;
                }
                 while (nums[k] === nums[k +1] && j < k) {
                   k--;
                }
            }
            

        }


    }
    return res;
};