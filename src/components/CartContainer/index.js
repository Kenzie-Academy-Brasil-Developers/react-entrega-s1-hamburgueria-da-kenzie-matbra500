import "./style.css";
import CartProduct from "../CartProduct";

function CartContainer({ list, callback, callbackPreco, callbackRemover }) {
  if (list.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-title">
          <div>Carrinho de compras</div>
        </div>
        <div className="empty-cart-description">
          <h2 className="empty-cart-h2">Sua Sacola está vazia</h2>
          <span className="empty-cart-span">Adicione itens</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart-container">
        <div className="cart-title">
          <div>Carrinho de compras</div>
        </div>
        {list.map((item, index) => {
          return (
            <div className="cart-products">
              <CartProduct
                callback={() => callback(item.id)}
                key={index}
                product={item}
              />
            </div>
          );
        })}
        <hr></hr>
        <div className='total-e-preco'>
          <span className='preco'>Total: R$ {callbackPreco}</span>
        </div>
        <button onClick={callbackRemover} className='remover-todos'>Remover todos</button>
        <div className='white-space'></div>
      </div>
    );
  }
}

export default CartContainer;
