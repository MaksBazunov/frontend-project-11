const view = (status, message) => {
    console.log(status, message, 'view');
    try {
      const columnForm = document.querySelector('[data-column-from]');
  
      const oldP = col.querySelector('p');
      if (oldP) oldP.remove();
  
      const input = document.querySelector('#url-input');

      if (input.hasAttribute('is-valid')) input.removeAttribute('is-valid');
      if (input.hasAttribute('is-invalid')) input.removeAttribute('is-invalid');
      
      const p = document.createElement('p');
      p.textContent = message;
      columnForm.append(p);
  
      if (status) {
        input.value = '';
        input.focus();
        p.setAttribute('text-success');
        input.setAttribute('is-valid');
        return;
      }
  
      p.setAttribute('text-danger');
      input.setAttribute('is-invalid');
    } catch (e) {
      console.log(e, 'view');
    }
  };
  
  export default view;