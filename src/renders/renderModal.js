const renderModal = (viewedTopic) => {
    const {
      description, link, title, childrenId,
    } = viewedTopic;
  
    const modalFade = document.querySelector('.modal');
    modalFade.id = childrenId.slice(1);
  
    const modalTitle = document.querySelector('.modal-title');
    modalTitle.textContent = title;
  
    const modaBody = document.querySelector('.modal-body');
    modaBody.textContent = description;
  
    const btnCheck = document.querySelector('[data-check]');
  
    if (btnCheck.hasAttribute('[data-link^="ht"]')) {
      btnCheck.removeAttribute('[data-link^="ht"]');
    }
  
    btnCheck.setAttribute('data-link', link);
  
    btnCheck.addEventListener('click', (e) => {
      e.preventDefault();
      const currentlink = e.target.dataset.link;
      window.open(currentlink);
    });
  };
  
  export default renderModal;