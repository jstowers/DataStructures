// Selection Sort
// March 23, 2017

/*
	Algorithm

	1. 	Begin with unsorted array

	2. 	In iteration i, find index min of smallest remaining entry

	3.	Swap a[i] and a[min]

	4.	Increment i and check remaining elements


	Invariants
		A condition (logical assertion) that can be relied upon 
		to be true during the execution of the program, or portion thereof.

		1.  Entries on and to the left of the pointer are fixed and in ascending order.

		2.  Entries to the right of the pointer are >= the entry immediately left
			of the pointer.


	Mathematical Analysis
		A square grid would be drawn to illustrate this algorithm.

			Compares  =  ~ N^2 / 2

			Exchanges =  ~ N

		Running time insensitive to the order of input.  Will always use quadratic
		time because it has to go through the entire array to find a minimum.

		Data movement is minimal => only one exchange into final position.
*/

let array = [7, 10, 5, 3, 8, 4, 2, 9, 6];

function insertionSort(array) {

	let min;
	let count = 0;

	for (let i = 0; i < array.length; i++) {

		min = i;

		for (let j = i+1; j < array.length; j++) {

			if (array[j] < array[min]) {
				min = j;
			}
		}

		let temp = array[i];
		array[i] = array[min];
		array[min] = temp;
		count++;
	}

	return [array, count];
}

console.log('insertionSort array =', insertionSort(array)[0]);
console.log('insertionSort exchanges =', insertionSort(array)[1]);