// Insertion Sort
// March 23, 2017 (orig)
// November 19, 2017 (revised)

/*
	Invariants

	1.  Pointer scans from left to right

	2.  Everything left of pointer (index i) is sorted in ascending order

	3.  Everything right of pointer (index i) has not been seen


	Algorithm

	If value at index i is smaller than value to its immediate left, start new index j = i

	Loop backwards through array, decrementing j, and exchange values until you 
	reach a value that is smaller.

	All elements that have been seen are sorted in ascending order.  

	Exit inner j loop and increment i.  Loop back up.

*/


function insertSort(array) {

	let temp;
	let count = 0;

	for (var i = 0; i < array.length; i++) {

		for (var j = i; j > 0; j--) {

			if (array[j] < array[j-1]){
				console.log('array[j] before = ', array[j])
				temp = array[j];
				array[j] = array[j-1];
				array[j-1] = temp;
				console.log('array[j] after = ', array[j]);
				console.log('array = ', array);
				count++
			} else break;
		}
	}

	console.log('Total exchanges = ', count);

	return array;
}

/*
function insertSort(array) {

	let temp = 0;
	let count = 0;

	for (let i = 0; i < array.length; i++) {
		if(array[i+1] < array[i]) {
			for (let j = i+1; j > 0; j--) {
				if(array[j-1] > array[j]) {
					temp = array[j-1];
					array[j-1] = array[j];
					array[j] = temp;
					count++;
				} else break;
			}
		}
	}

	console.log('Total exchanges = ', count);
	return array;
}
*/


// AVERAGE CASE => randomly-sorted array with distinct keys
// # Compares  = ~0.25 * (N^2)
// # Exchanges = ~0.25 * (N^2)

// N array1 = 10
// # exchanges = 24
let array1 = [5, 2, 8, 10, 4, 7, 6, 3, 1, 9]; // 24
console.log('insertSort =', insertSort(array1));


// WORST CASE => array sorted in descending order
// # Compares  = ~0.5 * (N^2)
// # Exchanges = ~0.5 * (N^2)

// N array2 = 11
// # exchanges = 54
let array2 = ['X', 'T', 'S', 'R', 'P', 'O', 'M', 'L', 'E', 'E', 'A']; 
console.log('insertSort =', insertSort(array2));


let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 9]; // 1
console.log('insertSort =', insertSort(array3));

