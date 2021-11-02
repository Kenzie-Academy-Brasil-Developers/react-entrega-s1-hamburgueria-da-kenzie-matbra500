import "./style.css";

function CartProduct({ product, callback }) {
  return (
    <div className="cart-description">
      <div className="cart-card-header">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="cart-name-and-category">
        <h2 className="cart-nome-produto">{product.name}</h2>
        <span className="cart-categoria-produto">{product.category}</span>
      </div>
      <div className="remover-flex">
        <span className="cart-remove" onClick={callback}>
          Remover
        </span>
      </div>
    </div>
  );
}

export default CartProduct;
