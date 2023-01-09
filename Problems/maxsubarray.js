const max_sub_array_of_size_k = function(k, arr) {
  let windowSum = 0, maxSum = 0, windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1){
      maxSum = Math.max(windowSum, maxSum) // keep track of max sum
      windowSum -= arr[windowStart] // subtract window start element
      windowStart++
    }
  }
  return maxSum
}

console.log(max_sub_array_of_size_k(3,[2,1,5,1,3,2]))