import PropTypes from "prop-types"
import { ProductDetails } from "./ProductDetails"

export const ProductTable = ({products = [], handleRemove, handleSelectedProduct}) => {
    return (
        
        <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) =>{
            return (
            <ProductDetails product={product} handleSelectedProduct={handleSelectedProduct} handleRemove={handleRemove} key={product.id} />
          )})}
        </tbody>
      </table>
    
    )
}

ProductTable.propTypes = {
  products: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleSelectedProduct: PropTypes.func.isRequired
}