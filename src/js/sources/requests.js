const routes = {
    trending: 'https://api.giphy.com/v1/gifs/trending',
    search: 'https://api.giphy.com/v1/gifs/search'
}

export default {
    getData (searchString=null,offset=0) {
        return fetch(`${searchString?routes.search:routes.trending}?api_key=IxdIInsR2xxwmLxr5ErJEPavFc7GJuHo&offset=${offset}&limit=28${(searchString)?'&q='+searchString:''}`).then((response) => response.json())
    }
  };