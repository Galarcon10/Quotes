// Get quotes from API ninjas
fetch("https://api.api-ninjas.com/v2/randomquotes", {
  headers: { "X-Api-Key": "I4bWxLEMEwvABIj1vWKYkXgCoMnA8FntuQjz972E" }
})
  .then(response => response.json())
  .then(data => {
    const quote = data[0];
    document.querySelector(".quote-text").textContent = `"${quote.quote}"`;
    document.querySelector(".author-name").textContent = quote.author;
  })
  .catch(error => console.error("Failed to fetch quote:", error));

