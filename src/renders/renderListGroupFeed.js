const builFeedItem = (feed, id) => {
  const feedItem = document.createElement('li');
  feedItem.classList.add('list-group-item', 'border-0', 'rounded-0');
  feedItem.setAttribute('data-feed-id', id);

  const feedtitle = document.createElement('h3');
  feedtitle.classList.add('h6', 'm-0');
  feedtitle.textContent = feed.title;

  const feedDescription = document.createElement('p');
  feedDescription.classList.add('m-0', 'small', 'text-black-50');
  feedDescription.textContent = feed.description;

  feedItem.append(feedtitle, feedDescription);
  return feedItem;
};

export default builFeedItem;