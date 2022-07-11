var searchForm = document.querySelector("#search-form");

function submitSearch(event) {
  event.preventDefault();
  const searchInput = document.querySelector("#search-input").value;
  if (searchInput.length > 0) {
    window.location.href = "recipes/?search=" + searchInput;
  }
}

searchForm.addEventListener("submit", submitSearch);
