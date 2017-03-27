// Mergesort
// March 25, 2017

// Input string to be sorted
// let string = ['M', 'E', 'R', 'G', 'E', 'S', 'O', 'R', 'T'];
// let string = ['Z', 'Y', 'X', 'W', 'E', 'D', 'C', 'B', 'A'];
let string = ['Z', 'Y', 'X', 'W', 'V', 'A', 'T', 'Z', 'B', 'G'];
console.log('string', string);

// Recursive function that divides arrays in two,
// passing the subarrays to be merged with elements in
// ascending order

function mergeSort(array) {

	if(array.length < 2) {
		return array
	}

	let mid = Math.floor(array.length/2)
	let loArr = array.slice(0, mid);
	let hiArr = array.slice(mid);

	return merge(mergeSort(loArr), mergeSort(hiArr));

}


function merge(left, right) {

	let result = [];

	while (left.length && right.length) {
		if (left[0] < right[0]) {
			result.push(left.shift());
		} else result.push(right.shift())
	}

	while (left.length) {
		result.push(left.shift());
	}

	while (right.length) {
		result.push(right.shift());
	}

	return result;
}

console.log('mergeSort', mergeSort(string));


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



