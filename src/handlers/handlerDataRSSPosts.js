import axios from 'axios';
import parserRSS from '../parsers/parserRss.js';

const handlerLoadingRSSContent = (watcherLoadingRSSContent, rssUrl) => {
  const id = watcherLoadingRSSContent.resources.length;
  watcherLoadingRSSContent.resources.push({ id, value: rssUrl });

  const proxy = 'https://allorigins.hexlet.app/get?';
  axios.get(`${proxy}disableCache=true&url=${encodeURIComponent(rssUrl)}/`)
    .then((response) => parserRSS(response, id))
    .then((parsedRss) => {
      const { feed, topic } = parsedRss;
      watcherLoadingRSSContent.topics.push(topic);
      watcherLoadingRSSContent.feeds.push(feed);
    })
    .catch((e) => {
      console.log(e);
      throw new Error(e);
    });
};

export default handlerLoadingRSSContent;