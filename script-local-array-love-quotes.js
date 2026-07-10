// local-jokes.js
import localLove from "./love-array.js";

// Get quotes from API ninjas
const quoteText = document.getElementById("quote");
const authorName = document.getElementById("authorName");
const year = document.getElementById("year");
const source = document.getElementById("source");
const category = document.getElementById("category");
const tags = document.getElementById("tags");
const mood = document.getElementById("mood");
const language = document.getElementById("language");

const newQuoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitter");
const threadBtn = document.getElementById("threads");
const quoteContainer = document.getElementById("quote-container");

// Show new quote
function newJoke() {
  quoteText.textContent = "Loading...";
  authorName.textContent = "";
  const love = localLove[Math.floor(Math.random() * localLove.length)];
  quoteText.textContent = love.quote;
  authorName.textContent = love.author;
  year.textContent = love.year;
  source.textContent = love.source;
  category.textContent = love.category;
  tags.textContent = love.tags;
  mood.textContent = love.mood;
  language.textContent = love.language;
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
