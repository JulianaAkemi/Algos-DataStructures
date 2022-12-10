//Time: O(n)
//Space: O(1)

const findLongestPeak = (arr) => {
	if(arr.length < 3) return 0;

	let longestPeakLength = 0;
		index = 1;

	while(index < arr.length - 1) {
		let isPeak = arr[index - 1] < arr[index] && arr[index] > arr[index + 1];

		if(!isPeak) {
			index++;
			continue;
		}

		//start expanding left
		let left = index - 2;
		while(left >= 0 && arr[left] < arr[left + 1]) {
			left--;
		}

		//start expanding right
		let right = index + 2;
		while(right < arr.length && arr[right] < arr[right-1]){
			right++
		}

		let currentPeakLength = right - left - 1;
		longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
		index = right;
	}

	return longestPeakLength;
}

