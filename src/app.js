
import { watcherValidation, watcherFillingDataForRss } from './view/watchers.js';
import handlerButton from './handlers/handlerButton.js';
import handlerInput from './handlers/handlerInput.js';

const app = (state) => {
  const input = document.querySelector('#url-input');

  const watcherValidationRSSUrl = watcherValidationRssURL(state);
  const watcherLoadingRSSContent = watcherLoadingRssContent(state);
  const watcherActivityBtn = watcherActivityButton(state);

  handlerOfLinkOpeningBtn();
  handlerOfBtnFormSection(state, watcherValidationRSSUrl, watcherLoadingRSSContent, watcherActivityBtn, input);
};

export default app;