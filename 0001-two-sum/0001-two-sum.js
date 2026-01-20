/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    // // # Brute force Approach
    // for(let i=0; i< nums.length; i++)
    // {
    //     for( let j=i+1; j< nums.length; j++)
    //     {
    //         if(nums[j]=== target-nums[i])
    //         {
    //             return [i,j]
    //         }
    //     }
    // }
    // return []


    // // Optimized Approach: using map(hash table)
    // First we need to make a hash table using map that stores elements and its index respectively.
    const map=new Map()
    for(let i=0; i<=nums.length; i++)
    {
        map.set(nums[i], i)
    }
    // Now after the hash table is ready, we w8ill implement the logic.
    
    for(let i=0; i<=nums.length; i++)
    {
        const complement= target- nums[i]
        if(map.has(complement) && map.get(complement)!== i)
        {
            return [i, map.get(complement)]
        }
    }
return []
};