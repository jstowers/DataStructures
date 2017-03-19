

function binarySearch (array, target) {

	let valMid;

	console.log('array =', array, '  target =', target);

	function recursive(array, target, iMin, iMax, tag) {

		// base case to stop recursion
		// target value does not exist in array
		if (iMax < iMin) {
			return -1;
		} else if (iMin === iMax && array[iMin] !== target){
			return -1;
		}

		// calculate midpoint index
		// if previous midpoint value < target
		if (tag === 'less'){
			iMid = iMin + (Math.floor((iMax - iMin)/2));
		} else {
			iMid = iMin;
		}
		
		// determine midpoint value
		valMid = array[iMid];

		console.log('iMin = ', iMin, '  iMid =', iMid, '  iMax =', iMax);

		// tests for target value
		if(valMid > target) {
			console.log('valMid > target');
			iMin = iMin;
			iMax = iMid;
			tag = 'greater';
		} else if (valMid < target) {
			console.log('valMid < target');
			iMin = iMid+1;
			iMax = iMax;
			tag = 'less';
		} else if (valMid === target) {
			console.log('valMid = ', valMid);
			return iMid;
		}

		console.log('iMin = ', iMin, '    iMax =', iMax);
		return recursive(array, target, iMin, iMax, tag)

	}

	let result = recursive(array, target, 0, array.length-1, 'less');

	return result;

}

console.log('--------------------');
console.log('index = ', binarySearch([4],5)); // WORKS!

console.log('--------------------');
console.log('index = ', binarySearch([5],5)); // WORKS!

console.log('--------------------');
console.log('index = ', binarySearch([5],4)); // WORKS!

console.log('--------------------');
console.log('index = ', binarySearch([11, 12], 11)); // WORKS!

console.log('--------------------');
console.log('index = ', binarySearch([11, 12], 12)); // WORKS!

console.log('--------------------');
console.log('index = ', binarySearch([1, 22, 33, 45, 53, 62], 62)); // WORKS!

console.log('--------------------');
console.log('index = ', binarySearch([11, 12, 13, 14, 15], 100)); // WORKS!

console.log('--------------------');
console.log('index = ', binarySearch([11, 12, 13, 14, 15], 7)); // WORKS!

console.log('--------------------');
console.log('index = ', binarySearch([11, 12, 13, 14, 15], 12)); // WORKS!

console.log('--------------------');
console.log('index = ', binarySearch([11, 12, 13, 14, 15], 11)); // WORKS!



console.log('--------------------');
console.log('index = ', binarySearch([1, 2], 2));

