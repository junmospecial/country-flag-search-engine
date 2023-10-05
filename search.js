  document.addEventListener('DOMContentLoaded', function () {
    // Get references to the input elements by their IDs
    const NameInput = document.getElementById('gsearchByName');
    const CurrencyInput = document.getElementById('gsearchByCurrency');

    // Create a new content block at the top of the page
    const contentBlock = document.createElement("div");
    contentBlock.id = "contentBlock"; // Set an id for styling
    contentBlock.style.border = "2px solid powderblue"; // Add border
    contentBlock.style.borderRadius = "10px"; // Add border-radius
    contentBlock.style.padding = "20px"; // Add padding
    contentBlock.style.justifyContent = "center"; // Center content
    contentBlock.style.margin = "20px"; // Add margin
    contentBlock.style.marginRight = "auto"; // Align to the right
    contentBlock.style.backgroundColor = "#fff"; // Background color
    contentBlock.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)"; // Add box shadow
    contentBlock.style.display = "none"; // Initially hide the content block
    document.body.insertBefore(contentBlock, document.querySelector('.country-box'));

    // Create a container div for the search results
    const resultsContainer = document.createElement("div");
    resultsContainer.className = "content-box"; // Add a class for styling
    contentBlock.appendChild(resultsContainer);

    // Create a new list inside the container
    const resultList = document.createElement("ul");
    resultsContainer.appendChild(resultList);

    // Function to update the search results and show/hide the content block
    function updateSearchResults(matches) {
      // Clear the previous results
      while (resultList.firstChild) {
        resultList.removeChild(resultList.firstChild);
      }

      if (matches.length > 0) {
        // Make the content block visible
        contentBlock.style.display = 'block';
        contentBlock.style.width = '1500px';
        contentBlock.style.height = '300px';
        contentBlock.style.overflow = 'auto';

        const resultContainer = document.createElement("div");
        resultContainer.className = "result-container"; // Add a class for styling

        matches.forEach(match => {
          // Create a div for each match
          const resultItem = document.createElement("div");
          resultItem.className = "result-item"; // Add a class for styling
          
          const flagImg = document.createElement("img");
          flagImg.src = match.flag;
          resultItem.appendChild(flagImg);

          const countryName = document.createElement("h2");
          countryName.textContent = match.cName;
          resultItem.appendChild(countryName);

          const currencyInfo = document.createElement("ul");
          
          const currencyItem = document.createElement("li");
          currencyItem.textContent = `Currency: ${match.currency}`;
          currencyInfo.appendChild(currencyItem);
          
          const regionsItem = document.createElement("li");
          regionsItem.textContent = `Regions: ${match.regions}`;
          currencyInfo.appendChild(regionsItem);
          
          const linkItem = document.createElement("li");
          const link = document.createElement("a");
          link.href = match.link;
          link.target = "_blank";
          link.textContent = "More Info";
          linkItem.appendChild(document.createTextNode("Link: "));
          linkItem.appendChild(link);
          currencyInfo.appendChild(linkItem);
          

          resultItem.appendChild(currencyInfo);
          resultContainer.appendChild(resultItem);
        });

        resultList.appendChild(resultContainer);
      } else {
        // Hide the content block if no matches found or if the input is empty
        contentBlock.style.display = 'none';
      }
    }
    // Function to search for countries by name
    function searchCountries() {
      // Get the trimmed and lowercase search text from the name input field
      const searchText = NameInput.value.trim().toLowerCase();

      // Hide the content block if the input is empty
      if (searchText === '') {
        contentBlock.style.display = 'none';
        return; // Exit the function if input is empty
      }

      // Select all elements with class 'country-box'
      const countries = document.querySelectorAll('.country-box');
      let matches = [];

      // Loop through each country box
      countries.forEach(country => {
        // Get the lowercase text content of the h2 element within the country box
        const cName = country.querySelector('h2').textContent;

        // Check if the country name starts with the search text
        if (cName.toLowerCase().includes(searchText)) {
          // Get the currency, regions, flag, and link information from the country box
          const currency = country.querySelector('ul li:nth-child(1)').textContent;
          const regions = country.querySelector('ul li:nth-child(2)').textContent;
          const flag = country.querySelector('img').src;
          const link = country.querySelector('ul li:nth-child(3) a').href;

          matches.push({ cName, currency, regions, flag, link });
        }
      });

      // Update the search results in the content block
      updateSearchResults(matches);
    }
  });