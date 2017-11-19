// Shell Sort
// November 19, 2017

/*

	Similar to insertion sort, but moving several
	positions at a time instead of one.

	h-sorted array => h interleaved sorted subsequences
	
	interleaved => arranged in alternating layers


	ex) h = 4

	L  E  E  A  M  H  L  E  P  S  O  L  T  S  X  R
	----------------------------------------------
	L --------- M --------- P --------- T
	   E --------- H --------- S --------- S
	      E --------- L --------- O --------- X
	         A ---------- E --------- L -------- R

	
	Algorithm:
	----------
	Insertion sort with stride length, h

		ex) SORTEXAMPLE with 7, 3, 1 stride lengths

	1.  Compute increment sequence based on length of array

	2.  


	Increment Sequence:
	-------------------
	What increment sequence should we use?
		This is a difficult research problem that confounds people.

	1.  Powers of two 
			No. Doesn't compare elements in even positions with 
			elements in odd positions until the 1 sort

	2.  Powers of two - 1
			Maybe.

	3.  3x + 1 (Knuth)
			OK, easy to compute

	4.  Sedgewick
			1, 5, 19, 41, 109, 209, 505, 929
			Good, tough to beat in empircal studies

*/

let string = "SORTEXAMPLE";
let array = string.split("");

console.log('array =', array);


function shellSort(array) {

	// Use Knuth 3x + 1 increment sequence
	let length = array.length;

	


}













