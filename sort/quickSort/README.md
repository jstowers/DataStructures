# Quicksort

___March 26, 2017___

## Background

Honored as one of the top 10 algorithms of the 20th century.

Invented in 1961 by Sir Tony Hoare, a British computer scientist.

Widely used for system sorts and many other applications.

Recursion occurs _after_ the work is done, not before like Mergesort.

## Basic Plan

1.  Randomly shuffle the array

2.  Partition the array so that:

        - for some value j, entry a[j] is in place in the array
        
        - no larger entry to the left of j
        
        - no smaller entry to the right of j

3.  Sort each side, left and right, recursively

## How Do We Do This?

Phase 1:  Repeat until i and j pointers cross:

        - arbitrarily choose first element as partitioning element, a[lo]
        
        - maintain an i pointer that moves from left to right, as long
        as it points to an element a[i] < partitioning element a[lo]
        
        - maintain a j pointer that moves from right to left, as long as 
        it points to an element a[j] > partitioning element a[lo]

        - exchange a[i] and a[j]





