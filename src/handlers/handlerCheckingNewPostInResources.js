/* eslint-disable no-param-reassign */
import axios from 'axios';
import parserRSS from '../parsers/parserRss.js';

const handlerCheckingNewPostInResources = (watcherLoadingRSSContent, state) => {
  const { topics: oldTopics, resources } = watcherLoadingRSSContent;
  const proxy = 'https://allorigins.hexlet.app/get?';

  // eslint-disable-next-line arrow-body-style
  const promises = resources.map((resource) => {
    return axios.get(`${proxy}disableCache=true&url=${encodeURIComponent(resource.value)}/`)
      .catch(() => {
        state.feedbackMessage = state.i18n.t('updating.errors.errorNetWorkUpdating');
        throw new Error();
      })
      .then((response) => parserRSS(response, resource.id))
      .catch(() => {
        state.feedbackMessage = state.i18n.t('updating.errors.errorResourceUpdating');
        throw new Error();
      });
  });

  Promise.all(promises)
    .then((parsedResources) => {
      parsedResources.forEach((parsedRss) => {
        const { topics, feed } = parsedRss;
        const { id: currentId } = feed;
        // eslint-disable-next-line max-len
        const oldTopicsWithCurrentId = oldTopics.filter(({ id }) => currentId === id).map(({ title }) => title);
        const newTopics = topics.filter(({ title }) => !oldTopicsWithCurrentId.includes(title));
        console.log(newTopics);
        if (newTopics.length === 0) return;
        newTopics.forEach((newTopic) => watcherLoadingRSSContent.topics.push(newTopic));
        console.log(watcherLoadingRSSContent.topics);
      });
    })
    .then(() => {
      watcherLoadingRSSContent.updatingTopics.errorUpdating = false;
    })
    .catch(() => {
      watcherLoadingRSSContent.updatingTopics.errorUpdating = true;
    });
};

export default handlerCheckingNewPostInResources;