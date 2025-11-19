async function checkText(url) {
  const textUrl = url.replace('/pub', '/export?format=txt');
  const response = await fetch(textUrl);
  const text = await response.text();
  
  console.log("Text export content:");
  console.log(text.substring(0, 2000));
}

checkText('https://docs.google.com/document/d/e/2PACX-1vQiVT_Jj04V35C-YRzvoqyEYYzdXHcRyMUZCVQRYCu6gQJX7hbNhJ5eFCMuoX47cAsDW2ZBYppUQITr/pub');