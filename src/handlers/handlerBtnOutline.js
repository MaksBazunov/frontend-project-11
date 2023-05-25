const handlerBtnsTopics = (watcherLoadingRssContent) => {
    Array.from(document.querySelectorAll('.btn-outline-primary')).forEach((btn) => {
      console.log(btn);
      btn.addEventListener('mouseover', (e) => {
        e.preventDefault();
        const currentId = e.target.dataset.bsTarget;
        console.log(currentId, 'currentId');
        // eslint-disable-next-line max-len
        const currentTopic = watcherLoadingRssContent.topics.filter(({ childrenId }) => childrenId === currentId);
        console.log(currentTopic);
        [watcherLoadingRssContent.uiState.currentModal] = currentTopic;
      });
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const modal = watcherLoadingRssContent.uiState.currentModal;
        console.log(watcherLoadingRssContent.uiState.viewedTopics);
        if (!watcherLoadingRssContent.uiState.viewedTopics.includes(modal.id)) {
          watcherLoadingRssContent.uiState.viewedTopics.push(modal.childrenId);
        }
      });
    });
  };
  
  export default handlerBtnsTopics;