### **Problem 1: Maximum Product of Two Integers in an Array**  
**Solved**  
Given an array of integers `nums`, return the maximum product of two integers in the array.

Example 1:

**Input**:  
`nums = [3,4,5,2]`

**Output**:  
`20`

**Explanation**:  
The maximum product is `4 * 5 = 20`.

Example 2:

**Input**:  
`nums = [1,5,4,5]`

**Output**:  
`25`

**Explanation**:  
The maximum product is `5 * 5 = 25`.

Example 3:

**Input**:  
`nums = [3,7]`

**Output**:  
`21`

**Constraints**:
- 2 <= `nums.length` <= 500
- -1000 <= `nums[i]` <= 1000

---

### **Problem 2: Move Zeroes to End**  
**Solved**  
Given an array of numbers `nums`, move all zeroes to the end of the array while maintaining the relative order of non-zero elements.

Example 1:

**Input**:  
`nums = [0,1,0,3,12]`

**Output**:  
`[1,3,12,0,0]`

Example 2:

**Input**:  
`nums = [0]`

**Output**:  
`[0]`

**Constraints**:
- 1 <= `nums.length` <= 10^4
- -2^31 <= `nums[i]` <= 2^31 - 1

---

### **Problem 3: Find the First Non-Repeating Element**  
**Solved**  
Given an array of integers `nums`, find the first non-repeating element and return its index. If it doesn't exist, return -1.

Example 1:

**Input**:  
`nums = [4, 5, 1, 2, 0, 4]`

**Output**:  
`1`

**Explanation**:  
The first non-repeating element is `5` and appears at index 1.

Example 2:

**Input**:  
`nums = [7, 7, 8, 8, 9]`

**Output**:  
`4`

**Explanation**:  
The first non-repeating element is `9` and appears at index 4.

Example 3:

**Input**:  
`nums = [2, 2, 2]`

**Output**:  
`-1`

**Constraints**:
- 1 <= `nums.length` <= 10^5
- -10^5 <= `nums[i]` <= 10^5

---

### **Problem 4: Find the Maximum Sum of a Subarray**  
**Solved**  
Given an integer array `nums`, find the contiguous subarray (containing at least one number) that has the largest sum and return its sum.

Example 1:

**Input**:  
`nums = [-2,1,-3,4,-1,2,1,-5,4]`

**Output**:  
`6`

**Explanation**:  
The subarray `[4,-1,2,1]` has the largest sum = 6.

Example 2:

**Input**:  
`nums = [1]`

**Output**:  
`1`

Example 3:

**Input**:  
`nums = [5,4,-1,7,8]`

**Output**:  
`23`

**Constraints**:
- 1 <= `nums.length` <= 10^5
- -10^4 <= `nums[i]` <= 10^4

---

### **Problem 5: Rotate Array**  
**Solved**  
Given an array, rotate the array to the right by `k` steps, where `k` is non-negative.

Example 1:

**Input**:  
`nums = [1,2,3,4,5,6,7]`, `k = 3`

**Output**:  
`[5,6,7,1,2,3,4]`

**Explanation**:  
Rotate by 3 steps: `[5,6,7,1,2,3,4]`.

Example 2:

**Input**:  
`nums = [-1,-100,3,99]`, `k = 2`

**Output**:  
`[3,99,-1,-100]`

**Explanation**:  
Rotate by 2 steps: `[3,99,-1,-100]`.

**Constraints**:
- 1 <= `nums.length` <= 10^5
- -2^31 <= `nums[i]` <= 2^31 - 1
- 0 <= `k` <= 10^5

---

### **Problem 6: Find All Duplicates in an Array**  
**Solved**  
Given an integer array `nums` of length `n` where all the integers of `nums` are in the range `[1, n]` and each integer appears once or twice, return all the elements that appear twice.

Example 1:

**Input**:  
`nums = [4,3,2,7,8,2,3,1]`

**Output**:  
`[2,3]`

Example 2:

**Input**:  
`nums = [1,1,2]`

**Output**:  
`[1]`

Example 3:

**Input**:  
`nums = [1]`

**Output**:  
`[]`

**Constraints**:
- n == `nums.length`
- 1 <= n <= 10^5
- 1 <= `nums[i]` <= n
