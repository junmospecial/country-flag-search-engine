document.addEventListener('DOMContentLoaded', function () {
  const NameInput = document.getElementById('gsearchByName');
  const CurrencyInput = document.getElementById('gsearchByCurrency');
  function searchCountries() {
    const searchText = NameInput.value.trim().toLowerCase(); // Trim whitespace
  
    if (searchText === '') {
      alert('Input is empty. Please enter a search term.');
      return; // Exit the function if input is empty
    }
  
    const countries = document.querySelectorAll('.country-box');
    let matches = [];
  
    countries.forEach(country => {
      const cName = country.querySelector('h2').textContent.toLowerCase();
  
      if (cName.startsWith(searchText)) {
        const currency = country.querySelector('ul li:nth-child(1)').textContent;
        matches.push({ cName, currency });
      }
    });
  
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
  



  // Add event listener for search button click
  const searchButton = document.getElementById('searchByName');
  searchButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevents form submission
    searchCountries();
  });

  // Add event listener for enter key press
  NameInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevents form submission
      searchCountries();
    }
  });

  // Add event listener for search button click
  const searchButton2 = document.getElementById('searchByCurrency');
  searchButton2.addEventListener('click', function (event) {
    event.preventDefault(); // Prevents form submission
    searchCurrency();
  });

  CurrencyInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevents form submission
      searchCurrency();
    }
  });

});
