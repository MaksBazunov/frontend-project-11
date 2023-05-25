import handlerCheckingNewPostInResources from './handlerCheckingNewPostInResources.js';

const handlerSetTimeout = (watcherLoadingRSSContent, status) => {
  console.log('settedTimeout');
  switch (true) {
    case (status === true):
      setTimeout(() => {
        handlerCheckingNewPostInResources(watcherLoadingRSSContent);
      }, 5000);
      break;
    case (status === false):
      setTimeout(() => {
        handlerCheckingNewPostInResources(watcherLoadingRSSContent);
      }, 30000);
      break;
    default:
      throw new Error('something Wrong in handlerSetTimeout');
  }
};

export default handlerSetTimeout;