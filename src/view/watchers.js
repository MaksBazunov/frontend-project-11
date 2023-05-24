import onChange from 'on-change';
import renderValidation from '../renders/renderValid.js';
import buttonActivityRender from '../renders/buttonActivityRender.js';
import renderRssContent from '../renders/renderRssPosts.js';

const watcherValidationRssURL = (state) => {
  const watcher = onChange(state.resultOfValidationRssUrl, (path, validationStatus) => {
    if (path === 'message' && watcher.isValid === true) renderValidation(watcher.isValid, validationStatus);
    if (validationStatus === null || path !== 'isValid') return;
    renderValidation(validationStatus, watcher.message);
  });
  return watcher;
};

const watcherActivityButton = (state) => {
  const watcher = onChange(state.process, (path, process) => buttonActivityRender(process));
  return watcher;
};

const watcherLoadingRssContent = (state) => {
  const watcher = onChange(state.resultOfLoadingRssContent, (path) => {
    if (path === 'feeds') renderRssContent(watcher, state.i18n);
  });
  return watcher;
};

export { watcherValidationRssURL, watcherActivityButton, watcherLoadingRssContent };