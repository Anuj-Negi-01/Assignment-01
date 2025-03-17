# Random Quote Generator 🌟

Welcome to the **Random Quote Generator**! This web application is designed to inspire and motivate you with random quotes from famous authors, paired with stunning background images. Built using HTML, CSS, and JavaScript, this app offers a seamless and visually appealing experience.

---

## Features ✨

### 1. **Random Quote Generation**

- Fetches a random quote from the [FreeAPI](https://api.freeapi.app/api/v1/public/quotes/quote/random) every time you click the "New Quote" button.
- Displays the quote along with the author's name, providing fresh inspiration at your fingertips.

### 2. **Dynamic Background Images**

- Changes the background image randomly each time a new quote is generated.
- Images are selected from a predefined array, ensuring a visually stunning experience every time.

### 3. **Copy Quote to Clipboard**

- Easily copy the displayed quote and author to your clipboard with the "📋 Copy Quote" button.
- Visual feedback is provided with a temporary "✔️ Copied" message.

### 4. **Share Quote on Twitter**

- Share your favorite quotes directly on Twitter using the "Share Quote" button.
- Opens a new window with a pre-filled tweet containing the quote and author.

### 5. **Download Background Image**

- Download the current background image as `quote_img.jpg` using the "Download Image" button.
- Perfect for saving your favorite backgrounds!

### 6. **Responsive Design**

- The app is fully responsive, ensuring a seamless experience across all devices and screen sizes.

---

## How to Use 🚀

1. **Generate a New Quote**

   - Click the "New Quote" button to fetch a random quote and change the background image.

2. **Copy the Quote**

   - Click the "📋 Copy Quote" button to copy the current quote and author to your clipboard.

3. **Share on Twitter**

   - Click the "Share Quote" button to share the quote on Twitter.

4. **Download the Background Image**
   - Click the "Download Image" button to download the current background image.

---

## Code Overview 💻

### JavaScript Functions

- **`getRandomQuote()`**

  - Fetches a random quote from the API and updates the quote and author text.
  - Calls `setRandomBackground()` to change the background image.

- **`copyToClipboard()`**

  - Copies the current quote and author to the clipboard.
  - Provides visual feedback by temporarily changing the button text.

- **`shareOnTwitter()`**

  - Opens a new window with a pre-filled tweet containing the current quote and author.

- **`setRandomBackground()`**

  - Randomly selects a background image from the `backgroundImageUrls` array and sets it as the page background.

- **`downloadImage()`**
  - Downloads the current background image as `quote_img.jpg`.

### Event Listeners

- **`newQuoteBtn`**

  - Listens for clicks on the "New Quote" button and calls `getRandomQuote()`.

- **`copyQuoteBtn`**

  - Listens for clicks on the "Copy Quote" button and calls `copyToClipboard()`.

- **`shareQuoteBtn`**

  - Listens for clicks on the "Share Quote" button and calls `shareOnTwitter()`.

- **`downloadImgBtn`**

  - Listens for clicks on the "Download Image" button and calls `downloadImage()`.

- **`DOMContentLoaded`**
  - Ensures a random quote is fetched and displayed when the page is loaded or reloaded.

---

## Setup 🛠️

To run this project locally, follow these steps:

1. Clone the repository or download the source code.
2. Open the `index.html` file in your web browser.
3. Ensure the `backgroundImageUrls` array contains valid paths to your background images.

---

## Dependencies 📦

- **[FreeAPI](https://api.freeapi.app/api/v1/public/quotes/quote/random)**: Used to fetch random quotes.

---

## Contributing 🤝

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

---

Enjoy the **Random Quote Generator** and let the quotes inspire you every day! 🌟
