
    document.addEventListener('DOMContentLoaded', function() {
        const searchInput = document.getElementById('gsearchByName');
        const searchInput1 = document.getElementById('gsearchByCurrency');
    
        function searchCountries() {
            const searchText = searchInput.value.toLowerCase();
            const countries = document.querySelectorAll('.country-box');
    
            let matches = [];
    
            countries.forEach(country => {
                const countryName = country.querySelector('h2').textContent.toLowerCase();
    
                if (countryName.startsWith(searchText)) {
                    const currency = country.querySelector('ul li:nth-child(1)').textContent;
                    matches.push({ countryName, currency });
                }
            });
    
            if (matches.length > 0) {
                let alertContent = '';
    
                for (let i = 0; i < Math.min(matches.length, 5); i++) {
                    alertContent += `${matches[i].countryName} - ${matches[i].currency}\n`;

                }
    
                alert(alertContent);
            }
        } 
        // Add event listener for search button click
        const searchButton = document.getElementById('searchByName');
        searchButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevents form submission     
        });
        // Add event listener for enter key press
        searchInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevents form submission
                searchCountries();
            }
        });  
        searchButton.addEventListener('click', function(event) {
          event.preventDefault(); // Prevents form submission
          if (searchInput.value.trim() === '') {
              alert('Input is empty. Please enter a search term.');
          } else {
              searchCountries();
          }
      });
    });






    
    document.addEventListener('DOMContentLoaded', function() {
      const searchInput = document.getElementById('gsearchByName');
      const searchInput1 = document.getElementById('gsearchByCurrency');
  
      function searchCurrencies() {
          const searchText = searchInput1.value.toLowerCase();
          const currencies = document.querySelectorAll('.cCode');
  
          let matches = [];
  
          currencies.forEach(country => {
              const countryName = country.querySelector('h2').textContent.toLowerCase();
              const countryCurrency = country.querySelector('li').textContent.toLowerCase();
  
              if (countryName.startsWith(searchText)) {
                  const currency = country.querySelector('ul li:nth-child(1)').textContent;
                  matches.push({ countryName, currency });
              }
          });
  
          if (matches.length > 0) {
              let alertContent = '';
  
              for (let i = 0; i < Math.min(matches.length, 5); i++) {
                  alertContent += `${matches[i].countryName} - ${matches[i].currency}\n`;

              }
  
              alert(alertContent);
          }
      }



      // Add event listener for search button click
      const searchButton2 = document.getElementById('searchByCurrency');
      searchButton2.addEventListener('click', function(event) {
          event.preventDefault(); // Prevents form submission
          
      });
  
      // Add event listener for enter key press
      searchInput1.addEventListener('keydown', function(event) {
          if (event.key === 'Enter') {
              event.preventDefault(); // Prevents form submission
              searchCurrencies();
          }
      });
  
      searchButton2.addEventListener('click', function(event) {
        event.preventDefault(); // Prevents form submission
        if (searchInput1.value.trim() === '') {
            alert('Input is empty. Please enter a search term.');
        } else {
            searchCurrencies();
        }
    });
  });
    



