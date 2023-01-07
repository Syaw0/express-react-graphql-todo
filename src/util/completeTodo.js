import useFetch from "./fetch";

const completeTodo = async (id, value) => {
  const query = `
  mutation CompleteTodo($id:ID! , $value:String!) {
    data:completeTodo(id:$id,value:$value){
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
    body: JSON.stringify({ query, variables: { id, value } }),
  });

  return data.data;
};

export default completeTodo;
