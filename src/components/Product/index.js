import "./style.css";
function Product({ product, callback }) {
  return (
    <div className="description">
      <div className="card-header">
        <img src={product.img} alt={product.name} />
      </div>
      <h2 className="nome-produto">{product.name}</h2>
      <span className="categoria-produto">{product.category}</span>
      <span className="preco-produto">{product.price} R$</span>
      <button className="button-produto" onClick={callback}>
        Adicionar
      </button>
    </div>
  );
}

export default Product;
