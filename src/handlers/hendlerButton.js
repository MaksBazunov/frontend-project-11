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
      // console.log(watcher.feeds.includes(resultOfValidation), watcher.feeds, 'hello');
        if (watcher.feeds.includes(resultOfValidation)) throw new Error(watcher.i18n.t('urlInAddedResources'));
        watcher.feeds.push(resultOfValidation);
        watcher.resultOfValidation.message = watcher.i18n.t('isValid');
        watcher.resultOfValidation.isValid.status = true;
      })
      .catch((err) => {
         // console.log(JSON.stringify(err, null, 4), 'aaasdfasdf');
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