export function HTTPRequest() {
  const response = fetch(
    "https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote"
  )
    .then((response) => response.json())
    .then((response) => {
      console.log("SUCCESSFUL REQ: ", response);
      return response;
    })
    .catch((err) => {
      console.log("ERROR: ", err);
    });

  return response;
}

export async function getAllQuotes() {
  const allFetchedQuotes = [];
  const allFetchedQuotesIds = [];

  let checkAgain = -1;
  while (checkAgain < allFetchedQuotesIds.length) {
    const quote = await HTTPRequest();
    if (!allFetchedQuotesIds.includes(quote.id)) {
      allFetchedQuotes.push(quote);
      allFetchedQuotesIds.push(quote.id);
    } else {
      checkAgain++;
    }
  }
  return { allFetchedQuotesIds, allFetchedQuotes };
}
