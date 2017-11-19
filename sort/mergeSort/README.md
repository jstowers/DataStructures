# Mergesort

___orig. March 25, 2017___

___rev. November 19, 2017___

## Background

John von Neumann created algorithm for EDVAC computer.

Mergesort implements the divide-and-conquer paradigm, one
of the most efficient algorithm designs.

see Sedgewick and Wayne, Algorithms, p. 282

## Basic Plan

1.  Divide array into two halves.
```
       input array     M E R G E S O R T E X A M P L E
       divide in half  M E R G E S O R | T E X A M P L E
```

2.  Recursively sort each half.
```
        sort left      E E G M O R R S |
        sort right                       A E E L M P T X
```

3.  Merge the sorted halves.
```
        final result   A E E E G L M M O P R R S T X
```
        
## Time Complexity (# compares)

        Best     n * log(n)
        Average  n * log(n)
        Worst    n * log(n)

## Algorithm

___Abstract In-Place Merge___

1.  Divide an array in two

        mid = Math.floor(array.length / 2)

2.  Sort the sub-arrays

        a[lo] -> a[mid]
        a[mid+1] -> a[hi]

3.  Combine the sorted sub-arrays from a[lo] to a[hi] into an array called finArr.

4.  Copy the combined array (finArr) into an auxiliary array (auxArr)

3.  Keep three pointers:

        i   auxArr (lo -> mid)
        j   auxArr (mid + 1 -> hi)
        k   finArr (current entry in finArr)

4.  Compare auxArr[i] and auxArr[j]:

        whichever is smaller, push to finArr[k]

        if equal, choose auxArr[i]

        if i === mid, push auxArr[j]

        if j > hi, push auxArr[i]

5.  Increment counters:
        
        increment counter (i or j) of that sub-array

        increment counter of finArr (k)

6.  Loop until all elements of both sub-arrays have been examined

7.  Return finArr










