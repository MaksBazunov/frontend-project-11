const handlerModalBtns = () => {
    const btns = document.querySelectorAll('.btn-outline-primary');
    Array.from(btns).forEach((btn) => {
      btn.addEventListener('show.bs.modal', (e) => {
        e.preventDefault();
      });
    });
  };
  export default handlerModalBtns;