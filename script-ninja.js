// Get quotes from API ninjas

const quoteText = document.getElementById("quote");
const authorName = document.getElementById("authorName");
const newQuoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitter");
const threadBtn = document.getElementById("threads");
const loader = document.getElementById("loader");
const quoteContainer = document.getElementById("quote-container");

let apiQuotes = [];

function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Get quotes from api
async function getQuotes() {
  quoteText.textContent = "Loading...";
  authorName.textContent = "";

  try {
    const response = await fetch(
      "https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom",
      {
        headers: {
          "X-Api-Key": "I4bWxLEMEwvABIj1vWKYkXgCoMnA8FntuQjz972E",
        },
      },
    );

    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    quoteText.textContent = "Unable to load quote.";
    console.error(error);
  }
}

// Show new quote
function newQuote() {
  // loading();
  loading();
  complete();
  const quote = apiQuotes[0];

  authorName.textContent = quote.author || "Unknown";
  quoteText.textContent = quote.quote;
  if (quote.quote.length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  // complete();
}

// Tweet quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorName.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Thread quote
function threadQuote() {
  const text = `${quoteText.textContent} - ${authorName.textContent}`;
  const threadUrl = `https://www.threads.net/intent/post?text=${encodeURIComponent(text)}`;
  window.open(threadUrl, "_blank");
}

newQuoteBtn.addEventListener("click", getQuotes);
twitterBtn.addEventListener("click", tweetQuote);
threadBtn.addEventListener("click", threadQuote);

getQuotes();
