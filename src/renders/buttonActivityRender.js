const buttonActivityRender = (process) => {
  console.log(process, 'process');
  const button = document.querySelector('.btn-form');
  switch (true) {
    case (process === 'loadingRssContent'):
      button.setAttribute('disabled', '');
      break;
    case (process === 'fillingRssUrl'):
      button.removeAttribute('disabled');
      break;
    default:
      throw new Error(`${process} something wrong in activity Btn`);
  }
};

export default buttonActivityRender;