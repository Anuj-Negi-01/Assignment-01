// Images array to set random background every time
const backgroundImageUrls = [
  "./assets/01.jpg",
  "./assets/02.jpg",
  "./assets/03.jpg",
  "./assets/04.jpg",
  "./assets/05.jpg",
];

// selecting all the required elements from DOM
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const copyQuoteBtn = document.getElementById("copy-quote");
const shareQuoteBtn = document.getElementById("share-quote");
const downloadImgBtn = document.getElementById("download-img");
// variable which tracks the current Image Index which i will use to get the URL of a random Image
let currentImageIndex;

//function that fetch data from api and also set the background image
async function getRandomQuote() {
  try {
    const res = await fetch(
      "https://api.freeapi.app/api/v1/public/quotes/quote/random"
    );
    const data = await res.json();
    const authorName = data.data.author;
    const quote = data.data.content;
    quoteText.textContent = `${quote}`;
    quoteAuthor.textContent = `- ${authorName}`;
    setRandomBackground();
  } catch (error) {
    alert("Something went wrong while fecthing quote");
  }
}

//function to copy the quote to the clipboard
async function copyToClipboard() {
  try {
    const textToCopy = `${quoteText.textContent}\n${quoteAuthor.textContent}`;
    await navigator.clipboard.writeText(textToCopy);
    copyQuoteBtn.textContent = "✔️ Copied";
    copyQuoteBtn.disabled = true;
    setTimeout(() => {
      copyQuoteBtn.textContent = "📋 Copy Quote";
      copyQuoteBtn.disabled = false;
    }, 1500);
  } catch (error) {
    alert("Something went wrong while copying the quote");
  }
}

// function which open a new window with the given url
function shareOnTwitter() {
  const quote = `${quoteText.textContent}\n 
  ${quoteAuthor.textContent}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    quote
  )}`;
  window.open(twitterShareUrl, "_blank");
}

// function which pick a random url from array and set it to background
function setRandomBackground() {
  const randomIndex = Math.floor(Math.random() * backgroundImageUrls.length);
  currentImageIndex = randomIndex;
  document.body.style.backgroundImage = `url(${backgroundImageUrls[randomIndex]})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
}

//function which download a image
function downloadImage() {
  const imageURL = backgroundImageUrls[currentImageIndex];
  const link = document.createElement("a");
  link.href = `${imageURL}`;
  link.download = "quote_img.jpg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// adding event listners
newQuoteBtn.addEventListener("click", getRandomQuote);
copyQuoteBtn.addEventListener("click", copyToClipboard);
shareQuoteBtn.addEventListener("click", shareOnTwitter);
downloadImgBtn.addEventListener("click", downloadImage);

// when the page get loaded or reloaded this function is called
document.addEventListener("DOMContentLoaded", () => {
  getRandomQuote();
});
