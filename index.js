function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "fa435400b43764t1aacoeaf588994da3";
  let prompt = `User instructions: Generate a ${instructionsInput.value} recipe`;
  let context =
    "You are a cooking expert and love to give out cooking recipies. Your mission is to generate a short recipe in basic HTML (Return ONLY raw HTML, no ```html) and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the recipe. Sign the recipe with `SheCodes AI` inside a <strong> element";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayRecipe);
}

let recipeformElement = document.querySelector("#recipe-generator-form");
recipeformElement.addEventListener("submit", generateRecipe);
