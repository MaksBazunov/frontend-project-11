/* eslint-disable no-param-reassign */
import axios from 'axios';
import parserRSS from '../parsers/parserRss.js';

const handlerLoadingRSSContent = (watcherLoadingRSSContent, rssUrl, state) => {
  const id = watcherLoadingRSSContent.resources.length;
  watcherLoadingRSSContent.resources.push({ id, value: rssUrl });

  const proxy = 'https://allorigins.hexlet.app/get?';
  axios.get(`${proxy}disableCache=true&url=${encodeURIComponent(rssUrl)}/`)
    .catch(() => {
      state.feedbackMessage = state.i18n.t('errorNetWork');
      watcherLoadingRSSContent.errorLoading = true;
    })
    .then((response) => parserRSS(response, id))
    .catch(() => {
      state.feedbackMessage = state.i18n.t('errorResource');
      watcherLoadingRSSContent.errorLoading = true;
    })
    .then((parsedRss) => {
      const { feed, topics } = parsedRss;
      topics.forEach((topic) => watcherLoadingRSSContent.topics.push(topic));
      watcherLoadingRSSContent.feeds.push(feed);
      state.feedbackMessage = state.i18n.t('isLoaded');
      watcherLoadingRSSContent.errorLoading = false;
      watcherLoadingRSSContent.errorLoading = null;
    });
};

export default handlerLoadingRSSContent;