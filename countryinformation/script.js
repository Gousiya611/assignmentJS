document.addEventListener('DOMContentLoaded', () => {
    const countryInfoContainer = document.querySelector('.country-info');

    // Function to fetch country data by country code
    async function fetchCountryData(countryCode) {
        try {
            const response = await fetch(`https://restcountries.com/v2/alpha/${countryCode}`);
            const data = await response.json();

            if (response.status === 200) {
                const countryName = data.name;
                const capital = data.capital || 'N/A';
                const population = data.population || 'N/A';
                const region = data.region || 'N/A';

                // Update the HTML with country information
                countryInfoContainer.innerHTML = `
                    <h2>Country Information</h2>
                    <p>Country Name: ${countryName}</p>
                    <p>Capital: ${capital}</p>
                    <p>Population: ${population}</p>
                    <p>Region: ${region}</p>
                `;
            } else {
                countryInfoContainer.innerHTML = 'Error fetching country data.';
            }
        } catch (error) {
            console.error('Error fetching country data:', error);
            countryInfoContainer.innerHTML = 'An error occurred while fetching country data.';
        }
    }

    fetchCountryData('IN'); 

   
});
