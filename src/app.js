<<<<<<< HEAD
/* eslint-disable no-undef */
import { watcherValidation, watcherFillingDataForRss } from './view/watchers.js';
import handlerButton from './handlers/handlerButton.js';
import handlerInput from './handlers/handlerInput.js';
=======
/* eslint-disable max-len */
import handlerOfBtnFormSection from './handlers/btnFormSectionHandler.js';
import { handlerOfLinkOpeningBtn } from './handlers/modalHandlers.js';
import {
  watcherValidationRssURL, watcherActivityButton,
  watcherLoadingRssContent,
} from './view/watchers.js';
>>>>>>> 9f3492a2056b0efa759a49ff0bc5ff751bfe669f

const app = (state) => {
  const input = document.querySelector('#url-input');

  const watcherValidationRSSUrl = watcherValidationRssURL(state);
  const watcherLoadingRSSContent = watcherLoadingRssContent(state);
  const watcherActivityBtn = watcherActivityButton(state);

  handlerOfLinkOpeningBtn();
  handlerOfBtnFormSection(state, watcherValidationRSSUrl, watcherLoadingRSSContent, watcherActivityBtn, input);
};

export default app;