# Quicksort
A divide-and-conquer, recursive algorithm with avg running time of O(n*log(n)).

## Background

- Honored as one of the top 10 algorithms of the 20th century.

- Invented in 1961 by Sir Tony Hoare, a British computer scientist.

- Widely used for system sorts and many other applications.

- Recursion occurs _after_ the work is done, not before like Mergesort.

## Advantages

- Divide-and-conquer algorithm.

- Shuffling is needed to guarantee performance.

- Stable - unlike Mergesort which requires an extra array (more storage), Quicksort partitions and sorts in place.

- 39% more compares than Mergesort.

## Big O Time Complexity

Faster than Mergesort in most cases, because less data movement:

    Best case:      Number of compares ~ N*(log N), like Mergesort
    
    Avg case:       Number of compares ~ 1.39*N*(log N)

    Worst case:     Number of compares ~ 0.5*(N^2), if random shuffle puts everything in order.

## Disadvantages

_Unstable_
QuickSort does not preserve the relative order of data elements that are otherwise identical.

## Basic Plan

1.  Randomly shuffle the array

2.  Partition the array so that:

        - for some value j, entry a[j] is in place in the array
        
        - no larger entry to the left of j
        
        - no smaller entry to the right of j

    Every time a partition occurs, you perform constant-time operations (O(n)) on the elements involved.

3.  Sort each side, left and right, recursively


## How Do We Do This?

Phase 1:  Arbitrarily choose the first element as partitioning element, a[lo]

Phase 2:  Traverse the array with two pointers, i and j:
    
    - move an i pointer, a[i], from left to right, as long as a[i] < a[lo]
    
    - move a j pointer, a[j], from right to left, as long as a[j] > a[lo]

    - when one of the above conditions fails, exchange a[i] and a[j]

    - increment i and decrement j

    - repeat Phase 2 until these pointers cross. 

Phase 3:  When i and j pointers cross:

    - exchange a[lo] with a[j]

    - pointer a[j] is now pointing to the original partitioning element a[lo]

    - everything to the left of a[j] < a[j]

    - everything to the right of a[j] > a[j]

Phase 4:   Recursively sort the left and right subarrays in the same manner.

Complete:  The array is sorted in ascending order.  Congrats!!

## Revisions

___orig. March 27, 2017___

___rev. November 19, 2017___

___rev. June 16, 2018___

___rev. June 20, 2018___
