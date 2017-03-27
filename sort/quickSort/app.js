// Quicksort

// Joseph Stowers
// March 26, 2007

//let string = 'QUICKSORTEXAMPLE';
let string ='AZBCD'
let array = string.split('');
console.log('array =', array);
console.log('array length =', array.length); // 16

let arrayShuffle = shuffle(array);
console.log('arrayShuffle =', arrayShuffle);

// Fisher-Yates Shuffle
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

	return array
}


function partition (arr, lo, hi) {

	let i = lo;
	let j = hi;

	console.log('arr =', arr, '  arr[lo] =', arr[lo]);
	
	// while(true) {
		//console.log('INSIDE WHILE');

		while (arr[i+1] < arr[lo]) {

			console.log('i =', i, '  arr[i] =', arr[i]);
			i++;
			if (i === hi) break;
		}

		while (arr[j] > arr[lo]) {
			console.log('j =', j, '  arr[j] =', arr[j]);
			j--;
			if (j === lo) break;
		}

		// check if pointers cross
		// if yes, exchange pointers

		console.log('i =', i, 'j =', j);

		if (i >= j) {
			console.log('inside i > j')
			let temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}

	//}

	temp = arr[lo];
	arr[lo] = arr[j];
	arr[j] = temp;

	console.log('arr =', arr);
	return j;

}

console.log('partition j =', partition(arrayShuffle, 0, arrayShuffle.length-1))