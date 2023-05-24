import axios from 'axios';
import parserRSS from '../parsers/parserRss.js';

const handlerDataRSSPosts = (watcherFillingDataForRSS, resultOfValidation) => {
  watcherFillingDataForRSS.process = 'loadingRss';

  const id = watcherFillingDataForRSS.resources.length;
  watcherFillingDataForRSS.resources.push({ id, value: resultOfValidation });

  const proxy = 'https://allorigins.hexlet.app/get?';
  axios.get(`${proxy}disableCache=true&url=${encodeURIComponent(resultOfValidation)}/`)
    .then((response) => parserRSS(response, id))
    .then((parsedRss) => {
      const { feed, topic } = parsedRss;
      watcherFillingDataForRSS.feeds.push(feed);
      watcherFillingDataForRSS.topics.push(topic);
      watcherFillingDataForRSS.process = 'renderingRSS';
      watcherFillingDataForRSS.process = 'loadingRSS';
    })
    .catch((e) => console.log(e));
};

export default handlerDataRSSPosts;