function pairSum(nums: number[], target: number): [number, number] | String {
    const numArray: Array<number>[] = [];
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      for (const [index, num] of numArray) {
        if (num === complement) {
          return [index, i];
        }
      }
      numArray.push([i, nums[i]]);
    }
    return "No Solution";
  }
  
  console.log(pairSum([1, 2, 3, 4, 6], 6)); 
  console.log(pairSum([2, 5, 9, 11], 11));
  console.log(pairSum([1, 3, 5, 7], 12)); 
  console.log(pairSum([1, 4, 6, 8], 10)); 
  console.log(pairSum([1, 5, 6, 7], 6));
  