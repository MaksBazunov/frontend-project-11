import * as yup from 'yup';
import { setLocale } from 'yup';

const validatorForm = (i18n, content) => {
  setLocale({
    mixed: {
      default: 'field_invalid',
    },
    string: {
      url: i18n.t('isNotURL'),
      matches: i18n.t('isNotRssURL'),
      required: i18n.t('isNotURL'),
    },
  });
  const shema = yup.object().shape({
    rssUrl: yup.string()
      .required()
      .url()
      .trim()
      .matches(/.rss$/),
  });
  return shema.validate({ rssUrl: content });
};

export default validatorForm;