
import onChange from 'on-change';
import view from './view.js';
import handlerButton from './handlers/handlerButton.js';

const app = (state) => {
  console.log(state, 'state');
  const watcher = onChange(state, (path, validationStatus) => {
    if (path === watcher.resultOfValidation.isValid) {
      console.log(validationStatus, 'status');
      view(validationStatus, watcher.resultOfValidation.message);
    }
  });
  console.log(watcher.i18n.t('isNotURL'), 'app');
  const input = document.querySelector('#url-input');
  input.focus();

  handlerButton(watcher, input);
};

export default app;