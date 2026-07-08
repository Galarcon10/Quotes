const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("Twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = []; 
// show new quote   
function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    if (quote.text.length > 100) {
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("long-quote");
    }
    quoteText.textContent = quote.text;
}

// Get quotes from api  
async function getQuotes() {
    const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        console.error("Failed to fetch quotes:", error);
    }
}

// On load
getQuotes();




