/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    val=init
    for(let i=0; i< nums.length; i++)
    {
        val=fn(val, nums[i])
    }
    return val;
};