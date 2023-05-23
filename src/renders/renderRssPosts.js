import _ from 'lodash';

const renderRssPosts = (watcherFillingDataForRss, i18n) => {
  const container = document.createElement('section');
  container.classList.add('container-fluid', 'container-xxl', 'p-5');

  const row = document.createElement('div');
  row.classList.add('row');

  const feedColumn = document.createElement('div');
  feedColumn.classList.add('col-md-10', 'col-lg-4', 'mx-auto', 'order-0', 'order-lg-1', 'feeds');
  const cardFeed = document.createElement('div');
  cardFeed.classList.add('card', 'border-0');
  const cardBodyFeed = document.createElement('div');
  cardBodyFeed.classList.add('card-body');
  const cardTittleFeed = document.createElement('card-tittle', 'h4');
  cardTittleFeed.textContent = i18n.t('feeds');
  cardBodyFeed.append(cardTittleFeed);
  cardFeed.append(cardBodyFeed);
  feedColumn.append(cardFeed);

  const flowColumn = document.createElement('div');
  flowColumn.classList.add('col-md-10', 'col-lg-8', 'order-1', 'mx-auto', 'posts');
  const cardFlow = document.createElement('div');
  cardFlow.classList.add('card', 'border-0');
  const cardBodyFlow = document.createElement('div');
  cardBodyFlow.classList.add('card-body');
  const cardTittleFlow = document.createElement('card-tittle', 'h4');
  cardTittleFlow.textContent = i18n.t('flows');
  cardBodyFlow.append(cardTittleFlow);
  cardFlow.append(cardBodyFeed);
  flowColumn.append(cardFeed);

  const { feeds } = watcherFillingDataForRss;
  const { flows } = watcherFillingDataForRss;
  feeds.forEach((feed) => {
    const idFeed = feed.id;
    const listGroupFeed = document.createElement('ul');
    listGroupFeed.classList.add('list-group', 'border-0', 'rounded-0');

    const tittleFeed = document.createElement('h3');
    tittleFeed.classList.add('h6', 'm-0');
    tittleFeed.textContent = feed.tittle;
    const descriptionFeed = document.createElement('p');
    descriptionFeed.classList.add('m-0', 'small', 'text-black-50');
    descriptionFeed.textContent = feed.description;

    const flow = _.find(flows, { id: idFeed });

    const listGroupFlow = document.createElement('ul');
    listGroupFlow.classList.add('list-group', 'border-0', 'rounded-0');

    const tittleFlow = document.createElement('h3');
    tittleFlow.classList.add('h6', 'm-0');
    tittleFlow.textContent = flow.tittle;
    const descriptionFlow = document.createElement('p');
    descriptionFlow.classList.add('m-0', 'small', 'text-black-50');
    descriptionFlow.textContent = flow.description;

    cardFlow.append(listGroupFlow);
    cardFeed.append(listGroupFedd);
  });
};

export default renderRssPosts;