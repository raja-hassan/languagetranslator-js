const googleTranslate = require('google-translate-api');
//To use this code, you'll need to install the google-translate-api package using npm:
//npm install google-translate-api

const sourceLanguageInput = document.getElementById('source-language');
const targetLanguageInput = document.getElementById('target-language');
const sourceTextInput = document.getElementById('source-text');
const translatedTextInput = document.getElementById('translated-text');
const translateButton = document.getElementById('translate-button');

translateButton.addEventListener('click', async () => {
  const sourceLanguage = sourceLanguageInput.value;
  const targetLanguage = targetLanguageInput.value;
  const sourceText = sourceTextInput.value;

  const translatedText = await googleTranslate(sourceText, {
    from: sourceLanguage,
    to: targetLanguage
  });

  translatedTextInput.value = translatedText.text;
});
