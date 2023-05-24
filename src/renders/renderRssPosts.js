import buildColumn from './colSecondSection.js';
import buildListGroupFeed from './renderListGroupFeed.js';
import buildListGroupTopic from './renderListGroupTopics.js';

const renderRssPosts = (watcherFillingDataForRSS, i18n) => {
  const parentContainer = document.querySelector('.container');
  const container = document.createElement('section');
  container.classList.add('container-fluid', 'container-xxl', 'p-5');

  const row = document.createElement('div');
  row.classList.add('row');

  const feedColumn = buildColumn('feeds', i18n);
  const topicColumn = buildColumn('flows', i18n);
  console.log(feedColumn, topicColumn);
  const { feeds } = watcherFillingDataForRSS;
  const { topics } = watcherFillingDataForRSS;
  console.log(watcherFillingDataForRSS, 'flows');
  feeds.forEach((feed) => {
    const idFeed = feed.id;
    const listGroupFeed = buildListGroupFeed(feed, idFeed);

    const listsGroupTopics = topics.filter(({ id }) => id === idFeed)
      .map((currentTopic) => buildListGroupTopic(currentTopic));

    feedColumn.append(listGroupFeed);
    listsGroupTopics.forEach((currentFlowList) => topicColumn.append(currentFlowList));
  });
  row.append(feedColumn, topicColumn);
  container.append(row);
  parentContainer.append(container);
};

export default renderRssPosts;