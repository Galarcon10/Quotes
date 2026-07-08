const quoteContainer = document.getElementById("quote-container");

let apiQuotes = []; 

// show new quote   
function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    const quoteText = document.getElementById("quote");
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




