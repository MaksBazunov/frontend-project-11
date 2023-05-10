const handlerInput = (watcherValid, input) => {
    input.addEventListener('input', (e) => {
      e.preventDefault();
      watcherValid.isValid = null;
    });
};
export default handlerInput;