/* eslint-disable no-param-reassign */

import _ from 'lodash';
import validateForm from '../validators/validatorForm.js';
import isUniqRSSUrlinResources from '../validators/validatorUniqUrlRSS.js';
import handlerLoadingRSSContent from './handlerDataRSSPosts.js';
import renderFeedback from '../renders/renderValid.js';

// eslint-disable-next-line max-len
const handlerButton = (state, watcherValidationRSSUrl, watcherLoadingRSSContent, watcherActivityBtn, input) => {
  const form = document.querySelector('.rss-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const content = input.value;
    validateForm(state.i18n, content)
      .then(({ rssUrl }) => {
        if (!isUniqRSSUrlinResources(watcherLoadingRSSContent.resources, rssUrl)) throw new Error(state.i18n.t('isntUniqRSSUrl'));
        state.feedbackMessage = state.i18n.t('isValid');
        watcherValidationRSSUrl.isValid = true;
        return rssUrl;
      })
      .then((rssUrl) => {
        console.log('second');
        watcherActivityBtn.currentProcess = 'loadingRssContent';
        return rssUrl;
      })
      .then((rssUrl) => {
        handlerLoadingRSSContent(watcherLoadingRSSContent, rssUrl);
      })
      .then(() => {
        state.feedbackMessage = state.i18n.t('isLoaded');
        watcherActivityBtn.currentProcess = 'fillingRssUrl';
      })
      .catch((err) => {
        console.log(err);
        if (_.has(err, 'errors')) {
          const [error] = err.errors;
          state.feedbackMessage = error;
          watcherValidationRSSUrl.isValid = false;
          return;
        }
        state.feedbackMessage = err.message;
        watcherValidationRSSUrl.isValid = false;
      });
  });
};

export default handlerButton;