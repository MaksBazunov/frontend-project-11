/* eslint-disable no-param-reassign */
import validateForm from '../validators/validatorForm.js';
import isNewRSS from '../validators/validatorUniqUrlRSS.js';
import handlerLoadingRSSContent from './handlerDataRSSPosts.js';

// eslint-disable-next-line max-len
const handlerButton = (state, watcherValidationRSSUrl, watcherLoadingRSSContent, watcherActivityBtn, input) => {
  const form = document.querySelector('.rss-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const content = input.value;

    validateForm(state.i18n, content)
      .catch(({ errors }) => { // Парсер ошибки
        console.log(JSON.stringify(errors, null, 5));
        const [error] = errors;
        throw new Error(error);
      })
      .then(({ rssUrl }) => {
        const { resources } = watcherLoadingRSSContent;
        if (!isNewRSS(resources, rssUrl)) throw new Error(state.i18n.t('validation.errors.errorUniqRSSUrl'));
        return rssUrl;
      })
      .then((rssUrl) => {
        state.feedbackMessage = state.i18n.t('validation.isValid');
        watcherValidationRSSUrl.isValid = true;
        watcherActivityBtn.currentProcess = 'loadingRssContent';
        return rssUrl;
      })
      .then((rssUrl) => {
        handlerLoadingRSSContent(watcherLoadingRSSContent, watcherActivityBtn, rssUrl, state);
      })
      .catch((error) => {
        state.feedbackMessage = error.message;
        watcherValidationRSSUrl.isValid = false;
        watcherActivityBtn.currentProcess = 'fillingRssUrl';
      });
  });
};

export default handlerButton;