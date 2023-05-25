const handlerLink = () => {
    const btn = document.querySelector('[data-check]');
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentlink = e.target.dataset.link;
      window.open(currentlink);
    });
  };
  
  export default handlerLink;