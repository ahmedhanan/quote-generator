const qouteText = document.getElementById('quote-text');
const qouteAuthor = document.getElementById('quote-author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('get-new');
let apiQuotes = [];
const newQuote = () => {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  qouteAuthor.textContent = quote.author === null ? 'unknown' : quote.author;
  qouteText.textContent = quote.text;
};

const getQuotes = async () => {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.log(error);
  }
};

const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${qouteText.textContent} - ${qouteAuthor.textContent}`;
    window.open(twitterUrl, '_blank')
}

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuotes();
