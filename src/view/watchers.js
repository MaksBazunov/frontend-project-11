import onChange from 'on-change';
import renderFeedback from '../renders/renderValid.js';
import buttonActivityRender from '../renders/buttonActivityRender.js';
import renderRssContent from '../renders/renderRssPosts.js';
import handlerSetTimeout from '../handlers/handlerSetTimeout.js';
import switchToDefaultValue from '../handlers/switchToDefaultValue.js';
import handlerBtnsTopics from '../handlers/handlerBtnOutline.js';
import renderModal from '../renders/renderModal.js';
import handlerLink from '../handlers/handlerLink.js';
import renderTitle from '../renders/renderTitle.js';
import getCurrentTimerId from '../handlers/getCurrentTimerId.js';

const watcherValidationRssURL = (state) => {
  const watcher = onChange(state.resultOfValidationRssUrl, (path, validationStatus) => {
    if (validationStatus === null) return;
    renderFeedback(validationStatus, state.feedbackMessage);
    switchToDefaultValue(watcher, path);
  });
  return watcher;
};

const watcherActivityButton = (state) => {
  const watcher = onChange(state.process, (path, process) => buttonActivityRender(process));
  return watcher;
};

const watcherLoadingRssContent = (state) => {
  const watcher = onChange(state.resultOfLoadingRssContent, (path, value) => {
    switch (path) {
      case ('errorLoading'):
        if (value === true) {
          renderFeedback(false, state.feedbackMessage);
          switchToDefaultValue(watcher, path);
        }
        if (value === false) {
          renderRssContent(watcher, state.i18n);
          renderFeedback(true, state.feedbackMessage);
          handlerBtnsTopics(watcher);
          switchToDefaultValue(watcher, path);
          if (!getCurrentTimerId(watcher)) handlerSetTimeout(watcher, state, true);
        }
        break;
      case ('updatingTopics.errorUpdating'):
        if (value === true) {
          renderFeedback(false, state.feedbackMessage);
          handlerSetTimeout(watcher, state, false);
          switchToDefaultValue(watcher, path);
        }
        break;
      case ('updatingTopics.currentTimerID'):
        handlerSetTimeout(watcher, state, true);
        break;
      case ('uiState.currentModalTopic'):
        renderModal(value);
        break;
      case ('uiState.viewedTopics'):
        renderTitle(watcher.uiState.viewedTopics);
        break;
      default:
        break;
    }
  });
  return watcher;
};

export {
  watcherValidationRssURL, watcherActivityButton,
  watcherLoadingRssContent,
};