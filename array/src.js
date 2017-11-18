// Array Overview
// November 18, 2017


/*

In most programming languages, array elements lie next to each other in memory.
This makes accessing array elements more efficient.  You can simply perform
arithmitic on the memory locations for the array elements.

In JavaScript, arrays are implemented as Objects (hashes).  The keys are numerical values
representing the numerical 

No relationship as to where element is stored in the array and where it
is stored in memory.



sparse array => 


How to create an array:

1.	instantiate the Array class

		let friendsArr = new Array();

2.  array literal syntax

		let friends = ['Johnny', 'Donny', 'Mikey', 'Sarah'];


Common Array Operations

1. 	push() => appends a new element to the end of the existing array

2.	pop() => removes the last element from the array and returns that value

3.	indexOf() => returns index of first element that matches search object; 
		returns -1 if the search object is not found

*/


let friendsArray = ['Hulk', 'Thor', 'Valkyrie', 'Hela'];


let arrayType = typeof(friendsArray);
console.log('arrayType =', arrayType); // => object


let newFriend = 'Loki';
friendsArray.push(newFriend);
console.log('friendsArray after push =', friendsArray);


let popFriend = friendsArray.pop();
console.log('popFriend =', popFriend); // => Sarah
console.log('friendsArray after pop =', friendsArray); // => destructive


let indexValkyrie = friendsArray.indexOf('Valkyrie');
console.log('indexValkyrie =', indexValkyrie); // => 2
