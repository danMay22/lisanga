async function parseGoogleDoc(url) {
  const response = await fetch(url);
  const text = await response.text();
  
  // Split into lines and find data rows (skip headers)
  const lines = text.split('\n').map(line => line.trim()).filter(line => line);
  const data = [];
  
  // Find where data starts (after headers)
  let startIndex = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].match(/^\d+$/)) {
      startIndex = i;
      break;
    }
  }
  
  // Parse data in groups of 3 (x, char, y)
  for (let i = startIndex; i < lines.length; i += 3) {
    if (i + 2 < lines.length) {
      const x = parseInt(lines[i]);
      const char = lines[i + 1];
      const y = parseInt(lines[i + 2]);
      if (!isNaN(x) && !isNaN(y)) {
        data.push({ x, y, char });
      }
    }
  }
  
  const maxX = Math.max(...data.map(d => d.x));
  const maxY = Math.max(...data.map(d => d.y));
  
  const grid = Array(maxY + 1).fill().map(() => Array(maxX + 1).fill(' '));
  
  data.forEach(({ x, y, char }) => {
    grid[y][x] = char;
  });
  
  grid.forEach(row => console.log(row.join('')));
}

// Run with the provided URL
parseGoogleDoc('https://docs.google.com/document/d/e/2PACX-1vQiVT_Jj04V35C-YRzvoqyEYYzdXHcRyMUZCVQRYCu6gQJX7hbNhJ5eFCMuoX47cAsDW2ZBYppUQITr/pub');