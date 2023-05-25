const handlerBtnsTopics = (watcherLoadingRssContent) => {
    Array.from(document.querySelectorAll('.btn-outline-primary')).forEach((btn) => {
      btn.addEventListener('mouseover', (e) => {
        e.preventDefault();
        const currentId = e.target.dataset.bsTarget;
  
        const { topics } = watcherLoadingRssContent;
        const currentTopic = topics.filter(({ childrenId }) => childrenId === currentId);
        [watcherLoadingRssContent.uiState.currentModalTopic] = currentTopic;
      });
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const { currentModalTopic } = watcherLoadingRssContent.uiState;
        const { viewedTopics } = watcherLoadingRssContent.uiState;
  
        if (!viewedTopics.includes(currentModalTopic.id)) {
          viewedTopics.push(currentModalTopic.childrenId);
        }
      });
    });
  };
  
  export default handlerBtnsTopics;