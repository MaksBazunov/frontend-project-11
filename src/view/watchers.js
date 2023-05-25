import onChange from 'on-change';
import renderFeedback from '../renders/renderValid.js';
import buttonActivityRender from '../renders/buttonActivityRender.js';
import renderRssContent from '../renders/renderRssPosts.js';

const watcherValidationRssURL = (state) => {
  const watcher = onChange(state.resultOfValidationRssUrl, (path, validationStatus) => {
    console.log(state.feedbackMessage);
    if (validationStatus === null) return;
    renderFeedback(validationStatus, state.feedbackMessage);
  });
  return watcher;
};

const watcherActivityButton = (state) => {
  const watcher = onChange(state.process, (path, process) => buttonActivityRender(process));
  return watcher;
};

const watcherLoadingRssContent = (state) => {
  const watcher = onChange(state.resultOfLoadingRssContent, (path, value, previouesValue) => {
    if (path === 'addingCounter' && value > previouesValue) {
      renderRssContent(watcher, state.i18n);
      renderFeedback(true, state.feedbackMessage);
    }
  });
  return watcher;
};

export {
  watcherValidationRssURL, watcherActivityButton,
  watcherLoadingRssContent,
};