document.addEventListener('DOMContentLoaded', () => {
    const quoteContainer = document.querySelector('.quote');
    const newQuoteBtn = document.getElementById('new-quote-btn');

    // Function to fetch a random quote
    async function fetchRandomQuote() {
        try {
            const response = await fetch('https://type.fit/api/quotes');
            const data = await response.json();

            if (response.status === 200) {
                const randomIndex = Math.floor(Math.random() * data.length);
                const randomQuote = data[randomIndex];

                // Update the HTML with the random quote
                quoteContainer.innerHTML = `<p>${randomQuote.text}</p>`;
            } else {
                quoteContainer.innerHTML = 'Error fetching a quote.';
            }
        } catch (error) {
            console.error('Error fetching a quote:', error);
            quoteContainer.innerHTML = 'An error occurred while fetching a quote.';
        }
    }

    // Event listener for the "New Quote" button
    newQuoteBtn.addEventListener('click', fetchRandomQuote);

    // Fetch a random quote when the page loads
    fetchRandomQuote();
});
