const parserRSS = (response, id) => {
  const parser = new DOMParser();
  const data = parser.parseFromString(response.data.contents, 'text/xml');
  console.log(data);
  const feed = {
    title: data.querySelector('channel title').textContent,
    description: data.querySelector('channel description').textContent,
    id,
  };
  console.log(data.querySelectorAll('item'));
  const topics = Array.from(data.querySelectorAll('item')).map((item) => ({
    title: item.querySelector('title').textContent,
    link: item.querySelector('link').textContent,
    description: item.querySelector('description').textContent,
    id,
  }));

  return { feed, topics };
};

export default parserRSS;