// local-jokes.js
import localJokes from "./jokes.js";

// Get quotes from API ninjas
const quoteText = document.getElementById("quote");
const authorName = document.getElementById("authorName");
const newQuoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitter");
const threadBtn = document.getElementById("threads");
const quoteContainer = document.getElementById("quote-container");

// Show new quote
function newJoke() {
  quoteText.textContent = "Loading...";
  authorName.textContent = "";
  const joke = localJokes[Math.floor(Math.random() * localJokes.length)];
  quoteText.textContent = joke.quote;
  authorName.textContent = joke.author;
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

newQuoteBtn.addEventListener("click", newJoke);
twitterBtn.addEventListener("click", tweetQuote);
threadBtn.addEventListener("click", threadQuote);

newJoke();
