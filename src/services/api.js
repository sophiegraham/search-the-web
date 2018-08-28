export default {
  getDogs(searchTerm = 'dogs') {

    return fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(searchTerm)}&apiKey=a24614abab874ae5b2205e3ff9e23ca0`)
      .then(response => response.json());
  }
};