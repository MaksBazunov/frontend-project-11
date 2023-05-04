const view = (status, message) => {
    console.log(status, message, 'view');
    try {
      const columnForm = document.querySelector('[data-column-form]');
      console.log(columnForm);
      const oldP = document.querySelector('.feedback');
      if (oldP) oldP.remove();

      const input = document.querySelector('#url-input');
      if (input.classList.contains('is-invalid')) input.classList.remove('is-invalid');

      const p = document.createElement('p');
      p.classList.add('feedback', 'm-0', 'position-absolute', 'small');
      p.textContent = message;
      columnForm.append(p);
  
      if (status) {
        input.value = '';
        input.focus();
        p.classList.add('text-success');
        return;
      }
  
      p.classList.add('text-danger');
      input.classList.add('is-invalid');
    } catch (e) {
      console.log(e, 'something wrong in view');
    }
  };
  
  export default view;