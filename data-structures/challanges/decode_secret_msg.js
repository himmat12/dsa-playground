/**
 * Coding Exercise: Decoding a Secret Message
 * 
 * 
 * In this exercise, you will write code to solve a problem. Your code must be in either Python or JavaScript—solutions in other languages will not be accepted! You can write your code using any IDE you want.

Problem
You are given a Google Doc like this one (https://docs.google.com/document/d/e/2PACX-1vRMx5YQlZNa3ra8dYYxmv-QIQ3YJe8tbI3kqcuC7lQiZm-CSEznKfN_HYNSpoXcZIV3Y_O3YoUB1ecq/pub) that contains a list of Unicode characters and their positions in a 2D grid. Your task is to write a function that takes in the URL for such a Google Doc as an argument, retrieves and parses the data in the document, and prints the grid of characters. When printed in a fixed-width font, the characters in the grid will form a graphic showing a sequence of uppercase letters, which is the secret message.

The document specifies the Unicode characters in the grid, along with the x- and y-coordinates of each character.

The minimum possible value of these coordinates is 0. There is no maximum possible value, so the grid can be arbitrarily large.

Any positions in the grid that do not have a specified character should be filled with a space character.

You can assume the document will always have the same format as the example document linked above.

For example, the simplified example document linked above draws out the letter 'F':

█▀▀▀
█▀▀ 
█   

Note that the coordinates (0, 0) will always correspond to the same corner of the grid as in this example, so make sure to understand in which directions the x- and y-coordinates increase.

Specifications
Your code must be written in Python (preferred) or JavaScript.

You may use external libraries.

You may write helper functions, but there should be one function that:

1. Takes in one argument, which is a string containing the URL for the Google Doc with the input data, AND

2. When called, prints the grid of characters specified by the input data, displaying a graphic of correctly oriented uppercase letters.




To verify that your code works, please run your function with this URL as its argument:

https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub

What is the secret message encoded by this document? Your answer should only contain uppercase letters.
*/

const url =
  "https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub";

/**
 * retrives the google doc tableData from the url and parse it into text format
 * and extracts the coordinates (coordinates) from the doc table and decipher the secret message
 */
async function printSecretMessage(url) {
  try {
    let grid = []; // secret message printing canvas
    let tableData = []; // raw table tableData from google doc

    const respone = await fetch(url);

    // validate successful HTTP service request
    if (respone.status === 200) {
      const htmlText = await respone.text();

      // regex pattern to filter values of span with class="c0", "c1", etc.
      const regex = /<span\b[^>]*class="c\d+"[^>]*>([^<]+)<\/span>/g;
      let match;

      let count = 0; // counter for table headers

      while ((match = regex.exec(htmlText)) !== null) {
        count++;
        // excluding first 4 items (Table headers)
        if (count > 4) {
          const x = match[1];
          tableData.push(x);
        }
      }

      const coordinates = []; // array of coordinates from google docs table
      const yCrdnts = []; // array of x coordinates
      const xCrdnts = []; // array or y coordinates
      const totalRows = tableData.length / 3; // total coordinates of tableData in google doc table

      let from = 0; // pointer to track the current slicing index

      // seperating x and y coordinates from teach coordinate
      for (let i = 0; i < totalRows; i++) {
        let until = from + 3;
        const coordinate = tableData.slice(from, until);

        yCrdnts.push(parseInt(coordinate[2]));
        xCrdnts.push(parseInt(coordinate[0]));
        coordinates.push(coordinate);

        from = until; // updating pointer with current index value
      }

      // max X and Y values to determine grid size
      const maxX = Math.max(...xCrdnts) + 1; // Rows
      const maxY = Math.max(...yCrdnts) + 1; // Columns

      // generating fixed sized grid and filling space as default cells value
      grid = Array.from({ length: maxY }, () => Array(maxX).fill(" "));

      // updating grid cells value with our parsed document chars coordinates
      coordinates.forEach(([x, char, y]) => {
        grid[parseInt(y)][parseInt(x)] = char;
      });

      // finally revealing the secret message
      grid.forEach((e) => console.log(e.join("")));
    }
  } catch (error) {
    console.error("Error decoding the secret message [ " + error + " ]");
  }
}

printSecretMessage(url);
