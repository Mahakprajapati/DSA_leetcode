/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let n = height.length;

    let left = 0;
    let right = n - 1;

    let maxWater = 0;

    while (left <= right) {
        let len = Math.min(height[left], height[right]);
        let width = right - left;
        maxWater = Math.max(maxWater, len * width);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWater;
};