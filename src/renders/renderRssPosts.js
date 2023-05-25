import buildColumn from './colSecondSection.js';
import buildListGroupFeed from './renderListGroupFeed.js';
import buildListGroupTopic from './renderListGroupTopics.js';

const renderRssContent = (watcherLoadingRSSContent, i18n) => {
  try {
    console.log('rendering');
    const parentContainer = document.querySelector('main');
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
    const listGroupTopic = document.createElement('ul');
    listGroupTopic.classList.add('list-group', 'border-0', 'rounded-0');

    const { feeds } = watcherLoadingRSSContent;
    const { topics } = watcherLoadingRSSContent;

    feeds.forEach((feed) => {
      const idFeed = feed.id;
      const listGroupFeed = buildListGroupFeed(feed, idFeed);

      const listsGroupTopics = topics.filter(({ id }) => id === idFeed)
        .map((currentTopic) => buildListGroupTopic(currentTopic));

      feedColumn.append(listGroupFeed);
      listsGroupTopics.forEach((currentTopicsList) => topicColumn.append(currentTopicsList));
    });

    topicColumn.append(listGroupTopic);
    row.append(topicColumn, feedColumn);
    childrensContainer.append(row);
    parentContainer.append(childrensContainer);
  } catch (e) {
    console.log(e);
  }
};

export default renderRssContent;