// Selection Sort
// March 23, 2017 (orig)
// November 19, 2017 (revised)

/*

	Algorithm

	1. 	Begin with an unsorted array

	2. 	In iteration i, find index of smallest remaining entry (min)

	3.	Swap a[i] and a[min]

	4.	Increment i and check remaining entries


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



function selectionSort(unsortedArray) {

	let totalEntries = unsortedArray.length;
	let min;
	let exchangeCount = 0;
	let compareCount = 0;

	// copy unsorted array to preserve for 
	// printing to results
	let array = unsortedArray.slice();

	for (let i = 0; i < array.length; i++) {

		min = i;

		// find min value in remaining elements
		for (let j = i+1; j < array.length; j++) {

			if (array[j] < array[min]) {
				min = j;
			}

			compareCount++;
		}

		// swap index value and min value
		let temp = array[i];
		array[i] = array[min];
		array[min] = temp;

		// increase count
		exchangeCount++;
	}

	return [array, totalEntries, compareCount, exchangeCount];
}


let array1 = [7, 10, 5, 3, 8, 4, 2, 9, 6];
let exampleOne = selectionSort(array1);
printResults(array1, exampleOne);


let array2 = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];
let exampleTwo = selectionSort(array2);
printResults(array2, exampleTwo);

/*
let string3 = 'supercalifragilisticexpialidocious';
let array3 = string3.toUpperCase().split("");
let exampleThree = selectionSort(array3);
printResults(array3, exampleThree);
*/

function printResults(initialArray, results) {

	if (initialArray.length === 0) {
		console.log('-----------------------------------------');
		console.log('ERROR: no results to print.');
		console.log('-----------------------------------------');
		return;
	}

	console.log('-----------------------------------------');
	console.log('Selection Sort Results:')
	console.log('initial array =', initialArray);
	console.log('sorted array  =', results[0]);
	console.log('total entries =', results[1]);
	console.log('number of compares  =', results[2]);
	console.log('number of exchanges =', results[3]);
	console.log('-----------------------------------------');
}
