import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS =  [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    description: "Product description",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    description: "Product description",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    description: "Product description",
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    description: "Product description",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
