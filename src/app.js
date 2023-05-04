
import onChange from 'on-change';
import viewValid from './view/viewValid.js';
import viewRssPosts from './view/viewRssPosts.js';
import handlerButton from './handlers/handlerButton.js';
import handlerInput from './handlers/handlerInput.js';

const app = (state) => {
  const watcher = onChange(state, (path, validationStatus) => {
    if (path !== 'resultOfValidation.isValid.status' || validationStatus === null) return;
    viewValid(validationStatus, watcher.resultOfValidation.message);
    if (validationStatus === true) viewRssPosts(watcher.feeds);
  });
  
  const input = document.querySelector('#url-input');
  input.focus();
  handlerInput(watcher, input);
  handlerButton(watcher, input);
};

export default app;