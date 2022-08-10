const Product = ({ product }) => {
  const { Price, Description, Image } = product;
  return (
    <div className="product">
      <div className="image-wrapper">
        <img src={Image} alt="test" className="product-image" />
      </div>
      <div className="product-description">
        <p className="product-details">{Description}</p>
        <div className="product-price-description">
          <span className="product-price">{Price}</span>
          <button className="add-to-cart">Add to cart</button>
        </div>
      </div>
      <div className="product-cart"></div>
    </div>
  );
};
export default Product;
