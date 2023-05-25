/* eslint-disable no-param-reassign */

import _ from 'lodash';
import validateForm from '../validators/validatorForm.js';
import isUniqRSSUrlinResources from '../validators/validatorUniqUrlRSS.js';
import handlerLoadingRSSContent from './handlerDataRSSPosts.js';

// eslint-disable-next-line max-len
const handlerButton = (watcherValidationRSSUrl, watcherLoadingRSSContent, watcherActivityBtn, i18n, input) => {
  const form = document.querySelector('.rss-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const content = input.value;
    validateForm(i18n, content)
      .then(({ rssUrl }) => {
        if (!isUniqRSSUrlinResources(watcherLoadingRSSContent.resources, rssUrl)) throw new Error(i18n.t('isntUniqRSSUrl'));
        watcherValidationRSSUrl.message = i18n.t('isValid');
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
        watcherValidationRSSUrl.message = i18n.t('isLoaded');
        watcherActivityBtn.currentProcess = 'fillingRssUrl';
      })
      .catch((err) => {
        console.log(err);
        if (_.has(err, 'errors')) {
          const [error] = err.errors;
          watcherValidationRSSUrl.message = error;
          watcherValidationRSSUrl.isValid = false;
          return;
        }
        watcherValidationRSSUrl.message = err.message;
        watcherValidationRSSUrl.isValid = false;
      });
  });
};

export default handlerButton;