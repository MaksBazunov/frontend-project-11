import _ from 'lodash';

const handlerButton = (watcher, input) => {
  console.log(watcher, input, 'firstSpet');
  const form = document.querySelector('.rss-form');
  console.log(form);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    Promise.resolve(input.value)
      .then((content) => {
        console.log(content, 'content', watcher.i18n.t('urlInAddedResources'));
        if (watcher.addedResources.includes(content)) throw new Error(watcher.i18n.t('urlInAddedResources'));
        watcher.addedResources.push(content);
        console.log(watcher.addedResources, 'added content');
        watcher.shemes.urlValidationScheme.validate({ rssUrl: content });
      })
      .then((content2) => {
        console.log(content2);
        console.log(1);
        watcher.resultOfValidation.message = watcher.i18n.t('isValid');
        watcher.resultOfValidation.status = true;
      })
      .catch((err) => {
        console.log(err);
        console.log(JSON.stringify(err, null, 4), 'err');
        if (_.has(err, 'errors')) {
          const [error] = err.errors;
          console.log(error);
          watcher.resultOfValidation.message = error;
          watcher.resultOfValidation.status = false;
        }
      });
  });
};

export default handlerButton;