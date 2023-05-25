const builTopicItem = (topic, i18n) => {
  const topicItem = document.createElement('li');
  topicItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start', 'border-0', 'border-end-0');
  topicItem.setAttribute('data-topic-id', topic.id);
  topicItem.setAttribute('data-topic-childrenId', topic.childrenId);

  const topicTitle = document.createElement('a');
  topicTitle.classList.add('fw-bold');
  topicTitle.setAttribute('href', topic.link);
  topicTitle.textContent = topic.title;

  const topicModalButton = document.createElement('button');
  topicModalButton.classList.add('btn', 'btn-outline-primary', 'btn-sm');
  topicModalButton.setAttribute('data-bs-toggle', 'modal');
  topicModalButton.setAttribute('data-bs-target', topic.childrenId);
  topicModalButton.textContent = i18n.t('content.view');

  topicItem.append(topicTitle, topicModalButton);
  return topicItem;
};

export default builTopicItem;