/**
 * @param {number[]} nums
 * @return {number[]}
 */
 
// solution for https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/submissions/1268413035/
var findLonely = function(nums) {
    let result = [];
    nums = nums.sort((a, b) => a - b);
    for (let i=0; i < nums.length; i++) {
        let compared1 = i == nums.length-1 || Math.abs((nums[i+1] - (nums[i]))) >1;
        let compared2 = i == 0 || Math.abs((nums[i-1] - (nums[i]))) >1;
        if(compared1 && compared2) {
            result.push(nums[i])
        };
    };
    return result;
};

var findLonely = function(nums) {
    return nums.sort((a, b) => a - b).filter((el, i) => {
        return (i == nums.length-1 || Math.abs((nums[i+1] - (nums[i]))) >1) && 
            (i == 0 || Math.abs((nums[i-1] - (nums[i]))) >1);
    });
};

console.log(findLonely([10,7,10,5,5,8]));
