# Mergesort

___March 25, 2017___

## Basic Plan
John von Neumann created algorithm for EDVAC computer

1.  Divide array into two halves.

2.  Recursively sort each half.

3.  Merge two halves

### How do you do this?

1.  You have two sorted sub-arrays 
        a[lo] -> a[mid]
        a[mid+1] -> a[hi]

2.  You copy the sorted array into an auxiliary array

3.  You keep three pointers:

        i   sub-array 1
        j   sub-array 2
        k   main array

4.  Compare min in each sub-array

        whichever is smaller, move to main array

        then increment counter of that sub-array

5.  










