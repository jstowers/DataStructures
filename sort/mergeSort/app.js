// Mergesort
// March 25, 2017

// Input string to be sorted
// let string = ['M', 'E', 'R', 'G', 'E', 'S', 'O', 'R', 'T'];
// let string = ['Z', 'Y', 'X', 'W', 'E', 'D', 'C', 'B', 'A'];
let string = ['Z', 'Y', 'X', 'W', 'V', 'A', 'T', 'Z', 'B', 'G'];
console.log('string', string);

// Recursive function that divides array in two,
// passing the subarrays to be merged with elements in
// ascending order

// Average sort time = n * log(n)

let count = 0;

function mergeSort(array) {

	console.log('array =', array);
	

	if(array.length < 2) {
		return array;
	}

	let mid = Math.floor(array.length/2);
	let loArr = array.slice(0, mid);
	let hiArr = array.slice(mid);

	return merge(mergeSort(loArr), mergeSort(hiArr));

}

/* 
	merge() takes two sorted arrays and merges them into one sorted array.

	[ -30, 22 ]	   [ 0, 97 ]    =>    [ -30, 0, 22, 97 ]
*/

function merge(left, right) {

	let result = [];
	count += 1;

	// shift() removes the first element of an
	// array and returns that element.
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift())
		}
	}

	// creates a new empty array that adds all the elements
	// of the result array, then the left array (if any), then
	// the right array (if any)
	return [...result, ...left, ...right];

	// otherwise, you would need to loop through the two arrays
	// separately:
	/*
		while (left.length) {
			result.push(left.shift());
		}
		while (right.length) {
			result.push(right.shift());
		}
		return result;
	*/
}

console.log('mergeSort', mergeSort(string));
console.log('count =', count);

/* 

	Abstract In-Place Merge
	Sedgewick p. 283

// Input array
let string = ['Z', 'Y', 'X', 'W', 'V', 'A', 'T', 'Z', 'B', 'G'];
console.log('string', string);

// Find midpoint of array
let mid = Math.floor(string.length/2);
console.log('mid', mid);

// Define sub-arrays
let lowArr = string.slice(0,mid);
console.log('lowArr', lowArr);

let highArr = string.slice(mid, string.length);
console.log('highArr', highArr);

// Sort sub-arrays
lowArr.sort();
// console.log('lowArr', lowArr);

highArr.sort();
// console.log('highArr', highArr);

// Create final array
let finArr = lowArr.concat(highArr);
//console.log('finArr', finArr);

// Copy final array ot auxiliary array
let auxArr = finArr.slice();
console.log('auxArr', auxArr);
console.log('---------------------------------')

function merge(finArr, auxArr, lo, mid, high) {

	let i = lo;
	let j = mid;

	for (let k = 0; k < high; k++) {

		console.log('k =', k, '  i =', i, ' auxArr[i] =', auxArr[i], '   j =', j, ' auxArr[j] =', auxArr[j]);

		if (i === mid) {
			finArr[k] = auxArr[j];
			j++
		} else if (j > high) {
			finArr[k] = auxArr[i];
			i++
		} else if (auxArr[i] > auxArr[j]){
			finArr[k] = auxArr[j];
			j++;
		} else {
			finArr[k] = auxArr[i];
			i++
		}

		console.log('finArr = ', finArr);
		console.log('------------------------')
		console.log('');
	}

	return finArr;
}

// let mergeResult = merge(finArr, auxArr, 0, mid, finArr.length);

// console.log('merge = ', mergeResult);

*/



