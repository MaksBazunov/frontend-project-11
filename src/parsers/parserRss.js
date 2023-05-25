const parserRSS = (response, id) => {
  try {
    const parser = new DOMParser();
    const data = parser.parseFromString(response.data.contents, 'text/xml');
    const feed = {
      title: data.querySelector('channel title').textContent,
      description: data.querySelector('channel description').textContent,
      id,
    };
    const topics = Array.from(data.querySelectorAll('item')).map((item) => ({
      title: item.querySelector('title').textContent,
      link: item.querySelector('link').textContent,
      description: item.querySelector('description').textContent,
      id,
    }));

    return { feed, topics };
  } catch {
    throw new Error('somethingWrongInParsers');
  }
};

export default parserRSS;