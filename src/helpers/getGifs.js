const getGifs = async (category) => {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=mX5DFd3T4PzVHXapPw8b59mL4MWRjATr`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((d) => ({
      id: d.id,
      title: d.title,
      url: d.images.original.url,
    }));
    return gifs;
  } catch (error) {
    console.log("error", error);
  }
};

export {getGifs};