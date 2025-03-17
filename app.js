const backgroundImageUrls = [
  "./assets/01.jpg",
  "./assets/02.jpg",
  "./assets/03.jpg",
  "./assets/04.jpg",
  "./assets/05.jpg",
];

const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const copyQuoteBtn = document.getElementById("copy-quote");
const shareQuoteBtn = document.getElementById("share-quote");
const downloadImgBtn = document.getElementById("download-img");

let currentImageIndex;

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

function shareOnTwitter() {
  const quote = `${quoteText.textContent}\n 
  ${quoteAuthor.textContent}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    quote
  )}`;
  window.open(twitterShareUrl, "_blank");
}

function setRandomBackground() {
  const randomIndex = Math.floor(Math.random() * backgroundImageUrls.length);
  currentImageIndex = randomIndex;
  document.body.style.backgroundImage = `url(${backgroundImageUrls[randomIndex]})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
}

function downloadImage() {
  const imageURL = backgroundImageUrls[currentImageIndex];
  const link = document.createElement("a");
  link.href = `${imageURL}`;
  link.download = "quote_img.jpg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

newQuoteBtn.addEventListener("click", getRandomQuote);
copyQuoteBtn.addEventListener("click", copyToClipboard);
shareQuoteBtn.addEventListener("click", shareOnTwitter);
downloadImgBtn.addEventListener("click", downloadImage);

document.addEventListener("DOMContentLoaded", () => {
  getRandomQuote();
});
