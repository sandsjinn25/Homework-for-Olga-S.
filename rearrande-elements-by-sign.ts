// solution for https://leetcode.com/problems/rearrange-array-elements-by-sign/
function rearrangeArray(nums: number[]): number[] {
    const positives: number[] = [];
    const negatives: number[] = [];
    for (let num of nums) {
        if (num > 0) {
            positives.push(num);
        } else {
            negatives.push(num);
        }
    }
    const result: number[] = [];
    for (let i = 0; i < positives.length; i++) {
        result.push(positives[i]);
        result.push(negatives[i]);
    }
    return result;
};