export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

export function convertID(str, restore = false) {
  if (restore) return str.replaceAll("^", " ");

  return str.replaceAll(" ", "^");
}

export const combineArraysNoDups = (arrayOne, arrayTwo) => [
  ...new Set([...arrayOne, ...arrayTwo]),
];
// combineArraysNoDups(arrayOne, arrayTwo);

function getAllValues(selector) {
  const allValues = document.querySelectorAll(selector);
  console.log("allValues: ", allValues);

  const output = [];

  allValues.forEach((item) => {
    const text = item.innerText;
    if (text && text.trim() != "") output.push(text);
  });

  return output;
}
// getAllValues("a.category-page__member-link");

getAllValues(
  "table.wikitable.sortable.jquery-tablesorter tbody tr td:first-child a"
);
