function findMaxSumSubArray(k: number, arr: number[]): number {
    let maxSum = 0;
    let currentSum = 0;
    const n = arr.length;
  
    for (let i = 0; i < k; i++) {
      currentSum += arr[i];
    }
    maxSum = currentSum;
  
    for (let i = k; i < n; i++) {
      currentSum = currentSum - arr[i - k] + arr[i];
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }
  
  console.log(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2])); 
  console.log(findMaxSumSubArray(2, [2, 3, 4, 1, 5]));   
  console.log(findMaxSumSubArray(2, [2, 1, 4, 1, 1]));  
  console.log(findMaxSumSubArray(3, [2, 1, 4, 1, 1]));   
  console.log(findMaxSumSubArray(4, [2, 1, 4, 1, 1]));   
  