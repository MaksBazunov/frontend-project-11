import axios from 'axios';

const viewRssPosts = (resources) => {
  const proxy = 'https://allorigins.hexlet.app/get?';
  const resource = resources[resources.length - 1];
  axios.get(`${proxy}disableCache=true&url=${encodeURIComponent(resource)}/`).then((responses) => {
    const parser = new DOMParser();
    console.log(responses);
    const data = parser.parseFromString(responses.data.contents, 'text/xml');
    dataParser(data);
      }).catch((e) => console.log(e));
};

export default viewRssPosts;