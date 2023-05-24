import buildColumn from './colSecondSection.js';
import buildListGroupFeed from './renderListGroupFeed.js';
import buildListGroupTopic from './renderListGroupTopics.js';

const renderRssContent = (watcherLoadingRSSContent, i18n) => {
  const parentContainer = document.querySelector('.container');
  const oldChildrensContainer = document.querySelector('[data-childrens]');
  // eslint-disable-next-line no-unused-expressions
  if (oldChildrensContainer) oldChildrensContainer.remove();

  const childrensContainer = document.createElement('section');
  childrensContainer.classList.add('container-fluid', 'container-xxl', 'p-5');
  childrensContainer.setAttribute('data-childrens', '');

  const row = document.createElement('div');
  row.classList.add('row');

  const feedColumn = buildColumn('feeds', i18n);
  const topicColumn = buildColumn('topics', i18n);

  const { feeds } = watcherLoadingRSSContent;
  const { topics } = watcherLoadingRSSContent;

  feeds.forEach((feed) => {
    const idFeed = feed.id;
    const listGroupFeed = buildListGroupFeed(feed, idFeed);

    const listsGroupTopics = topics.filter(({ id }) => id === idFeed)
      .map((currentTopic) => buildListGroupTopic(currentTopic));

    feedColumn.append(listGroupFeed);
    listsGroupTopics.forEach((currentFlowList) => topicColumn.append(currentFlowList));
  });
  row.append(feedColumn, topicColumn);
  childrensContainer.append(row);
  parentContainer.append(childrensContainer);
};

export default renderRssContent;