/* eslint-disable no-param-reassign */
import validateForm from '../validators/validatorForm.js';
import isNewRSSResource from '../validators/newRSSResource.js';
import handlerOfLoadingRSSContent from './dataRSSPostsHandler.js';

// eslint-disable-next-line max-len
const handlerOfBtnFormSection = (state, watcherValidationRSSUrl, watcherLoadingRSSContent, watcherActivityBtn, input) => {
  const form = document.querySelector('.rss-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const content = input.value;

    validateForm(state.i18n, content)
      .catch(({ errors }) => { 
        console.log(JSON.stringify(errors, null, 5));
        const [error] = errors;
        console.log(error);
        throw new Error(error);
      })
      .then((rssUrl) => {
        const { resources } = watcherLoadingRSSContent;
        if (!isNewRSSResource(resources, rssUrl)) throw new Error(state.i18n.t('validation.errors.errorUniqRSSUrl'));
        return rssUrl;
      })
      .then((rssUrl) => {
        state.feedbackMessage = state.i18n.t('validation.isValid');
        watcherValidationRSSUrl.isValid = true;
        watcherActivityBtn.currentProcess = 'loadingRssContent';
        return rssUrl;
      })
      .then((rssUrl) => {
        handlerOfLoadingRSSContent(watcherLoadingRSSContent, watcherActivityBtn, rssUrl, state);
      })
      .catch((error) => {
        console.log(error, 'end');
        state.feedbackMessage = error.message;
        watcherValidationRSSUrl.isValid = false;
        watcherActivityBtn.currentProcess = 'fillingRssUrl';
      });
  });
};

export default handlerOfBtnFormSection;