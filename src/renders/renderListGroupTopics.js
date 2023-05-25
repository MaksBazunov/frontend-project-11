const buildListGroupTopic = (topic) => {
  const listGroupTopic = document.createElement('ul');
  listGroupTopic.classList.add('list-group', 'border-0', 'rounded-0');

  const tittleTopic = document.createElement('h3');
  tittleTopic.classList.add('h6', 'm-0');

  const underTittleTopic = document.createElement('a');
  underTittleTopic.setAttribute('href', topic.link);
  underTittleTopic.textContent = topic.tittle;
  tittleTopic.append(underTittleTopic);

  const descriptionTopic = document.createElement('p');
  descriptionTopic.classList.add('m-0', 'small', 'text-black-50');
  descriptionTopic.textContent = topic.description;

  listGroupTopic.append(tittleTopic, descriptionTopic);
  return listGroupTopic;
};

export default buildListGroupTopic;