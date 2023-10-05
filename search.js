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

