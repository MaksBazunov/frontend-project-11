/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-cycle
import handlerCheckingNewPostInResources from './handlerCheckingNewPostInResources.js';

const handlerSetTimeout = (watcherLoadingRSSContent, state, status) => {
  const timerID = watcherLoadingRSSContent.updatingTopics.currentTimerID;
  if (timerID) clearTimeout(timerID);
  console.log('setted');
  if (status) {
    const idCorrectTimer = setTimeout(() => {
      handlerCheckingNewPostInResources(watcherLoadingRSSContent, state);
      watcherLoadingRSSContent.updatingTopics.currentTimerID = idCorrectTimer;
    }, 5000);
    // eslint-disable-next-line max-len
    return;
  }

  const idWrongTimer = setTimeout(() => {
    handlerCheckingNewPostInResources(watcherLoadingRSSContent, state);
    watcherLoadingRSSContent.updatingTopics.currentTimerID = idWrongTimer;
  }, 30000);
};

export default handlerSetTimeout;