/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-cycle
import handlerCheckingNewPostInResources from './handlerCheckingNewPostInResources.js';

const handlerSetTimeout = (watcherLoadingRSSContent, state, status) => {
  const { currentTimerID } = watcherLoadingRSSContent.updatingTopics;
  if (currentTimerID) clearTimeout(currentTimerID);

  if (status) {
    const correctTimerId = setTimeout(() => {
      handlerCheckingNewPostInResources(watcherLoadingRSSContent, state);
      watcherLoadingRSSContent.updatingTopics.currentTimerID = correctTimerId;
    }, 5000);
    return;
  }

  const wrongTimerId = setTimeout(() => {
    handlerCheckingNewPostInResources(watcherLoadingRSSContent, state);
    watcherLoadingRSSContent.updatingTopics.currentTimerID = wrongTimerId;
  }, 30000);
};

export default handlerSetTimeout;