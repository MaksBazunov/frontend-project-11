import axios from 'axios';
import parserRSS from '../parsers/parserRss.js';

const handlerCheckingNewPostInResources = (watcherLoadingRSSContent, state) => {
  const { topics: oldTopics, resources } = watcherLoadingRSSContent;
  const proxy = 'https://allorigins.hexlet.app/get?';
  const promises = resources.map((resource) => axios.get(`${proxy}disableCache=true&url=${encodeURIComponent(resource.value)}/`)
    .then((response) => parserRSS(response, resource.id)));

  Promise.all(promises)
    .catch(() => {
      state.feedbackMessage = state.i18n.t('errorNetWorkUpdating');
      watcherLoadingRSSContent.updatingTopics.errorUpdating = true;
    })
    .then((parsedResources) => {
      parsedResources.forEach((parsedRss) => {
        const { topics } = parsedRss;
        const { feed } = parsedRss;
        const { id: currentId } = feed;
        // eslint-disable-next-line max-len
        const oldTobicsWithCurrentId = oldTopics.filter(({ id }) => currentId === id).map(({ title }) => title);
        const newTopics = topics.filter(({ title }) => !oldTobicsWithCurrentId.includes(title));

        if (newTopics.length === 0) return;
        newTopics.forEach((newTopic) => watcherLoadingRSSContent.topics.push(newTopic));
      });
    })
    .then(() => {
      watcherLoadingRSSContent.updatingTopics.errorUpdating = false;
    });
};

export default handlerCheckingNewPostInResources;