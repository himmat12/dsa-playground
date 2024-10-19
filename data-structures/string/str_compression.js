const chars = ["a", "a", "b", "b", "c", "c", "c"];

function compressStr(chars) {
  let writeIndex = 0; // position to write compressed result
  let i = 0; // position to read through the array

  while (i < chars.length) {
    const char = chars[i]; // current element (char)
    let count = 0; // char frequency

    /**
     * Counts the consecutive occurrences of the current character - character occurence in a sequence (back to back)
     * for eg: ['a', 'a'] -> is two consecutive occurrences of 'a'
     * ['a', 'b', 'a'] -> here none char has consecutive occurrences
     */
    while (i < chars.length && chars[i] === char) {
      count++;
      i++;
    }

    // write the character
    chars[writeIndex] = char;

    // increment the pointer to next index once the char is appended in chars
    writeIndex++;

    // Write the count if greater than 1
    if (count > 1) {
      const countStr = count.toString();
      /* 
      iterating through the count string to add multi digit 
      counts one by one in consecutive order in chars after the char 
      */
      for (let c of countStr) {
        chars[writeIndex] = c;
        writeIndex++;
      }
    }
  }

  // slices the chars upto the last pointer index and returns the compressed string
  return chars.slice(0, writeIndex);
}

console.log(compressStr(chars));
