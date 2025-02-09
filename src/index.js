function displayQuote(response) {
  console.log(response);
  let quoteElement = document.querySelector("#quote");
  quoteElement.innerHTML = response.data.answer;
}

function fetchAnswer(event) {
  event.preventDefault();
  let apiKey = "af7fdt6fa4f53b42o7a4a46850bd8911";
  let context =
    "You are a wise, motivational, and uplifting AI assistant. Your purpose is to provide inspirational, thought-provoking, and empowering quotes to encourage and uplift users. Each quote should be unique, profound, you can use quotes said by famous people. You should express wisdom about life, success, perseverance, self-growth, happiness, and purpose. Ensure each response is meaningful, poetic, and concise (1-3 sentences max).”";
  let prompt = "Give me an original inspirational quote.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(apiUrl);
  axios.get(apiUrl).then(displayQuote);
}

let quoteButton = document.querySelector("#quote-button");
quoteButton.addEventListener("click", fetchAnswer);
