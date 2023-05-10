import axios from 'axios';
import _ from 'lodash';

const parserRSS = (response) => {
  const parser = new DOMParser();
  const data = parser.parseFromString(response.data.contents, 'text/xml');
  console.log(data);
  return data;
};

const viewRssPosts = (resources) => {
  const proxy = 'https://allorigins.hexlet.app/get?';
  const { id, value: resource } = _.last(resources);
  axios.get(`${proxy}disableCache=true&url=${encodeURIComponent(resource)}/`)
  .then((response) => parserRSS(response))
  .catch((e) => console.log(e));
};

export default viewRssPosts;