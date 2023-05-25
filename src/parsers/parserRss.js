const parserRSS = (response, id) => {
  const parser = new DOMParser();
  const data = parser.parseFromString(response.data.contents, 'text/xml');
  console.log(data);
  const feed = {
    tittle: data.querySelector('channel').children[0].textContent,
    description: data.querySelector('channel').children[1].textContent,
    id,
  };
  const topic = {
    tittle: data.querySelector('channel item').children[0].textContent,
    link: data.querySelector('channel item').children[2].textContent,
    description: data.querySelector('channel item').children[3].textContent,
    id,
  };
  return { feed, topic };
};

export default parserRSS;