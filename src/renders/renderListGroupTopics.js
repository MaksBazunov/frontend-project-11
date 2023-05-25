const buildListGroupTopic = (topic) => {
  const li = document.createElement('li');
  li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start', 'border-0', 'border-end-0');
  li.setAttribute('data-topic-id', topic.childrenId);

  const tittleTopic = document.createElement('a');
  tittleTopic.classList.add('fw-bold');
  tittleTopic.setAttribute('href', topic.link);
  tittleTopic.textContent = topic.title;

  const modalButton = document.createElement('button');
  modalButton.classList.add('btn', 'btn-outline-primary', 'btn-sm');
  modalButton.setAttribute('data-bs-toggle', 'modal');
  modalButton.setAttribute('data-bs-target', topic.childrenId);
  modalButton.textContent = 'Просмотр';

  li.append(tittleTopic, modalButton);
  return li;
};

export default buildListGroupTopic;