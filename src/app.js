/* eslint-disable no-undef */
import { watcherValidation, watcherFillingDataForRss } from './view/watchers';
import handlerButton from './handlers/handlerButton.js';
import handlerInput from './handlers/handlerInput.js';

const app = (state) => {
 
  const input = document.querySelector('#url-input');
  input.focus();
  const watcherValid = watcherValidation(state);
  const watcherFillingDataForRSS = watcherFillingDataForRss(state);
  console.log(watcherFillingDataForRSS);
  handlerInput(watcherValid, input);
  handlerButton(watcherValid, watcherFillingDataForRSS, state.i18n, input);
};

export default app;