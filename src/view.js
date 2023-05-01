const view = (status, message) => {
    console.log(status, message, 'view');
    try {
      const columnForm = document.querySelector('[data-column-from]');
  
      const oldP = col.querySelector('p');
      if (oldP) oldP.remove();
  
      const input = document.querySelector('#url-input');
  
      const p = document.createElement('p');
      p.textContent = message;
      columnForm.append(p);
  
      if (status) {
        input.value = '';
        input.focus();
        p.classList.add('text-success');
        return;
      }
  
      p.classList.add('text-danger');
    } catch (e) {
      console.log(e, 'view');
    }
  };
  
  export default view;