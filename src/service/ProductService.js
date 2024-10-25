import axios from "axios";

const initProducts = [
    {
      id:1,
      name: "Monitor Samsung",
      price: 500,
      description: "Monitor chusquero",
    },
    {
      id:2,
      name: "Iphone 15",
      price: 800,
      description: "Una bestia",
    },
  ];

  const baseURL = 'http://localhost:8080/products';
  export const listProducts = () => {
    return initProducts;
}

export const findAll = async() => {

  try {
    const response = await axios.get(baseURL);
    return response;
  } catch (error) {
    console.log(error);
  }
    return null;
}

export const create = async({name,price,description}) => {

  try {
    const response = await axios.post(baseURL, {
      name:name,
      price:price,
      description:description
  });
  return response;
  } catch (error) {
    console.log(error);
  }
  
  return undefined;
  
}

export const update = async({id,name,price,description}) => {

  try {
    const response = await axios.put(`${baseURL}/${id}`, {
      name:name,
      price:price,
      description:description
  });
  return response;
  } catch (error) {
    console.log(error);
  }
  
  return undefined;
  
}

export const remove = async(id) => {
  try {
    axios.delete(`${baseURL}/${id}`)
  } catch (error) {
    console.log(error);
  }
}
    
