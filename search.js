// This event listener waits for the DOM content to be fully loaded before executing the JavaScript code
document.addEventListener('DOMContentLoaded', function () {
  // Get references to the input elements by their IDs
  const NameInput = document.getElementById('gsearchByName');
  const CurrencyInput = document.getElementById('gsearchByCurrency');

  // Function to search for countries by name
  function searchCountries() {
    // Get the trimmed and lowercase search text from the name input field
    const searchText = NameInput.value.trim().toLowerCase();

    // Check if the input is empty and show an alert if it is
    if (searchText === '') {
      alert('Input is empty. Please enter a search term.');
      return; // Exit the function if input is empty
    }

    // Select all elements with class 'country-box'
    const countries = document.querySelectorAll('.country-box');
    let matches = [];

    // Loop through each country box
    countries.forEach(country => {
      // Get the lowercase text content of the h2 element within the country box
      const cName = country.querySelector('h2').textContent.toLowerCase();

      // Check if the country name starts with the search text
      if (cName.startsWith(searchText)) {
        // Get the currency information from the country box
        const currency = country.querySelector('ul li:nth-child(1)').textContent;
        matches.push({ cName, currency });
      }
    });

    // Display the matching countries and their currencies in an alert
    if (matches.length > 0) {
      let alertContent = '';

      for (let i = 0; i < Math.min(matches.length, 5); i++) {
        alertContent += `${matches[i].cName} - ${matches[i].currency}\n`;
      }

      alert(alertContent);
    } else {
      alert('No matches found.');
    }
  }

  // Function to search for countries by currency
  function searchCurrency() {
    // Get the trimmed currency name from the currency input field
    const CurrencyName = CurrencyInput.value.trim();

    // Check if the input is empty and show an alert if it is
    if (!CurrencyName.trim()) {
      alert('Please enter a currency you would like to find.');
      return;
    }

    // Check if the input matches the expected format of exactly 3 capital letters
    if (!/^[A-Z]{3}$/.test(CurrencyName)) {
      alert('Please enter exactly 3 capital letters.');
      return;
    }

    // Use the entered currency name as the search text
    const searchText = CurrencyName;
    const countries = document.querySelectorAll('.country-box');
    let matches = [];

    // Loop through each country box
    countries.forEach(country => {
      const currencyItems = country.querySelectorAll('ul li');
      let currency = null;

      // Find the currency information within the list items
      currencyItems.forEach(item => {
        if (item.textContent.startsWith('Currency:')) {
          currency = item.textContent;
        }
      });

      // Check if the currency information includes the search text
      if (currency && currency.includes(searchText)) {
        const cName = country.querySelector('h2').textContent;
        matches.push({ cName, currency });
      }
    });

    // Display the matching countries and their currencies in an alert
    if (matches.length > 0) {
      let alertContent = '';

      for (let i = 0; i < Math.min(matches.length, 5); i++) {
        alertContent += `${matches[i].cName} - ${matches[i].currency}\n`;
      }

      alert(alertContent);
    } else {
      alert('No matches found.');
    }
  }

  // Add event listener for search button click for name search
  const searchButton = document.getElementById('searchByName');
  searchButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevents form submission
    searchCountries();
  });

  // Add event listener for Enter key press in name input field
  NameInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevents form submission
      searchCountries();
    }
  });

  // Add event listener for search button click for currency search
  const searchButton2 = document.getElementById('searchByCurrency');
  searchButton2.addEventListener('click', function (event) {
    event.preventDefault(); // Prevents form submission
    searchCurrency();
  });

  // Add event listener for Enter key press in currency input field
  CurrencyInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevents form submission
      searchCurrency();
    }
  });
});
