import axios from 'axios';
import parserRSS from '../parsers/parserRss.js';
// eslint-disable-next-line import/no-self-import
import handlerSetTimeout from './handlerCheckingNewPostInResources.js';

const handlerCheckingNewPostInResources = (watcherLoadingRSSContent) => {
  const { topics: oldTopics, resources } = watcherLoadingRSSContent;
  const proxy = 'https://allorigins.hexlet.app/get?';
  const promises = resources.map((resource) => {
    return axios.get(`${proxy}disableCache=true&url=${encodeURIComponent(resource.value)}/`)
    .then((response) => parserRSS(response, resource.id))
  });

  Promise.all(promises)
  .then((parsedResources) => {
    parsedResources.forEach((parsedRss) => {
    const { topics } = parsedRss;
    const [{ currentId }] = topics;
    const oldTobicsWithCurrentId = oldTopics.filter(({ id }) => currentId === id)
      .map(({ title }) => title);
    const newTopics = topics.filter(({ title }) => !oldTobicsWithCurrentId.includes(title));
    if (newTopics.length === 0) return;
    newTopics.forEach((newTopic) => watcherLoadingRSSContent.topics.push(newTopic))})
    .then(() => {
    watcherLoadingRSSContent.addingCounter += 1;
    handlerSetTimeout(watcherLoadingRSSContent, true);
  }).catch((e) => {
    console.log(e);
    watcherLoadingRSSContent.addingCounter = 0;
    handlerSetTimeout(watcherLoadingRSSContent, false);
  });
});
}
export default handlerCheckingNewPostInResources;
/*
        watcherLoadingRSSContent.addingCounter += 1;
        handlerSetTimeout(watcherLoadingRSSContent, true);

        watcherLoadingRSSContent.addingCounter = 0;
        handlerSetTimeout(watcherLoadingRSSContent, false);
*/