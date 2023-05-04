import _ from 'lodash';
import validatorForm from '../validators/validatorForm';

const handlerButton = (watcher, input) => {
  const form = document.querySelector('.rss-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const content = input.value;
    validatorForm(watcher.i18n, content)
    .then(({ rssUrl: resultOfValidation }) => {
      console.log(resultOfValidation);
        if (watcher.feeds.includes(resultOfValidation)) throw new Error(watcher.i18n.t('urlInAddedResources'));
        watcher.feeds.push({ id: watcher.feeds.length, value: resultOfValidation });
        watcher.resultOfValidation.message = watcher.i18n.t('isValid');
        watcher.resultOfValidation.isValid.status = true;
        warther.process = 'loading';
        handlerRSSPosts(watcher.feeds);
      })
      .catch((err) => {
        if (_.has(err, 'errors')) {
          const [error] = err.errors;
          watcher.resultOfValidation.message = error;
          watcher.resultOfValidation.isValid.status = false;
          return;
        }
        watcher.resultOfValidation.message = err.message;
        watcher.resultOfValidation.isValid.status = false;
      });
  });
};

export default handlerButton;