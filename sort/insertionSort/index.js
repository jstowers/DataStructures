// Insertion Sort
// March 23, 2017

/*
	
	Everything left of pointer (index i) is sorted in ascending order

	Everything right of pointer (index i) has not been seen

	If value at index i is smaller than value to its immediate left, start new index j = i

	Loop backwards through array, decrementing j, and exchange values until you 
	reach a value that is smaller.

	Exit inner j loop and increment i.

*/

function insertSort(array) {

	let temp;
	let count = 0;

	for (var i = 0; i < array.length; i++) {

		for (var j = i; j > 0; j--) {

			if (array[j] < array[j-1]){
				temp = array[j];
				array[j] = array[j-1];
				array[j-1] = temp;
				count++
			} else break;
		}
	}

	console.log('Total exchanges = ', count);

	return array;
}





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

/*
function insertSort1() {

	let temp;

	// let array = [ { "value": 3 }, { "value": 1 }, { "value": 2 } ];
	let array = [{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]

	for (let i = 0; i < array.length; i++) {

		for (let j = i; j > 0; j--) {

			if (array[j].value < array[j-1].value) {
				temp = array[j];
				array[j] = array[j-1];
				array[j-1] = temp;
			} else break;
		}
	}

	return array;
}

console.log('insertSort1() =', insertSort1());

*/
