### 1. **Reverse a String**
   **Problem:**  
   Given a string, reverse the string without using built-in reverse functions.
   
   **Example:**  
   Input: `"hello"`  
   Output: `"olleh"`

---

### 2. **Check for Palindrome**
   **Problem:**  
   Given a string, determine if it is a palindrome. A string is a palindrome if it reads the same forward and backward, ignoring spaces, punctuation, and case.
   
   **Example:**  
   Input: `"A man, a plan, a canal: Panama"`  
   Output: `true`
   
   Input: `"race a car"`  
   Output: `false`

---

### 3. **Longest Substring Without Repeating Characters**
   **Problem:**  
   Given a string, find the length of the longest substring without repeating characters.
   
   **Example:**  
   Input: `"abcabcbb"`  
   Output: `3`  
   Explanation: The answer is `"abc"`, with the length of 3.
   
---

### 4. **Count and Say**
   **Problem:**  
   The "Count and Say" sequence is a sequence of integers where each term is generated from the previous term by describing the count of consecutive digits. Write a function to return the nth term of the count-and-say sequence.

   **Example:**  
   Input: `4`  
   Output: `"1211"`
   
   Explanation:
   - `"1"` is the first term.
   - `"11"` describes one 1.
   - `"21"` describes two 1s.
   - `"1211"` describes one 2 followed by one 1.
   
---

### 5. **Find the First Non-Repeating Character**
   **Problem:**  
   Given a string `s`, find the first non-repeating character in it and return its index. If it doesn't exist, return `-1`.
   
   **Example:**  
   Input: `"leetcode"`  
   Output: `0`
   
   Input: `"loveleetcode"`  
   Output: `2`
   
---

### 6. **Anagram Check**
   **Problem:**  
   Given two strings `s` and `t`, write a function to determine if `t` is an anagram of `s`.
   
   **Example:**  
   Input: `s = "anagram"`, `t = "nagaram"`  
   Output: `true`
   
   Input: `s = "rat"`, `t = "car"`  
   Output: `false`

---

### 7. **String Compression**
   **Problem:**  
   Given a string, compress it such that each group of consecutive repeating characters is replaced by the character followed by the count of repeats. If the compressed string is longer than the original, return the original string.
   
   **Example:**  
   Input: `"aabcccccaaa"`  
   Output: `"a2b1c5a3"`

---

### 8. **Valid Parentheses**
   **Problem:**  
   Given a string containing just the characters `'('`, `')'`, `'{', '}', '[' and ']'`, determine if the input string is valid. A string is valid if:
   - Open brackets must be closed by the same type of brackets.
   - Open brackets must be closed in the correct order.
   
   **Example:**  
   Input: `"()[]{}"`  
   Output: `true`
   
   Input: `"([)]"`  
   Output: `false`

---

### 9. **Longest Common Prefix**
   **Problem:**  
   Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string `""`.
   
   **Example:**  
   Input: `["flower", "flow", "flight"]`  
   Output: `"fl"`
   
   Input: `["dog", "racecar", "car"]`  
   Output: `""`

---

### 10. **Remove Duplicates**
   **Problem:**  
   Given a string, write a function to remove all duplicate characters and return the new string with distinct characters only.
   
   **Example:**  
   Input: `"aabbcc"`  
   Output: `"abc"`
