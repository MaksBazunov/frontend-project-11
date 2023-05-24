const buildColumn = (text, i18n) => {
    const column = document.createElement('div');
    column.classList.add('col-md-10', 'col-lg-4', 'mx-auto', 'order-0', 'order-lg-1', 'feeds');
  
    const card = document.createElement('div');
    card.classList.add('card', 'border-0');
  
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
  
    const cardTittle = document.createElement('card-tittle', 'h4');
    cardTittle.textContent = i18n.t(text);
  
    cardBody.append(cardTittle);
    card.append(cardBody);
    column.append(card);
  
    return column;
  };
  
  export default buildColumn;