const useFetch = async (url, options) => {
  const resp = await fetch(url, options);
  const data = await resp.json();
  return data;
};

export default useFetch;
