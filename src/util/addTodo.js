import useFetch from "./fetch";

const addTodo = async (value) => {
  const query = `
  mutation AddTodo( $value:String!) {
    data:addTodo(value:$value){
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
  const data = await useFetch({
    body: JSON.stringify({ query, variables: { value } }),
  });

  return data.data;
};

export default addTodo;
