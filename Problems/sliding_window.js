const max_sub_array_of_size_k = function (k, arr) {
	let windowSum = 0,
		maxSum = 0,
		windowStart = 0;
	for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
		windowSum += arr[windowEnd];
		if (windowEnd >= k - 1) {
			maxSum = Math.max(windowSum, maxSum); // keep track of max sum
			windowSum -= arr[windowStart]; // subtract window start element
			windowStart++;
		}
	}
	return maxSum;
};

// console.log(max_sub_array_of_size_k(3,[2,1,5,1,3,2]))

function minSubArr(arr, s) {
	// find smallest subarray that equals s in addition
	let windowSum = 0;
	windowStart = 0;
  minLength = Infinity;

	for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    // shrink window as small as possible until windowSum is smaller than s
    while (windowSum >= s){
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  if (minLength === Infinity){
    return 0;
  }
  return minLength;
}
// console.log(minSubArr([2,1,5,2,3,2], 7))

function longestSub (str, k) {
	const dict = {};
	let distinct = 0;
	let result = "";
	for (let windowEnd = 0; windowEnd < str.length; windowEnd++){
		if (!dict[str[windowEnd]]) {
			dict[str[windowEnd]] = true;
			distinct++;
			result += str[windowEnd];
		} else {
			result += str[windowEnd]
		}
		if (distinct > k) {
			console.log(result)
			result = result.slice(0, windowEnd)
			console.log(result)
		}
	}
	console.log(dict)
	return (result, result.length)
}

console.log(longestSub("araaci", 2))