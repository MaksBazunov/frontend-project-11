/* eslint-disable no-param-reassign */
import validateForm from '../validators/formValidator.js';
import isNewRSSResource from '../validators/newRSSResource.js';
import handlerOfLoadingRSSContent from './dataRSSPostsHandler.js';

// eslint-disable-next-line max-len
const input = document.querySelector('#url-input');

const handlerOfBtnFormSection = (state, watcherValidRSSUrl, watcherLoadRSSContent, watcherBtn) => {
  const form = document.querySelector('.rss-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const content = input.value;
    validateForm(state.i18n, content)
      .then((rssUrl) => {
        const { resources } = watcherLoadRSSContent;
        if (!isNewRSSResource(resources, rssUrl)) throw new Error(state.i18n.t('validation.errors.errorUniqRSSUrl'));
        return rssUrl;
      })
      .then((rssUrl) => {
        watcherBtn.currentProcess = 'loadingRssContent';
        state.feedbackMessage = state.i18n.t('validation.isValid');
        watcherValidRSSUrl.isValid = true;
        return rssUrl;
      })
      .then((rssUrl) => {
        // eslint-disable-next-line max-len
        handlerOfLoadingRSSContent(watcherLoadRSSContent, watcherBtn, rssUrl, state);
      })
      .catch((error) => {
        console.log(error, 'end');
        state.feedbackMessage = error.message;
        watcherValidRSSUrl.isValid = false;
        watcherBtn.currentProcess = 'fillingRssUrl';
        throw new Error(error);
      });
  });
};

export default handlerOfBtnFormSection;
