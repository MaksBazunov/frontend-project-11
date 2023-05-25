const parserRSS = (response, id) => {
  try {
    const parser = new DOMParser();
    const data = parser.parseFromString(response.data.contents, 'text/xml');
    const feed = {
      title: data.querySelector('channel title').textContent,
      description: data.querySelector('channel description').textContent,
      id,
    };
    let childrenId = id;
    const topics = Array.from(data.querySelectorAll('item')).map((item) => {
      const top = {
        title: item.querySelector('title').textContent,
        link: item.querySelector('link').textContent,
        description: item.querySelector('description').textContent,
        id,
        childrenId: `#i${childrenId}`,
      };
      childrenId += 1;
      return top;
    });

    return { feed, topics };
  } catch {
    throw new Error();
  }
};

export default parserRSS;