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
