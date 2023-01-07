import graphUrl from "./graphUrl";

const useFetch = async (options) => {
  const resp = await fetch(graphUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const data = await resp.json();
  return data;
};

export default useFetch;
