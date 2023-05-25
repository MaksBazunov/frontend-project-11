/* eslint-disable no-undef */
import {
  watcherValidationRssURL, watcherActivityButton,
  watcherLoadingRssContent,
} from './view/watchers.js';
import handlerButton from './handlers/handlerButton.js';
import handlerInput from './handlers/handlerInput.js';
// import handlerSetTimeout from './handlers/handlerSetTimeout.js';

const app = (state) => {
  const input = document.querySelector('#url-input');

  const watcherValidationRSSUrl = watcherValidationRssURL(state);
  const watcherLoadingRSSContent = watcherLoadingRssContent(state);
  const watcherActivityBtn = watcherActivityButton(state);

  handlerInput(watcherValidationRSSUrl, input);
  // eslint-disable-next-line max-len
  handlerButton(state, watcherValidationRSSUrl, watcherLoadingRSSContent, watcherActivityBtn, input);
  // handlerSetTimeout(watcherLoadingRSSContent, true);
};

export default app;