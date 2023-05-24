const handlerInput = (watcherValidationRSSUrl, input) => {
  input.addEventListener('input', (e) => {
    e.preventDefault();
    watcherValidationRSSUrl.isValid = null;
  });
};
export default handlerInput;