
const buildListGroupFeed = (feed, id) => {
  const listGroupFeed = document.createElement('ul');
  listGroupFeed.classList.add('list-group', 'border-0', 'rounded-0');
  listGroupFeed.setAttribute('id', id);

  const tittleFeed = document.createElement('h3');
  tittleFeed.classList.add('h6', 'm-0');
  tittleFeed.textContent = feed.tittle;

  const descriptionFeed = document.createElement('p');
  descriptionFeed.classList.add('m-0', 'small', 'text-black-50');
  descriptionFeed.textContent = feed.description;

  listGroupFeed.append(tittleFeed, descriptionFeed);
  return listGroupFeed;
};

export default buildListGroupFeed;