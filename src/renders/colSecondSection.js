const buildColumn = (text, i18n) => {
  const column = document.createElement('div');
  switch (text) {
    case 'feeds':
      column.classList.add('col-md-10', 'col-lg-4', 'mx-auto', 'order-0', 'order-lg-1', 'feeds');
      break;
    case 'topics':
      column.classList.add('col-md-10', 'col-lg-8', 'order-1', 'mx-auto', 'posts');
      break;
    default:
      throw new Error('something wrong in colSecondSection');
  }
  const card = document.createElement('div');
  card.classList.add('card', 'border-0');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTittle = document.createElement('card-tittle');
  cardTittle.classList.add('h4');
  cardTittle.textContent = i18n.t(`content.${text}`);

  cardBody.append(cardTittle);
  card.append(cardBody);
  column.append(card);

  return column;
};

export default buildColumn;