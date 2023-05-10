const handlerDataRSSPosts = (watcherFillingDataForRss, resultOfValidation) => {
    watcherFillingDataForRss.process = 'loadingRss';
  // eslint-disable-next-line max-len
  watcherFillingDataForRss.resources.push({ id: watcherFillingDataForRss.feeds.length, value: resultOfValidation });
};

export default handlerDataRSSPosts;
