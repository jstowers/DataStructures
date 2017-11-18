// reduceExample
// November 16, 2017


class CheckLongestName {

	constructor(array) {
		this.array = array;
	}


	findLongestName() {

		return this.array.reduce((longest,name) => {

			if (name.length > longest.length) {
				longest = name;
			}

			// tie-breaker for names of equal length
			if (name.length === longest.length && name != longest) {
				longest = this.tieBreaker(name, longest);
			}

			return longest;
		});
	}

	tieBreaker(a, b) {

		let number = Math.round(Math.random());
		console.log('number =', number);

		if (number === 0) {
			return a;
		} 
		else return b;
	}

	get longestName() {

		return this.findLongestName();
	}
}


let friends = ['Jacob', 'Stephanie', 'Anna', 'Anastasia'];
let test = new CheckLongestName(friends);

let longestName = test.longestName;
console.log("The longest name is", longestName);
