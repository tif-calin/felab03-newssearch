const URL = 'https://newsapi.org/v2/everything';

const fetchArticles = async q => {
  if (!q) return [];

  const url = URL + `?q=${q}&apiKey=${process.env.NEWS_API_KEY}`;

  const resp = await fetch(url);
  const json = await resp.json();

  return json.articles;
};

export { fetchArticles };
