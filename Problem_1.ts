function fiboTopDown(num: number): number {
    let memo: Array<number> = [0, 1];
  
    for (let i=2; i <=num; i++){
        if (num <=1){
            memo[i] = i
        }else {
            memo[i] = memo[i - 1] + memo[i - 2];
        }
    }
    return memo[num]
  }
  
  console.log(fiboTopDown(0)); 
  console.log(fiboTopDown(1)); 
  console.log(fiboTopDown(2)); 
  console.log(fiboTopDown(3)); 
  console.log(fiboTopDown(5)); 
  console.log(fiboTopDown(6)); 
  console.log(fiboTopDown(7)); 
  console.log(fiboTopDown(9)); 
  console.log(fiboTopDown(10)); 
  
