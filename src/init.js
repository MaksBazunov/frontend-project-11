import i18next from 'i18next';
import * as yup from 'yup';
import languages from './resources/languages.js';
import app from './app.js';

const runApp = () => {
  const promise = new Promise((resolve) => {
    const i18Instance = i18next.createInstance();
    i18Instance.init({
      lng: 'ru',
      debug: true,
      resources: languages.ru,
    });
    resolve(i18Instance);
});
promise.then((i18nInst) => {
  console.log(i18nInst);
  const state = {
    i18n: i18nInst,
    resultOfValidation: {
      message: null,
      isValid: { status: false },
    },
    addedResources: [],
  };
  state.shemes = {
    urlValidationScheme: yup.object({
      rssUrl: yup.string(state.i18n.t('isNotURL'))
        .url(state.i18n.t('isNotURL'))
        .required(state.i18n.t('isNotURL'))
        .trim(state.i18n.t('isNotURL'))
        .matches(/.rss$/, { message: state.i18n.t('isNotRssURL') }),
    }),
  };
  return state;
})
    .then((state) => {
      app(state);
    })
    .catch((e) => {
      console.log(e, 'error in init');
    });
};

export default runApp;