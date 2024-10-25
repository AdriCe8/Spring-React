import PropTypes from "prop-types";

export const ProductDetails = ({
  handleRemove,
  product = {},
  handleSelectedProduct,
}) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.description}</td>

      <td>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => handleSelectedProduct(product)}
        >
          Actulizar
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleRemove(product.id)}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleSelectedProduct: PropTypes.func.isRequired,
};
