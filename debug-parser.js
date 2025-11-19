async function debugGoogleDoc(url) {
  const response = await fetch(url);
  const text = await response.text();
  
  console.log("First 1000 characters of document:");
  console.log(text.substring(0, 1000));
  console.log("\n--- End of sample ---");
}

debugGoogleDoc('https://docs.google.com/document/d/e/2PACX-1vQiVT_Jj04V35C-YRzvoqyEYYzdXHcRyMUZCVQRYCu6gQJX7hbNhJ5eFCMuoX47cAsDW2ZBYppUQITr/pub');