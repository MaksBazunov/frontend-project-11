const buildListGroupFeed = (feed, id) => {
  const listGroupFeed = document.createElement('ul');
  listGroupFeed.classList.add('list-group', 'border-0', 'rounded-0');
  listGroupFeed.setAttribute('id', id);

  const titleFeed = document.createElement('h3');
  titleFeed.classList.add('h6', 'm-0');
  titleFeed.textContent = feed.title;

  const descriptionFeed = document.createElement('p');
  descriptionFeed.classList.add('m-0', 'small', 'text-black-50');
  descriptionFeed.textContent = feed.description;

  listGroupFeed.append(titleFeed, descriptionFeed);
  return listGroupFeed;
};

export default buildListGroupFeed;