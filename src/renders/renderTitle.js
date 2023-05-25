const renderTitle = (viewedTopics) => {
    console.log(viewedTopics, '4444444444444444444');
  viewedTopics.forEach((viewedTopicId) => {
    const currentId = viewedTopicId;
    const currentLi = document.querySelector(`[data-topic-id="${currentId}"]`);
    console.log(currentId, currentLi, '5555555555555555555');
    const a = currentLi.querySelector('a');
    a.classList.remove('fw-bold');
    a.classList.add('fw-normal', 'link-secondary');
  });
};

export default renderTitle;