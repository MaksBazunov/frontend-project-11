import * as yup from 'yup';
import { setLocale } from 'yup';

const validateForm = (i18n, content) => {
  setLocale({
    mixed: {
      default: 'field_invalid',
    },
    string: {
      url: i18n.t('isNotURL'),
      required: i18n.t('isNotURL'),
    },
  });
  const shema = yup.object().shape({
    rssUrl: yup.string()
      .required()
      .url()
      .trim(),
  });
  return shema.validate({ rssUrl: content });
};

export default validateForm;