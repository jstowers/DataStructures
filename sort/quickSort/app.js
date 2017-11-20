// Quicksort

// Joseph Stowers
// March 26, 2007

// String to be sorted
let string = 'UIKCQ';
// let string = 'QUICKSTAR';
// let string = 'QUICKSORTEXAMPLE';
// let string = 'ZYXWVUTSRQPONMLKJIHGFEDCBA'

// Split string and shuffle array
let array = string.split('');
console.log('Array before quicksort =', array);

// If shuffling the array:
// let arrayShuffle = shuffle(array);
// console.log('Array before quicksort =', arrayShuffle);

// Call to quicksort
// quickSort(arrayShuffle, 0, arrayShuffle.length-1);
quickSort(array, 0, array.length-1);
console.log('Array after quicksort =', array);

// Partition function separates low values to left
// and high values to right of partition index.
function partition (arr, lo, hi) {

	let i = lo+1;
	let j = hi;

	while(i <= j) {

		while (arr[i] <= arr[lo]) {
			// console.log('i =', i, '  arr[i] =', arr[i]);
			i++;
			if (i === hi) break;
		}

		while (arr[j] > arr[lo]) {
			// console.log('j =', j, '  arr[j] =', arr[j]);
			j--;
			if (j === lo) break;
		}

		if (i < j) {
			temp = arr[j];
			arr[j] = arr[i];
			arr[i] = temp;
		}
		// console.log('arr after =', arr, '  i =', i, '  j =', j);
	}

	temp = arr[lo];
	arr[lo] = arr[j];
	arr[j] = temp;

	console.log('arr =', arr);
	return j;
}

// Quicksort recursive algorithm
function quickSort(array, lo, hi) {

	console.log('quickSort array =', array);

	if (hi <= lo) return;

	let j = partition(array, lo, hi);

	quickSort(array, lo, j-1);
	quickSort(array, j+1, hi);
}

// Fisher-Yates Shuffle
// Shuffle initial array
function shuffle(array) {

	let currIndex = array.length;
	let tempVal, randomIndex;

	while (currIndex !== 0) {

		randomIndex = Math.floor(Math.random() * currIndex);
		currIndex -= 1;

		tempVal = array[currIndex];
		array[currIndex] = array[randomIndex];
		array[randomIndex] = tempVal;
	}

	return array;
}


