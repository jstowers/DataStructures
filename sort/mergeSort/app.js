// Mergesort
// March 25, 2017

// Input string to be sorted
let string = ['M', 'E', 'R', 'G', 'E', 'S', 'O', 'R', 'T']

// Find midpoint of array
let mid = Math.ceil(string.length/2);
console.log('mid', mid);

// Define sub-arrays
let lowArr = string.slice(0,mid);
console.log('lowArr', lowArr);

let highArr = string.slice(mid, string.length);
console.log('highArr', highArr);

// Sort sub-arrays
lowArr.sort();
console.log('lowArr', lowArr);

highArr.sort();
console.log('highArr', highArr);

// Create final array
let finArr = lowArr.concat(highArr);
console.log('finArr', finArr);

// Copy final array ot auxiliary array
let auxArr = finArr.slice();
console.log('auxArr', auxArr);


let i = 0;
let j = mid;
let high = finArr.length;

console.log('finArr before', finArr);

for (let k = 0; k <= high; k++) {

	console.log('k =', k, 'finArr =', finArr);
	console.log('i =', i, 'auxArr[i] =', auxArr[i], '  j =', j, '  auxArr[j] =', auxArr[j]);

	if (i > mid) {
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

}

console.log('finArr after', finArr);