import onChange from 'on-change';
import renderValidation from '../renders/renderValid.js';
import buttonActivityRender from '../renders/buttonActivityRender.js';
import renderRssPosts from '../renders/renderRssPosts.js';

const watcherValidation = (state) => {
  const watcher = onChange(state.resultOfValidation, (path, validationStatus) => {
    if (path !== 'isValid' || validationStatus === null) return;
    renderValidation(validationStatus, watcher.message);
  });
  return watcher;
};

const watcherFillingDataForRss = (state) => {
  const watcher = onChange(state.resultOfLoadingRss, (path, value) => {
    switch (true) {
      case (path === 'process' && value !== 'renderingRSS'):
        buttonActivityRender(value);
        break;
      case (path === 'process' && value === 'renderingRSS'):
        renderRssPosts(watcher, state.i18n);
        break;
      default:
        throw new Error(`${path} something wrong in watcherFillingDataForRss`);
    }
  });
  return watcher;
};

export { watcherValidation, watcherFillingDataForRss };