import Product from "../Product";
import "./style.css";

function MenuContainer({ list, callback }) {
  return (
    <div className="carousel">
      {list.map((item) => {
        return (
          <div className="cards">
            <Product
              callback={() => callback(item.id)}
              key={item.id}
              product={item}
            />
          </div>
        );
      })}
    </div>
  );
}

export default MenuContainer;
