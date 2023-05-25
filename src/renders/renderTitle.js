const renderTitle = (viewedTopics) => {
    viewedTopics.forEach((viewedTopicId) => {
      console.log(viewedTopicId);
      const currentId = viewedTopicId;
      const currentLi = document.querySelector(`[data-topic-childrenId="${currentId}"]`);
      const a = currentLi.querySelector('a');
      a.classList.remove('fw-bold');
      a.classList.add('fw-normal', 'link-secondary');
    });
  };
  
  export default renderTitle;