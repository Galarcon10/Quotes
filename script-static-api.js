let apiQuotes = []; 

// Get quotes from api  
async function getQuotes() {
    const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes);
    } catch (error) {
        console.error("Failed to fetch quotes:", error);
    }
}

// On load
getQuotes();




