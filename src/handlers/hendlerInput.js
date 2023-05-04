const handlerInput = (watcher, input) => {
    input.addEventListener('input', (e) => {
      e.preventDefault();
      watcher.process = 'filling';
      watcher.resultOfValidation.isValid.status = null;
    });
};
export default handlerInput;