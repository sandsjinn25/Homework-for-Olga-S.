/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */

// solution https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/
var divideString = function(s, k, fill) {
    let result = []; 
    let currentGroup = "";
    
    for (let i = 0; i < s.length; i++) {
        currentGroup += s[i];
        if (currentGroup.length === k) {
            result.push(currentGroup);
            currentGroup = ""; 
        }
    }

    if (currentGroup.length > 0) {
        while (currentGroup.length < k) {
            currentGroup += fill;
        }
        result.push(currentGroup);
    }

    return result; 
};