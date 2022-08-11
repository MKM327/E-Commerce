const ProductDescription = ({ product }) => {
  const { Price, Description, id } = product;
  return (
    <div className="product-description">
      <p className="product-details">{Description}</p>
      <div className="product-price-description">
        <span className="product-price">{Price}</span>
        <button
          className="product-button"
          onClick={() => {
            sessionStorage.setItem(id, JSON.stringify(product));
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
const Product = ({ product }) => {
  const { Image } = product;
  return (
    <div className="product">
      <div className="image-wrapper">
        <img src={Image} alt="test" className="product-image" />
      </div>
      <ProductDescription product={product} />
      <div className="product-cart"></div>
    </div>
  );
};
export default Product;
