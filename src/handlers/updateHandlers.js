/* eslint-disable no-param-reassign */
import axios from 'axios';
import parserRSS from '../parsers/parserRss.js';

const  proxy = 'https://allorigins.hexlet.app/get?';

const checkNewPostInResources = (watcherLoadingRSSContent) => {
  const { topics: oldTopics, resources } = watcherLoadingRSSContent;
  const promises = resources.map((resource) => (
    axios.get(`${proxy}disableCache=true&url=${encodeURIComponent(resource.value)}/`)
      .then((response) => parserRSS(response, resource.id))
  ));

  Promise.all(promises)
    .then((parsedResources) => {
      parsedResources.forEach((parsedRss) => {
        const { topics, feed } = parsedRss;
        const { id: currentId } = feed;
        const oldTopicsWithCurrentIdFilter = oldTopics.filter(({ id }) => currentId === id);
        const oldTopicsWithCurrentId = oldTopicsWithCurrentIdFilter.map(({ title }) => title);
        const newTopics = topics.filter(({ title }) => !oldTopicsWithCurrentId.includes(title));
        if (newTopics.length === 0) return;
        newTopics.forEach((newTopic) => watcherLoadingRSSContent.topics.push(newTopic));
      });
    })
    .then(() => {
      watcherLoadingRSSContent.updatingTopics.errorUpdating = false;
    })
    .catch(() => {
      watcherLoadingRSSContent.updatingTopics.errorUpdating = true;
    })
    Promise.all(promises).finally(() => {
    setTimeout(() => checkNewPostInResources(watcherLoadingRSSContent), 5000);
  });
};

const getCurrentTimerId = (watcher) => watcher.updatingTopics.currentTimerID;

const setTimer = (watcherLoadingRSSContent, state, status) => {
  const currentTimerId = getCurrentTimerId(watcherLoadingRSSContent);
  if (currentTimerId) clearTimeout(currentTimerId);

  if (status) {
    const correctTimerId = setTimeout(() => {
      checkNewPostInResources(watcherLoadingRSSContent, state);
      watcherLoadingRSSContent.updatingTopics.currentTimerID = correctTimerId;
    }, 5000);
    return;
  }

  const wrongTimerId = setTimeout(() => {
    checkNewPostInResources(watcherLoadingRSSContent, state);
    watcherLoadingRSSContent.updatingTopics.currentTimerID = wrongTimerId;
  }, 5000);
};

export  { setTimer, checkNewPostInResources, getCurrentTimerId };
export default proxy;