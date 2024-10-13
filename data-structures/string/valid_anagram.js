const s = "anagram";
const t = "nagaram";
const x = "rat";
const y = "car";

function isAnagram(s, t) {
  // if both string length do not match then not an anagram
  if (s.length !== t.length) {
    return false;
  }

  /**
   * ALT SOLOTION
   */
  const charfreq = new Map();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i]; // to store char frequency of s string
    const tChar = t[i]; // to store char frequency of t string

    // Increment frequency count for 'sChar'
    charfreq.set(sChar, (charfreq.get(sChar) || 0) + 1);

    // Decrement frequency count for 'tChar'
    charfreq.set(tChar, (charfreq.get(tChar) || 0) - 1);
  }

  // If any count is not zero, then 's' and 't' are not anagrams
  for (let count of charfreq.values()) {
    if (count !== 0) {
      return false;
    }
  }
  /**
   * ///////////////////////////////////////////////////////////////////////////////////////////////////
   * /

  /**
   * ALT SOLUTION
   */

  //   const sFreq = new Map();
  //   const tFreq = new Map();

  //   for (let i = 0; i < s.length; i++) {
  //   const sChar = s[i];
  //   const tChar = t[i];

  //     // calculating char frequency for s string
  //     if (sFreq.has(s[i])) {
  //       sFreq.set(sChar, sFreq.get(sChar) + 1);
  //     } else {
  //       sFreq.set(sChar, 1);
  //     }

  //     // calculating char frequency for s string
  //     if (tFreq.has(t[i])) {
  //       tFreq.set(tChar, tFreq.get(tChar) + 1);
  //     } else {
  //       tFreq.set(tChar, 1);
  //     }
  //   }

  // iterating the elements of sFreq to compare the keys and values of sFreq to tFreq
  //   for (let [key, value] of sFreq) {
  //     if (!tFreq.has(key) || tFreq.get(key) !== value) {
  //       return false;
  //     }
  //   }

  return true;
}

console.log(isAnagram(s, t));
console.log(isAnagram(x, y));
