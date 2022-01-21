import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {

    
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Inspiración & Creación</h1>
        <p className="pl-desc">
            Selección de algunos de mis trabajos
          
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
            
          <Product key={item.id} img={item.img} link={item.link}  />
          
        ))}
      </div>
    </div>
  );
};

export default ProductList;