const buttonActivityRender = (process) => {
    const button = document.querySelector('.btn-primary');
    switch (true) {
        case (process === 'loadingRss'):
          button.setAttribute('disabled', '');
          break;
        case (process === 'loadedRss'):
          button.removeAttribute('disabled');
          break;
        default:
          throw new Error(`${process} something wrong`);
      }
    };
    
    export default buttonActivityRender;