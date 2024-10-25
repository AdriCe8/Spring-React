import { useEffect, useState } from "react";

export const Formulario = ({handleAdd, productSelected}) => {
  const initialDataForm = {
    id: 0,
    name: "",
    price: "",
    description: "",
  };
  const [form, setForm] = useState(initialDataForm);
  const { id,name, price, description } = form;

  useEffect(()=>{
    setForm(productSelected);
  },[productSelected])
  return (
    <form onSubmit={(event)=>{
      event.preventDefault()
      if(!name || !price || !description){
        alert("Los campos no pueden estar vacios")
        return;
      }
      handleAdd(form);
      setForm(initialDataForm);
    }    
    }>
      <div>
        <input
          placeholder="Nombre"
          className="form-control my-3 w-75"
          name="name"
          value={name}
          onChange={(event) =>
            setForm({
              ...form,
              name: event.target.value,
            })
          }
        ></input>
      </div>
      <div>
        <input
          placeholder="Precio"
          className="form-control my-3 w-75"
          name="price"
          value={price}
          onChange={(event) =>
            setForm({
              ...form,
              price: event.target.value,
            })
          }
        ></input>
      </div>
      <div>
        <input
          placeholder="Descripción"
          className="form-control my-3 w-75"
          name="descripcion"
          value={description}
          onChange={(event) =>
            setForm({
              ...form,
              description: event.target.value,
            })
          }
        ></input>
      </div>
      <div>
      <button className="btn btn-primary" type="submit">
        {id>0 ? 'Update':'Create'}
        </button>

      </div>
    </form>
  );
};
