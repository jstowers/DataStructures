# HASH TABLE

    No ordered operations, but gain speed in lookup and insertion.

    The hash function takes a key and reduces it to an integer, an array index.

### Advantages ###

    Constant time lookup O(1)

    Constant time insertion O(1)

    Very fast runtime.

### Practical Uses ###

    Email provider storing addresses
    Users of an application

### Data Type ###

    Items are saved in a key-indexed table, where 
    the index is a function of the key:

        y = f(x)

        i = hash('it') => 3

           index    key
           -----   -----
             0
             1
             2
             3      'it'
             4


### Issues ###

    Issues
    1.  Computing the hash function
    2.  Equality test: method for checking if two keys are equal
    3.  Collision resolution: algorithm and data structure to handle
        two keys that hash to the same array index.


___Computing the Hash Function___

    Goal: scramble the keys uniformly to produce a table index, where
    each table index is equally likely for each key

        key => hash() => index


___charCodeAt()___

In JavaScript, every character corresponds to a UNICODE value, which is 
simply a number.

    charCodeAt() => returns the UNICODE value for a character

    'hello world'.charCodeAt(1) => returns the numeric value for 'e' = 101
    'hello world'.charCodeAt(4) => returns the numeric value for 'o' = 111


___Modulus (%) Operator___

Returns the remainder from a divison operation.

    7 % 3 = 1       where 3 * 2 = 6, with remainder = 1
    100 % 30 = 10   where 30 * 3 = 90, with remainder = 10


