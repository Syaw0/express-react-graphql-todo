import useFetch from "./fetch";

const getTodo = async () => {
  const query = `
  query GETALLTODOS{
    data:getTodos{
      completed{
        ...TODO
      }
      inProgress{
        ...TODO
      }
    }
  }

  fragment TODO on Todo{
    value
    id
  }
  `;
  const data = await useFetch("http://localhost:3000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: query, variables: {} }),
  });
  return data.data;
};

export default getTodo;
