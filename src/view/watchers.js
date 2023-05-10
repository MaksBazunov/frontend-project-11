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
      case (path === 'process'):
        buttonActivityRender(value);
        break;
      case (path === 'feeds'):
        renderRssPosts(watcher.feeds);
        break;
      default:
        throw new Error(`${path} something wrong in watcherFillingDataForRss`)
    }
  });
  return watcher;
};

export { watcherValidation, watcherFillingDataForRss };