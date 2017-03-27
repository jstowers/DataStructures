# Mergesort

___March 25, 2017___

## Background - Sedgewick, p. 282

John von Neumann created algorithm for EDVAC computer.

Mergesort implements the divide-and-conquer paradigm, one
of the most efficient algorithm designs.

## Basic Plan

1.  Divide array into two halves.

2.  Recursively sort each half.

3.  Merge two halves

### How Do We Do This?

___Abstract In-Place Merge___

1.  Divide an array in two

        mid = Math.floor(array.length / 2)

2.  Sort the sub-arrays

        a[lo] -> a[mid]
        a[mid+1] -> a[hi]

3.  Combine the sorted sub-arrays into the final array (finArr)

4.  Copy the combined array into an auxiliary array (auxArr)

3.  Keep three pointers:

        i   auxArr (lo -> mid)
        j   auxArr (mid + 1, hi)
        k   finArr (final array)

4.  Compare auxArr[i] and auxArr[j]:

        whichever is smaller, push to finArr[k]

        if equal, choose auxArr[i]

        if i === mid, push auxArr[j]

        if j > hi, push auxArr[i]

5.  Increment counters:
        
        increment counter (i or j) of that sub-array

        increment counter of finArr (k)

6.  Loop until all elements both sub-arrays have been examined

7.  Return finArr










