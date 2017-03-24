#HASH TABLE

    No ordered operations, but gain speed in search and insert.

### Advantages ###

    Constant time lookup O(1)

    Constant time insertion O(1)

    Very fast runtime.

### Data Type ###

    Items saved in a key-indexed table, where the index is a function of the key:

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



*/
