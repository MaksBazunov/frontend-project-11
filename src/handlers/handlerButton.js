import _ from 'lodash';
import validatorForm from '../validators/validatorForm.js';
import isUniqRSSinFeeds from '../validators/validatorUniqUrlRSS.js';
import handlerDataRSSPosts from './handlerDataRSSPosts.js';

const handlerButton = (watcherValid, watcherFillingDataForRSS, i18n, input) => {
  const form = document.querySelector('.rss-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const content = input.value;
    validatorForm(i18n, content)
    .then(({ rssUrl: resultOfValidation }) => {
      if (!isUniqRSSinFeeds(watcherFillingDataForRSS.resources, resultOfValidation)) throw new Error(i18n.t('urlInAddedResources'));
      watcherValid.message = i18n.t('isValid');
      watcherValid.isValid = true;
      console.log(watcherFillingDataForRSS.resources);
      handlerDataRSSPosts(watcherFillingDataForRSS, resultOfValidation);
      })
      .catch((err) => {
        if (_.has(err, 'errors')) {
          const [error] = err.errors;
          watcherValid.message = error;
          watcherValid.isValid = false;
          return;
        }
        watcherValid.message = err.message;
        watcherValid.isValid = false;
      });
  });
};

export default handlerButton;