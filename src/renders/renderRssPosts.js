import buildColumn from './colSecondSection.js';
import builFeedItem from './renderListGroupFeed.js';
import builTopicItem from './renderListGroupTopics.js';

const renderRssContent = (watcherLoadingRSSContent, i18n) => {
  try {
    const parentContainer = document.querySelector('main');

    const oldChildrensContainer = document.querySelector('[data-section-response]');
    if (oldChildrensContainer) oldChildrensContainer.remove();

    const childrensContainer = document.createElement('section');
    childrensContainer.classList.add('container-fluid', 'container-xxl', 'p-5');
    childrensContainer.setAttribute('data-section-response', '');

    const row = document.createElement('div');
    row.setAttribute('data-content-container', '');
    row.classList.add('row');

    const feedColumn = buildColumn('feeds', i18n);
    const topicColumn = buildColumn('topics', i18n);

    const listGroupTopics = document.createElement('ul');
    listGroupTopics.classList.add('list-group', 'border-0', 'rounded-0');
    listGroupTopics.setAttribute('data-group-topics', '');

    const listGroupFeeds = document.createElement('ul');
    listGroupFeeds.classList.add('list-group', 'border-0', 'rounded-0');
    listGroupFeeds.setAttribute('data-group-feeds', '');

    const { feeds } = watcherLoadingRSSContent;
    const { topics } = watcherLoadingRSSContent;

    feeds.forEach((feed) => {
      const feedId = feed.id;
      const feedItem = builFeedItem(feed, feedId);

      const topicItems = topics.filter(({ id }) => id === feedId)
        .map((currentTopic) => builTopicItem(currentTopic, i18n));

      listGroupFeeds.append(feedItem);
      topicItems.forEach((currentTopicsList) => listGroupTopics.append(currentTopicsList));
    });

    topicColumn.append(listGroupTopics);
    feedColumn.append(listGroupFeeds);
    row.append(topicColumn, feedColumn);
    childrensContainer.append(row);
    parentContainer.append(childrensContainer);
  } catch (e) {
    console.log(e);
  }
};

export default renderRssContent;