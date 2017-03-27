// Quicksort

// Joseph Stowers
// March 26, 2007

let string = 'QUICKSARTEX';
let array = string.split('');

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

	let i = lo+1;
	let j = hi;

	while(i < j) {

		while (arr[i] <= arr[lo]) {
			console.log('i =', i, '  arr[i] =', arr[i]);
			i++;
			if (i === hi) break;
		}

		while (arr[j] > arr[lo]) {
			console.log('j =', j, '  arr[j] =', arr[j]);
			j--;
			if (j === lo) break;
		}

		if (i < j) {
			temp = arr[j];
			arr[j] = arr[i];
			arr[i] = temp;
		}

		console.log('arr after =', arr, '  i =', i, '  j =', j);

	}

	temp = arr[lo];
	arr[lo] = arr[j];
	arr[j] = temp;

	console.log('arr =', arr);
	return [j, array];

}

console.log('partition index =', partition(array, 0, array.length-1))
