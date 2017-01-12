// require Chai assertion library
let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
let should = chai.should();

// require application file to test
var app = require('../src/app');

// QUESTION!!
// Need to figure out how to implement a Mocha test 
// with a command line argument for the stringFile.
// Instead of reading the contents of the stringFile,
// Mocha starts reading the command line itself.
// There are libraries that exist to access the process.argv command.

describe('Node', function(){

	let Node = app.Node;

	it('should exist', function(){
		should.exist(Node)
	});

	it('should be a function', function(){
		Node.should.be.a.Function;
	});

	it('returns the property value equal to the function parameter', function() {
		var node = Node('test');
		expect(node.value).to.equal('test');
	});

	it('returns the property next equal to a null value', function(){
		var node = Node('test');
		expect(node.next).to.be.null;
	});

});

describe('LinkedList', function() {

	let LinkedList = app.LinkedList;

	it('should exist', function(){
		should.exist(LinkedList);
	});

	it('should be a constructor function', function(){
		LinkedList.should.be.a.Function;
	});

	it("methods should be implemented using the pseudoclassical pattern", function(){
    	LinkedList.prototype.enqueue.should.be.a.Function;
    	LinkedList.prototype.dequeue.should.be.a.Function;
    	LinkedList.prototype.isEmpty.should.be.a.Function;
    	LinkedList.prototype.size.should.be.a.Function;
  	});

	it("should accept an initial value", function(){
  	    var list = new LinkedList(1);
	    list.tail.value.should.equal(1);
	    list.head.value.should.equal(1);
	    list.enqueue(2);
	    list.head.next.value.should.equal(2);
  	});

	it("should designate a new tail when new nodes are added", function(){
	    var list = new LinkedList();
	    list.enqueue(4);
	    list.tail.value.should.equal(4);
	    list.enqueue(5);
	    list.tail.value.should.equal(5);
  	});

	it("should remove the head from the list when dequeue() is called", function(){
	    var list = new LinkedList();
	    list.enqueue(4);
	    list.enqueue(5);
	    list.head.value.should.equal(4);
	    list.dequeue();
	    list.head.value.should.equal(5);
  	});

  	it("expect head and tail values to be null when dequeue() is called and only one node exists", function(){
	    var list = new LinkedList(4);
	    list.head.value.should.equal(4);
	    list.tail.value.should.equal(4);
	    list.dequeue();
	    expect(list.head.value).to.be.null;
	    expect(list.tail.value).to.be.null;
  	});

  	it("should only contain values that are added", function(){
	    var list = new LinkedList(4);
	    list.enqueue(5);
	    list.contains(4).should.be.true;
	    list.contains(5).should.be.true;
	    list.contains(6).should.be.false;
  	});

  	it("should not contain a value that was removed", function(){
	    var list = new LinkedList();
	    list.enqueue(4);
	    list.enqueue(5);
	    list.dequeue();
	    list.contains(4).should.be.false;
  	});

})