async function parseGoogleDoc(url) {
  // Convert to plain text export URL
  const textUrl = url.replace('/pub', '/export?format=txt');
  
  const response = await fetch(textUrl);
  const text = await response.text();
  
  // Split into lines and clean
  const lines = text.split('\n').map(line => line.trim()).filter(line => line);
  const data = [];
  
  // Find table data - look for pattern: number, character, number
  for (let i = 0; i < lines.length - 2; i++) {
    const x = parseInt(lines[i]);
    const char = lines[i + 1];
    const y = parseInt(lines[i + 2]);
    
    if (!isNaN(x) && !isNaN(y) && char && char.length <= 2) {
      data.push({ x, y, char });
      i += 2; // Skip the next 2 lines since we processed them
    }
  }
  
  if (data.length === 0) {
    console.log("No valid data found");
    return;
  }
  
  const maxX = Math.max(...data.map(d => d.x));
  const maxY = Math.max(...data.map(d => d.y));
  
  const grid = Array(maxY + 1).fill().map(() => Array(maxX + 1).fill(' '));
  
  data.forEach(({ x, y, char }) => {
    grid[y][x] = char;
  });
  
  grid.forEach(row => console.log(row.join('')));
}

parseGoogleDoc('https://docs.google.com/document/d/e/2PACX-1vQiVT_Jj04V35C-YRzvoqyEYYzdXHcRyMUZCVQRYCu6gQJX7hbNhJ5eFCMuoX47cAsDW2ZBYppUQITr/pub');