const urlParams = new URLSearchParams(window.location.search);
const urlSearch = urlParams.get("search").toLowerCase();

if (urlSearch) {
  const searchList = urlSearch.split(" ");
  const listElements = document.querySelectorAll(".list-item");

  // loop through each html element
  listElements.forEach((item) => {
    let displayElement = false;
    // check if any word in search is in the element
    searchList.forEach((searchItem) => {
      // if so, keep it displayed
      if (item.textContent.toLowerCase().includes(searchItem)) {
        displayElement = true;
        return;
      }
    });

    // if no matches found, hide it
    // the element technically still exists in the DOM, and ideally it should never have been rendered at all, but that is a limitation of a static website
    if (!displayElement) {
      item.classList.add("dn-ns");
    }
  });

  // display relevant message for whether or not search results were found
  if (document.querySelectorAll(".dn-ns").length < listElements.length) {
    document
      .querySelector("#content")
      .querySelector("p").textContent = `Showing results for "${urlSearch}"`;
  } else {
    document
      .querySelector("#content")
      .querySelector("p").textContent = `No results found for "${urlSearch}"`;
  }
}
