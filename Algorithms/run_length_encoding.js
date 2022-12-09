//AAAAAAAAAAAAABBCCCCDD -> 9A4A2B4C2D
//input can be numbers, characters, special characters
//output should allow to get back to input (lossless)

const losslessEncoding = (s) => {
	const encodedString = [];
	let runLength = 1;

	for (let i = 1; i < s.length; i++) {
		let currentChar = s[i],
			previousChar = s[i - 1];

		if (currentChar !== previousChar || runLength == 9) {
			encodedString.push(String(runLength));
			encodedString.push(previousChar);
			runLength = 0;
		}

		runLength++;
	}

	encodedString.push(String(runLength));
	encodedString.push(s[s.length - 1]);

	return encodedString.join('');
}