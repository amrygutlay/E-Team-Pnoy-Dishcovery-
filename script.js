function searchRecipe() {
  var searchInput = document.getElementById('search-input').value;
  // Perform your search logic here, e.g., redirect to search results page
  // or filter the recipes based on the search input.
}

function changePage(pageNumber) {
  const buttons = document.querySelectorAll('.pagination button');
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  const selectedButton = document.querySelector(`.pagination button:nth-child(${pageNumber})`);
  selectedButton.classList.add('active');

  // Add logic to change the content based on the selected page
  // For demonstration purposes, let's just log the selected page number
  console.log(`Page ${pageNumber} selected`);
}

// Define the number of recipes per page and the current page
const recipesPerPage = 4; // Change this value if you want a different number of recipes per page
let currentPage = 1;

// Function to show recipes for the current page
function showRecipesForPage(page) {
  const recipeCards = document.querySelectorAll(".recipe-card");
  const startIndex = (page - 1) * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;

  recipeCards.forEach((card, index) => {
    if (index >= startIndex && index < endIndex) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Function to handle pagination button clicks
function changePage(page) {
  currentPage = page;
  showRecipesForPage(currentPage);

  // Update active state of pagination buttons
  const paginationButtons = document.querySelectorAll(".pagination button");
  paginationButtons.forEach((button, index) => {
    if (index + 1 === page) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

// Function to sign out and redirect to home page
function signOut() {
  // Redirect to home page (index.html)
  window.location.href = "index.html";
}

// Initially show recipes for the first page
showRecipesForPage(currentPage);

// Function to sign out and redirect to home page
function signOut() {
  // Redirect to home page (index.html)
  window.location.href = "index.html";
}

// Function to change avatar image
function changeAvatar() {
  var avatar = document.getElementById('avatar');
  // Change the image source to a different avatar image
  avatar.src = "pics/new-avatar.jpg";
}

