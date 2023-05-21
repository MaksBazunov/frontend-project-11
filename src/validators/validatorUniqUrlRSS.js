const isUniqRSSinFeeds = (resources, url) => {
    const copies = resources.filter(({ value }) => value === url);
    if (copies.length >= 1) return false;
    return true;
  };
  
  export default isUniqRSSinFeeds;